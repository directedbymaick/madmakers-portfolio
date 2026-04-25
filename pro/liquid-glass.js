/* =====================================================================
   liquid-glass.js — WebGL liquid glass with magnifying lens, chromatic
   aberration, prismatic edge and metaball drops following the cursor.
   ---------------------------------------------------------------------
   Loaded as an ES module. Imports Three.js via the importmap declared
   in Mad Makers Landing.html (no build step required).
   Each .photo[data-liquid] gets its own WebGLRenderer + scene.
   The cover <img> stays in the DOM (visible by default).
   The <video.reveal> is consumed purely as a VideoTexture.
   The fragment shader composes drops as metaball SDFs (smin), refracts
   the video UV along the SDF normal, samples R/G/B with separate
   offsets for chromatic aberration, then layers a Phong-like specular
   and a prismatic rainbow at the edge band.
   ===================================================================== */

import * as THREE from 'three';

const VERT = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

const FRAG = /* glsl */ `
  precision highp float;

  #define MAX_DROPS 24
  #define PI 3.14159265359

  uniform sampler2D uVideo;
  uniform float     uTime;
  uniform float     uAspect;   // width / height of card
  uniform vec3      uDrops[MAX_DROPS]; // .xy = pos in 0..1, .z = radius
  uniform int       uDropCount;

  varying vec2 vUv;

  /* polynomial smooth-min — IQ. blends two SDFs into a single organic shape. */
  float smin(float a, float b, float k) {
    float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
    return mix(b, a, h) - k * h * (1.0 - h);
  }

  /* aspect-correct displacement so circles aren't ovals */
  vec2 ar(vec2 p) { return vec2(p.x * uAspect, p.y); }

  /* signed distance to the metaball blob at uv */
  float blobSDF(vec2 uv) {
    float d = 1e9;
    for (int i = 0; i < MAX_DROPS; i++) {
      if (i >= uDropCount) break;
      vec3 drop = uDrops[i];
      vec2 dd = ar(uv - drop.xy);
      float di = length(dd) - drop.z;
      d = smin(d, di, 0.07);
    }
    return d;
  }

  /* finite-difference normal of the SDF surface */
  vec2 sdfNormal(vec2 uv) {
    float e = 0.0022;
    float dx = blobSDF(uv + vec2(e, 0.0)) - blobSDF(uv - vec2(e, 0.0));
    float dy = blobSDF(uv + vec2(0.0, e)) - blobSDF(uv - vec2(0.0, e));
    return normalize(vec2(dx, dy) + vec2(1e-5));
  }

  void main() {
    vec2 uv = vUv;

    if (uDropCount == 0) {
      gl_FragColor = vec4(0.0);
      return;
    }

    float d = blobSDF(uv);
    float alpha = smoothstep(0.005, -0.004, d);
    if (alpha < 0.001) {
      gl_FragColor = vec4(0.0);
      return;
    }

    /* depth: 0 at glass edge, 1 at the blob's interior */
    float depth = clamp(-d * 10.0, 0.0, 1.0);
    vec2 n = sdfNormal(uv);

    /* pull UVs toward blob center for a magnification (lens) feel */
    vec2 centerSum = vec2(0.0);
    float wSum = 0.0;
    for (int i = 0; i < MAX_DROPS; i++) {
      if (i >= uDropCount) break;
      vec3 dr = uDrops[i];
      float di = length(ar(uv - dr.xy));
      float w = exp(-di * 7.0);
      centerSum += dr.xy * w;
      wSum += w;
    }
    vec2 nearest = centerSum / max(wSum, 1e-4);

    /* Refraction: bend UVs along the inverse normal (looks like
       light bending through curved glass). */
    vec2 refUv = uv - n * (1.0 - depth) * 0.045;
    refUv = mix(refUv, nearest, depth * 0.20);

    /* Chromatic aberration: separate R/G/B sample offsets (stronger
       at the edge, fades toward the center). */
    float chroma = mix(0.014, 0.003, depth);
    vec3 video;
    video.r = texture2D(uVideo, refUv + n * chroma).r;
    video.g = texture2D(uVideo, refUv).g;
    video.b = texture2D(uVideo, refUv - n * chroma).b;

    /* Phong-like specular highlight from a fixed top-left light. */
    vec3 lightDir = normalize(vec3(-0.42, 0.55, 0.72));
    vec3 nrm3 = normalize(vec3(-n * (1.0 - depth * 0.45), 0.55 + depth * 0.35));
    vec3 view = vec3(0.0, 0.0, 1.0);
    vec3 ref = reflect(-lightDir, nrm3);
    float spec = pow(max(dot(ref, view), 0.0), 30.0);
    float diffuse = max(dot(nrm3, lightDir), 0.0) * 0.18;

    /* Rim lighting (Fresnel-ish) — brighter near the edge. */
    float rim = pow(1.0 - depth, 2.0);

    /* Prismatic edge: a thin rainbow band at the surface. Hue varies
       with the surface tangent angle so it feels physically driven. */
    float edgeBand = smoothstep(0.005, -0.005, d) *
                     (1.0 - smoothstep(-0.005, -0.022, d));
    float h = atan(n.y, n.x) / (2.0 * PI) + 0.5 + uTime * 0.04;
    vec3 prism = vec3(
      sin(h * 2.0 * PI)             * 0.5 + 0.5,
      sin((h + 0.333) * 2.0 * PI)   * 0.5 + 0.5,
      sin((h + 0.666) * 2.0 * PI)   * 0.5 + 0.5
    );

    /* Inner cool tint (subtle blue at the deepest part — like a
       water droplet bottom). */
    vec3 deepTint = vec3(0.92, 0.97, 1.06);

    vec3 col = video * mix(vec3(1.0), deepTint, depth * 0.35);
    col += diffuse;
    col += vec3(1.0) * spec * 0.95;
    col += vec3(1.0, 0.96, 1.05) * rim * 0.18;
    col = mix(col, col + prism * 0.22, edgeBand);

    gl_FragColor = vec4(col, alpha);
  }
`;

/* must match #define MAX_DROPS in the fragment shader */
const MAX_DROPS = 24;
const CLUSTER_FOLLOW = 0.10;    // higher = blob follows cursor faster
const SCALE_OPEN = 0.10;        // hover-in scale lerp speed
const SCALE_CLOSE = 0.06;       // hover-out shrink speed
/* Trail (wake): drops emitted behind the cursor as it moves, with
   perpendicular splash jitter and short lifetime — visually merges
   with the main blob through the SDF smin so the water "parts" and
   "closes back" as the finger passes. */
const TRAIL_MAX = 14;
const TRAIL_SPAWN_DIST = 0.04;  // gate so a still cursor doesn't spawn
const TRAIL_LIFE_MIN = 480;
const TRAIL_LIFE_VAR = 360;

class LiquidCard {
  constructor(card) {
    this.card = card;
    this.video = card.querySelector('video.reveal');
    if (!this.video) return;

    /* prime the video so the first frame is decoded before hover */
    this.video.muted = true;
    this.video.playsInline = true;
    this.video.loop = true;

    this.canvas = document.createElement('canvas');
    this.canvas.className = 'liquid-canvas';
    card.appendChild(this.canvas);

    this.hovering = false;
    this.lastT = performance.now();

    /* The blob is a fixed cluster of sub-drops orbiting a moving
       center. Each sub-drop has its own wobble phases/freqs so the
       silhouette is always different. The whole cluster is scaled
       0..1 to grow on hover and shrink on leave. */
    this.cluster = {
      x: 0.5, y: 0.5,         // current cluster center
      tx: 0.5, ty: 0.5,       // target cluster center (cursor)
      scale: 0,                // current scale (eased)
      tscale: 0,               // target scale (1 on hover, 0 off)
    };
    this.subDrops = this.makeSubDrops();

    /* trail: short-lived drops spawned along cursor motion */
    this.trail = [];
    this.lastTrailX = 0.5;
    this.lastTrailY = 0.5;

    this.initGL();
    this.bindEvents();
    this.loop();
  }

  initGL() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,
      antialias: true,
      premultipliedAlpha: false,
      powerPreference: 'high-performance',
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.renderer.setClearColor(0x000000, 0);

    this.scene = new THREE.Scene();
    this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const videoTex = new THREE.VideoTexture(this.video);
    videoTex.minFilter = THREE.LinearFilter;
    videoTex.magFilter = THREE.LinearFilter;
    videoTex.colorSpace = THREE.SRGBColorSpace;

    const dropsArr = [];
    for (let i = 0; i < MAX_DROPS; i++) dropsArr.push(new THREE.Vector3());

    this.uniforms = {
      uVideo:     { value: videoTex },
      uTime:      { value: 0 },
      uAspect:    { value: 1 },
      uDrops:     { value: dropsArr },
      uDropCount: { value: 0 },
    };

    const mat = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: VERT,
      fragmentShader: FRAG,
      transparent: true,
      depthTest: false,
      depthWrite: false,
    });

    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mat);
    this.scene.add(mesh);

    this.resize();
    if ('ResizeObserver' in window) {
      new ResizeObserver(() => this.resize()).observe(this.card);
    } else {
      window.addEventListener('resize', () => this.resize());
    }
  }

  resize() {
    const r = this.card.getBoundingClientRect();
    if (r.width <= 0 || r.height <= 0) return;
    this.renderer.setSize(r.width, r.height, false);
    this.uniforms.uAspect.value = r.width / r.height;
  }

  bindEvents() {
    this.card.addEventListener('pointerenter', e => this.onEnter(e));
    this.card.addEventListener('pointermove',  e => this.onMove(e));
    this.card.addEventListener('pointerleave', () => this.onLeave());
  }

  localXY(e) {
    const r = this.card.getBoundingClientRect();
    return {
      x:    (e.clientX - r.left) / r.width,
      y: 1 - (e.clientY - r.top)  / r.height,
    };
  }

  /* Build the cluster of sub-drops. Each sub-drop has:
       - a rest offset (ox, oy) inside the cluster
       - drift/pulse wobble so the silhouette is never static
       - its own world position (wx, wy) + velocity (vx, vy)
         driven by a spring toward its rest position. The spring
         lag is what makes the blob stretch / trail when the cursor
         moves quickly. */
  makeSubDrops() {
    const drops = [];
    /* Central anchor — firmer spring, lower lag (the "head"). */
    drops.push({
      ox: 0, oy: 0,
      baseR: 0.22,
      driftAmp: 0.018,
      driftFx: 0.45 + Math.random() * 0.25,
      driftFy: 0.40 + Math.random() * 0.25,
      driftPx: Math.random() * Math.PI * 2,
      driftPy: Math.random() * Math.PI * 2,
      pulseAmp: 0.10,
      pulseF:  0.55 + Math.random() * 0.4,
      pulseP:  Math.random() * Math.PI * 2,
      /* physics — central drop is firmer (the "head" of the blob) */
      wx: 0, wy: 0, vx: 0, vy: 0,
      spring:  0.16, damping: 0.82,
    });
    /* Orbital drops — uneven angles + softer springs (more lag → tail). */
    const N = 7;
    for (let i = 0; i < N; i++) {
      const angle = (i / N) * Math.PI * 2 + (Math.random() - 0.5) * 0.55;
      const dist = 0.13 + Math.random() * 0.08;
      drops.push({
        ox: Math.cos(angle) * dist,
        oy: Math.sin(angle) * dist,
        baseR: 0.13 + Math.random() * 0.06,
        driftAmp: 0.030 + Math.random() * 0.022,
        driftFx: 0.55 + Math.random() * 0.55,
        driftFy: 0.50 + Math.random() * 0.55,
        driftPx: Math.random() * Math.PI * 2,
        driftPy: Math.random() * Math.PI * 2,
        pulseAmp: 0.16 + Math.random() * 0.10,
        pulseF:  0.65 + Math.random() * 0.7,
        pulseP:  Math.random() * Math.PI * 2,
        /* physics — outer drops are very soft so they lag a lot →
           visible stretch / tail when the cursor moves */
        wx: 0, wy: 0, vx: 0, vy: 0,
        spring:  0.07 + Math.random() * 0.05,
        damping: 0.84 + Math.random() * 0.05,
      });
    }
    return drops;
  }

  onEnter(e) {
    this.hovering = true;
    if (this.video) {
      try { this.video.currentTime = 0; } catch (_) {}
      const p = this.video.play();
      if (p && p.catch) p.catch(() => {});
    }
    const xy = this.localXY(e);
    /* snap cluster to the cursor on enter so the blob grows from
       under the pointer (no slide-in glitch) */
    this.cluster.x = this.cluster.tx = xy.x;
    this.cluster.y = this.cluster.ty = xy.y;
    /* park every sub-drop on the cursor too — they will spring
       outward to their rest positions as the cluster scales up,
       which doubles as the "splash" feel on entry */
    for (let i = 0; i < this.subDrops.length; i++) {
      const sd = this.subDrops[i];
      sd.wx = xy.x;
      sd.wy = xy.y;
      sd.vx = 0;
      sd.vy = 0;
    }
    this.lastTrailX = xy.x;
    this.lastTrailY = xy.y;
    this.trail.length = 0;
    this.cluster.tscale = 1.0;
  }

  onMove(e) {
    if (!this.hovering) return;
    const xy = this.localXY(e);
    this.cluster.tx = xy.x;
    this.cluster.ty = xy.y;

    /* Wake: emit trail drops along the path the cursor just took.
       Each drop gets a perpendicular jitter so the wake looks like
       water being parted rather than a straight line. */
    const dx = xy.x - this.lastTrailX;
    const dy = xy.y - this.lastTrailY;
    const aspect = this.uniforms.uAspect.value;
    const adx = dx * aspect;
    const dist = Math.sqrt(adx * adx + dy * dy);
    if (dist > TRAIL_SPAWN_DIST) {
      const steps = Math.min(4, Math.ceil(dist / TRAIL_SPAWN_DIST));
      const invDist = 1 / Math.max(dist, 1e-6);
      const dirX = dx * invDist;
      const dirY = dy * invDist;
      /* perpendicular = sideways splash direction */
      const perpX = -dirY;
      const perpY = dirX;
      /* faster cursor → bigger wake drops */
      const speedBoost = Math.min(dist * 6.0, 1.0);
      for (let s = 1; s <= steps; s++) {
        const baseX = this.lastTrailX + dx * s / steps;
        const baseY = this.lastTrailY + dy * s / steps;
        const jitter = (Math.random() - 0.5) * 0.06;
        /* small backward bias so drops land slightly behind the cursor */
        const lag = 0.015;
        this.spawnTrail(
          baseX + perpX * jitter - dirX * lag,
          baseY + perpY * jitter - dirY * lag,
          speedBoost
        );
      }
      this.lastTrailX = xy.x;
      this.lastTrailY = xy.y;
    }
  }

  spawnTrail(x, y, strength) {
    if (this.trail.length >= TRAIL_MAX) this.trail.shift();
    const baseR = (0.045 + Math.random() * 0.035) * (0.55 + strength * 0.7);
    this.trail.push({
      x, y,
      r: baseR,
      age: 0,
      life: TRAIL_LIFE_MIN + Math.random() * TRAIL_LIFE_VAR,
    });
  }

  onLeave() {
    this.hovering = false;
    this.cluster.tscale = 0;
    /* keep the video playing while the blob shrinks out, then pause */
    setTimeout(() => {
      if (!this.hovering && this.video) this.video.pause();
    }, 1500);
  }

  step(dt) {
    /* advance time uniform first (sub-drop wobbles use it) */
    this.uniforms.uTime.value += dt * 0.001;
    const time = this.uniforms.uTime.value;

    /* ease cluster scale: faster opening, slower closing */
    const sLerp = (this.cluster.tscale > this.cluster.scale)
      ? SCALE_OPEN : SCALE_CLOSE;
    this.cluster.scale += (this.cluster.tscale - this.cluster.scale) * sLerp;

    /* cluster center follows the cursor with damping = liquid mass feel */
    this.cluster.x += (this.cluster.tx - this.cluster.x) * CLUSTER_FOLLOW;
    this.cluster.y += (this.cluster.ty - this.cluster.y) * CLUSTER_FOLLOW;

    const arr = this.uniforms.uDrops.value;
    let count = 0;
    const scale = this.cluster.scale;
    if (scale > 0.005) {
      /* Cluster drops (the "finger") with spring physics. */
      for (let i = 0; i < this.subDrops.length && count < MAX_DROPS; i++) {
        const sd = this.subDrops[i];

        /* random wobble: drift on position + pulse on radius */
        const driftX = Math.sin(time * sd.driftFx + sd.driftPx) * sd.driftAmp;
        const driftY = Math.cos(time * sd.driftFy + sd.driftPy) * sd.driftAmp;
        const pulse  = 1.0 + Math.sin(time * sd.pulseF + sd.pulseP) * sd.pulseAmp;

        /* spring rest position in WORLD space (cluster + scaled offset) */
        const restX = this.cluster.x + (sd.ox + driftX) * scale;
        const restY = this.cluster.y + (sd.oy + driftY) * scale;

        /* per-drop spring + damping. The drop's world position lags
           behind its rest position when the cluster moves quickly,
           which is what makes the blob stretch / trail when the
           cursor moves. Each drop has its own constants so the lag
           is non-uniform → organic deformation. */
        sd.vx = sd.vx * sd.damping + (restX - sd.wx) * sd.spring;
        sd.vy = sd.vy * sd.damping + (restY - sd.wy) * sd.spring;
        sd.wx += sd.vx;
        sd.wy += sd.vy;

        const r = sd.baseR * pulse * scale;
        if (r > 0.003) {
          arr[count].set(sd.wx, sd.wy, r);
          count++;
        }
      }
    }

    /* Trail / wake: age then push. These drops merge with the cluster
       through the shader's smin → continuous fluid silhouette that
       parts and closes back as the cursor sweeps through. */
    for (let i = this.trail.length - 1; i >= 0; i--) {
      this.trail[i].age += dt;
      if (this.trail[i].age >= this.trail[i].life) this.trail.splice(i, 1);
    }
    if (scale > 0.005) {
      for (let i = 0; i < this.trail.length && count < MAX_DROPS; i++) {
        const t = this.trail[i];
        const tt = t.age / t.life;
        /* ease-out shrink (cubic) so drops linger then dissolve fast */
        const decay = 1.0 - tt * tt;
        const r = t.r * decay * scale;
        if (r > 0.003) {
          arr[count].set(t.x, t.y, r);
          count++;
        }
      }
    }
    for (let i = count; i < MAX_DROPS; i++) arr[i].set(0, 0, 0);
    this.uniforms.uDropCount.value = count;
  }

  loop() {
    const tick = (t) => {
      const dt = Math.min(40, t - this.lastT);
      this.lastT = t;
      this.step(dt);
      this.renderer.render(this.scene, this.camera);
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }
}

/* boot */
document.querySelectorAll('.member .photo[data-liquid]').forEach(card => {
  new LiquidCard(card);
});