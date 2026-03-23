import { butterfliesBackground } from 'https://unpkg.com/threejs-toys@0.0.7/build/threejs-toys.module.cdn.min.js';

window.addEventListener("load", () => {

  const isMobile = window.innerWidth < 768;

  butterfliesBackground({
    el: document.getElementById('app'),
    eventsEl: document.getElementById('app'),

    gpgpuSize: isMobile ? 18 : 42,

    background: 0xffffff,
    material: 'basic',
    materialParams: { transparent: true, alphaTest: 0.5 },

    texture: 'https://assets.codepen.io/33787/butterflies.png',
    textureCount: 4,

    wingsScale: isMobile ? [0.6,0.6,0.6] : [1,1,1],

    maxVelocity: isMobile ? 0.05 : 0.1
  });

});
