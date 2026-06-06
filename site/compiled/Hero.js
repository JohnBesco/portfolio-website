/* Hero.jsx — scramble-rotating role headline + "who..." static line.
   No framer-motion — pure React/setInterval scramble implementation. */

const HERO_GLOW_SRC = 'https://stream.mux.com/r6pXRAJb3005XEEbl1hYU1x01RFJDSn7KQApwNGgAHHbU.m3u8';
const HERO_ROLES = ['Front-end developer', 'Growth marketer', 'AI workflow builder'];
// Lowercase-only scramble chars — narrower glyphs, prevents mobile line-wrap during animation
const SCRAMBLE_CHARS = 'abcdefghijklmnopqrstuvwxyz';
function useScramble(texts, pauseMs) {
  if (pauseMs === undefined) pauseMs = 2800;
  var [display, setDisplay] = React.useState(texts[0]);
  var [activeIdx, setActiveIdx] = React.useState(0);
  React.useEffect(function () {
    // Honour prefers-reduced-motion — skip scramble, keep first role static
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var idx = 0;
    var timer;
    var iv;
    function scrambleTo(target, done) {
      var DURATION = 0.65;
      var SPEED = 0.030;
      var steps = Math.round(DURATION / SPEED);
      var step = 0;
      iv = setInterval(function () {
        var progress = step / steps;
        var out = '';
        for (var i = 0; i < target.length; i++) {
          if (target[i] === ' ') {
            out += ' ';
            continue;
          }
          out += progress * target.length > i ? target[i] : SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
        }
        setDisplay(out);
        step++;
        if (step > steps) {
          clearInterval(iv);
          setDisplay(target);
          done();
        }
      }, SPEED * 1000);
    }
    function cycle() {
      idx = (idx + 1) % texts.length;
      setActiveIdx(idx); // sync pill glow at the moment scramble fires
      scrambleTo(texts[idx], function () {
        timer = setTimeout(cycle, pauseMs);
      });
    }
    timer = setTimeout(cycle, pauseMs);
    return function () {
      clearTimeout(timer);
      clearInterval(iv);
    };
  }, []);
  return {
    display: display,
    activeIdx: activeIdx
  };
}
function Hero({
  layout = 'split'
}) {
  var videoRef = React.useRef(null);
  var mobile = useMobile();
  var centered = layout === 'centered' || mobile;
  var scramble = useScramble(HERO_ROLES, 2800);
  var HERO_PILLS = ['Web Development', 'Growth Marketing', 'AI Workflows'];
  React.useEffect(function () {
    var v = videoRef.current;
    if (!v) return;
    var hls;
    if (v.canPlayType('application/vnd.apple.mpegurl')) {
      v.src = HERO_GLOW_SRC;
    } else if (window.Hls && window.Hls.isSupported()) {
      hls = new window.Hls({
        autoStartLoad: true,
        capLevelToPlayerSize: true
      });
      hls.loadSource(HERO_GLOW_SRC);
      hls.attachMedia(v);
    }
    var play = function () {
      var p = v.play();
      if (p && p.catch) p.catch(function (e) {
        console.warn('Hero video autoplay blocked:', e);
      });
    };
    v.addEventListener('canplay', play, {
      once: true
    });
    return function () {
      if (hls) hls.destroy();
    };
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    id: "hero",
    className: "fullbleed",
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      minHeight: '68vh',
      paddingTop: 80,
      paddingBottom: 64,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: '-15% -25%',
      zIndex: 0,
      pointerEvents: 'none',
      overflow: 'hidden',
      opacity: 'var(--hero-glow-opacity, 1)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "hero-blob b1"
  }), /*#__PURE__*/React.createElement("span", {
    className: "hero-blob b2"
  }), /*#__PURE__*/React.createElement("span", {
    className: "hero-blob b3"
  }), /*#__PURE__*/React.createElement("video", {
    ref: videoRef,
    autoPlay: true,
    muted: true,
    loop: true,
    playsInline: true,
    preload: "auto",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: 'blur(100px) saturate(1.4)',
      transform: 'scale(1.2)',
      opacity: 0.35,
      mixBlendMode: 'screen'
    }
  })), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 0,
      pointerEvents: 'none',
      background: centered ? `radial-gradient(115% 95% at 50% 46%, rgba(var(--bg-base-rgb),0) 0%, rgba(var(--bg-base-rgb),0.3) 55%, rgba(var(--bg-base-rgb),0.7) 88%, rgba(var(--bg-base-rgb),0.8) 100%)` : `radial-gradient(115% 95% at 40% 42%, rgba(var(--bg-base-rgb),0) 0%, rgba(var(--bg-base-rgb),0.3) 55%, rgba(var(--bg-base-rgb),0.7) 88%, rgba(var(--bg-base-rgb),0.78) 100%)`
    }
  }), !centered && /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 0,
      pointerEvents: 'none',
      background: `linear-gradient(90deg, rgba(var(--bg-base-rgb),0) 32%, rgba(var(--bg-base-rgb),0.45) 100%)`
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fullbleed-inner",
    style: {
      position: 'relative',
      zIndex: 1,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: centered ? 'column' : 'row',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: centered ? 'center' : 'left',
      gap: centered ? 24 : 48,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: centered ? 140 : 208,
      height: centered ? 140 : 208,
      borderRadius: 999,
      background: 'var(--bg-raised)',
      border: '2px solid var(--accent-20)',
      boxShadow: '0 0 0 6px var(--bg-base), 0 0 40px var(--accent-10)',
      overflow: 'hidden',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "PVP%20V2.webp",
    alt: "John Besco",
    width: "1080",
    height: "1080",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "hero-online-dot",
    style: {
      position: 'absolute',
      right: centered ? 16 : 24,
      bottom: centered ? 6 : 10,
      width: centered ? 14 : 16,
      height: centered ? 14 : 16,
      borderRadius: 999,
      background: 'var(--color-success)',
      border: '3px solid var(--bg-base)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: centered ? 'none' : 1,
      minWidth: 280,
      maxWidth: centered ? 620 : 'none'
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    delay: 60
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--text-secondary)',
      margin: '0 0 14px',
      letterSpacing: '0.01em'
    }
  }, "Hi, I'm ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent-fg)',
      fontWeight: 600
    }
  }, "John Besco"), ",")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 110
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(2.4rem,5vw,3.6rem)',
      color: 'var(--text-primary)',
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
      margin: '0 0 22px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      color: 'var(--accent-fg)',
      minHeight: '1.1em',
      whiteSpace: 'nowrap',
      overflow: 'hidden'
    }
  }, scramble.display), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      color: 'var(--text-primary)'
    }
  }, "who ships pages, campaigns,"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      color: 'var(--text-primary)'
    }
  }, "and systems that work."))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 160
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10,
      justifyContent: centered ? 'center' : 'flex-start'
    }
  }, HERO_PILLS.map(function (label, i) {
    var active = i === scramble.activeIdx;
    return /*#__PURE__*/React.createElement("span", {
      key: label,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        padding: '9px 20px',
        borderRadius: 999,
        fontFamily: 'var(--font-body)',
        fontSize: 14,
        fontWeight: 500,
        whiteSpace: 'nowrap',
        cursor: 'default',
        transition: 'background 400ms ease, color 300ms ease, border-color 300ms ease, transform 300ms ease',
        background: active ? 'var(--accent-10)' : 'rgba(var(--bg-base-rgb), 0.8)',
        backdropFilter: 'blur(8px)',
        color: active ? 'var(--text-primary)' : 'var(--text-muted)',
        border: active ? '1px solid var(--accent)' : '1px solid var(--accent-30)',
        transform: active ? 'scale(1.05)' : 'scale(1)'
      }
    }, label);
  })))))), /*#__PURE__*/React.createElement("style", {
    dangerouslySetInnerHTML: {
      __html: `
        @keyframes onlinePulse {
          0%   { box-shadow: 0 0 0 0 color-mix(in srgb, var(--color-success) 55%, transparent); }
          70%  { box-shadow: 0 0 0 7px transparent; }
          100% { box-shadow: 0 0 0 0 transparent; }
        }
        .hero-online-dot {
          animation: onlinePulse 2.4s ease-out infinite;
        }
      `
    }
  }));
}
Object.assign(window, {
  Hero
});