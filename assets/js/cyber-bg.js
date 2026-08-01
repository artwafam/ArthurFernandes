/**
 * Particle canvas for #cyber-canvas inside #cyber-bg.
 * Port of CyberBackground.tsx particle loop.
 */
(function (window) {
  'use strict';

  function initCyberBg() {
    var canvas = document.getElementById('cyber-canvas');
    if (!canvas) return;

    var ctx = canvas.getContext('2d');
    if (!ctx) return;

    var reduced = false;
    try {
      reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    } catch (_) {
      reduced = false;
    }

    var animId = 0;
    var w = 0;
    var h = 0;
    var running = true;

    var count = reduced ? 20 : 50;
    var particles = [];
    for (var i = 0; i < count; i++) {
      particles.push({
        x: Math.random(),
        y: Math.random(),
        vx: (Math.random() - 0.5) * 0.0003,
        vy: (Math.random() - 0.5) * 0.0003,
        size: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.4 + 0.1,
      });
    }

    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    }

    function draw() {
      if (!running) return;
      ctx.clearRect(0, 0, w, h);

      for (var i = 0; i < particles.length; i++) {
        var p = particles[i];
        if (!reduced) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0 || p.x > 1) p.vx *= -1;
          if (p.y < 0 || p.y > 1) p.vy *= -1;
        }
        ctx.beginPath();
        ctx.arc(p.x * w, p.y * h, p.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 214, 10, ' + p.alpha + ')';
        ctx.fill();
      }

      animId = window.requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener('resize', resize);
    draw();

    return function destroy() {
      running = false;
      window.cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }

  window.CyberBg = {
    init: initCyberBg,
  };
})(window);
