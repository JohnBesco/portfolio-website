(function snakeBg() {
  var canvas = document.getElementById('snake-canvas');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');

  var GRID        = 24;    // matches CSS background-size
  var TICK_MS     = 160;   // ms between steps (slow)
  var TURN_P      = 0.22;  // probability of turning when eligible
  var MIN_STRAIGHT = 5;    // minimum steps in one direction before turning
  var TRAIL_BASE  = 14;    // base trail length (dots)
  var COUNT       = 3;     // number of snakes

  // Accent #92D0FC — dimmed via low opacity
  var AR = 146, AG = 208, AB = 252;

  // Cardinal directions: right / down / left / up
  var DC = [1, 0, -1, 0];
  var DR = [0, 1, 0, -1];

  var cols, rows;

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    cols = Math.ceil(canvas.width  / GRID) + 2;
    rows = Math.ceil(canvas.height / GRID) + 2;
  }
  resize();
  window.addEventListener('resize', resize);

  function rndInt(n) { return Math.floor(Math.random() * n); }

  function makeSnake() {
    return {
      col:      rndInt(cols),
      row:      rndInt(rows),
      dirIdx:   rndInt(4),
      straight: 0,              // steps taken in current direction
      trail:    [],
      len:      TRAIL_BASE + rndInt(5),  // 14–18
      flashes:  {}
    };
  }

  var snakes = [];
  for (var i = 0; i < COUNT; i++) snakes.push(makeSnake());

  function stepSnake(s) {
    s.straight++;

    // Only consider turning after minimum straight distance
    if (s.straight >= MIN_STRAIGHT && Math.random() < TURN_P) {
      var delta = Math.random() < 0.5 ? 1 : -1;
      s.dirIdx = (s.dirIdx + delta + 4) % 4;
      s.straight = 0;
    }

    // Advance position, wrap edges
    s.col = ((s.col + DC[s.dirIdx]) % cols + cols) % cols;
    s.row = ((s.row + DR[s.dirIdx]) % rows + rows) % rows;

    // Push head to trail
    s.trail.unshift({ col: s.col, row: s.row });
    if (s.trail.length > s.len) s.trail.length = s.len;

    // 4% chance: head dot flashes white for 2 ticks
    if (Math.random() < 0.04) {
      s.flashes[s.col + ',' + s.row] = 2;
    }

    // Tick down existing flashes
    var keys = Object.keys(s.flashes);
    for (var k = 0; k < keys.length; k++) {
      s.flashes[keys[k]]--;
      if (s.flashes[keys[k]] <= 0) delete s.flashes[keys[k]];
    }
  }

  function getSectionRects() {
    var hero  = document.getElementById('hero');
    var about = document.getElementById('about');
    var rects = [];
    if (hero)  rects.push(hero.getBoundingClientRect());
    if (about) rects.push(about.getBoundingClientRect());
    return rects;
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Clip to hero + about sections only
    var rects = getSectionRects();
    ctx.save();
    ctx.beginPath();
    for (var ri = 0; ri < rects.length; ri++) {
      var r = rects[ri];
      if (r.bottom > 0 && r.top < canvas.height) {
        ctx.rect(r.left, r.top, r.width, r.height);
      }
    }
    ctx.clip();

    for (var si = 0; si < snakes.length; si++) {
      var s   = snakes[si];
      var len = s.trail.length;

      for (var ti = 0; ti < len; ti++) {
        var dot = s.trail[ti];
        var t   = 1 - ti / len;      // 1 at head → 0 at tail
        var op  = t * 0.42;          // dimmed — was 0.92
        var x   = dot.col * GRID + GRID / 2;
        var y   = dot.row * GRID + GRID / 2;
        var key = dot.col + ',' + dot.row;
        var flash = s.flashes[key] > 0;

        if (flash) {
          ctx.shadowBlur  = 10;
          ctx.shadowColor = 'rgba(255,255,255,' + op + ')';
          ctx.fillStyle   = 'rgba(255,255,255,' + op + ')';
        } else {
          ctx.shadowBlur  = ti === 0 ? 10 : Math.max(2, 5 * t);
          ctx.shadowColor = 'rgba(' + AR + ',' + AG + ',' + AB + ',' + op + ')';
          ctx.fillStyle   = 'rgba(' + AR + ',' + AG + ',' + AB + ',' + op + ')';
        }

        var radius = ti === 0 ? 2.5 : 1.5;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.shadowBlur = 0; // reset after each snake
    }

    ctx.restore(); // end section clip
  }

  var lastTick = 0;
  function loop(now) {
    requestAnimationFrame(loop);
    if (now - lastTick >= TICK_MS) {
      for (var i = 0; i < snakes.length; i++) stepSnake(snakes[i]);
      lastTick = now;
    }
    draw();
  }

  // Don't run canvas animation when user prefers reduced motion
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  requestAnimationFrame(loop);
})();
