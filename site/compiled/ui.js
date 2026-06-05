function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* ui.jsx — shared primitives for the John Besco portfolio UI kit.
   Lucide icons inlined at 1.5px stroke (the system's icon library). */

const {
  useState,
  useEffect,
  useRef
} = React;

/* ─── useMobile — shared responsive hook ─────────────────── */
function useMobile(breakpoint) {
  if (breakpoint === undefined) breakpoint = 640;
  var [mobile, setMobile] = useState(window.innerWidth < breakpoint);
  useEffect(function () {
    var timer;
    function check() {
      clearTimeout(timer);
      timer = setTimeout(function () {
        setMobile(window.innerWidth < breakpoint);
      }, 100);
    }
    window.addEventListener('resize', check);
    return function () {
      window.removeEventListener('resize', check);
      clearTimeout(timer);
    };
  }, []);
  return mobile;
}

/* ─── Icons (Lucide, 1.5 stroke) ─────────────────────────── */
const ICON_PATHS = {
  mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>',
  mapPin: '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
  github: '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>',
  linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>',
  arrowRight: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  externalLink: '<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
  calendar: '<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>',
  arrowUpRight: '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  send: '<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/>',
  share2: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/>',
  sparkles: '<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .962 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.962 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/>',
  code: '<path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/>',
  briefcase: '<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/>',
  messageCircle: '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',
  moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
  award: '<path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/>'
};
function Icon({
  name,
  size = 20,
  color = 'currentColor',
  strokeWidth = 1.5,
  style
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: style,
    dangerouslySetInnerHTML: {
      __html: ICON_PATHS[name] || ''
    }
  });
}

/* ─── Button ─────────────────────────────────────────────── */
function Button({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  type,
  href,
  target
}) {
  const [hover, setHover] = useState(false);
  const sizes = {
    sm: {
      fontSize: 14,
      padding: '6px 12px'
    },
    md: {
      fontSize: 16,
      padding: '10px 18px'
    },
    lg: {
      fontSize: 18,
      padding: '13px 24px'
    }
  };
  const variants = {
    primary: {
      background: hover ? 'var(--accent-90)' : 'var(--accent)',
      color: '#0F0F0F',
      border: '1px solid transparent'
    },
    secondary: {
      background: hover ? 'var(--bg-card)' : 'transparent',
      color: 'var(--text-primary)',
      border: `1px solid ${hover ? 'var(--accent-30)' : 'var(--border)'}`
    },
    ghost: {
      background: hover ? 'var(--bg-card)' : 'transparent',
      color: hover ? 'var(--text-primary)' : 'var(--text-secondary)',
      border: '1px solid transparent'
    }
  };
  const sharedStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    fontFamily: 'var(--font-body)',
    fontWeight: 500,
    borderRadius: 8,
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    textDecoration: 'none',
    transition: 'background-color 160ms cubic-bezier(0.4,0,0.2,1), border-color 160ms cubic-bezier(0.4,0,0.2,1), color 160ms cubic-bezier(0.4,0,0.2,1)',
    ...sizes[size],
    ...variants[variant]
  };
  if (href) {
    return /*#__PURE__*/React.createElement("a", {
      href: href,
      target: target,
      rel: target === '_blank' ? 'noopener noreferrer' : undefined,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: sharedStyle
    }, children);
  }
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: sharedStyle
  }, children);
}

/* ─── Badge ──────────────────────────────────────────────── */
function Badge({
  variant = 'default',
  children
}) {
  const v = {
    default: {
      background: 'var(--badge-bg)',
      color: 'var(--badge-text)',
      border: '1px solid var(--badge-border)'
    },
    primary: {
      background: 'var(--accent-10)',
      color: 'var(--accent-fg)',
      border: '1px solid var(--accent-30)'
    },
    success: {
      background: 'color-mix(in srgb, var(--color-success) 10%, transparent)',
      color: 'var(--color-success)',
      border: '1px solid color-mix(in srgb, var(--color-success) 20%, transparent)'
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '4px 12px',
      borderRadius: 999,
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      fontWeight: 500,
      whiteSpace: 'nowrap',
      ...v[variant]
    }
  }, children);
}

/* ─── Card ───────────────────────────────────────────────── */
function Card({
  children,
  hover = true,
  style,
  ...rest
}) {
  const [h, setH] = useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false)
  }, rest, {
    style: {
      background: hover && h ? 'var(--bg-raised)' : 'var(--bg-card)',
      border: `1px solid ${hover && h ? 'var(--border-active)' : 'var(--border)'}`,
      borderRadius: 12,
      padding: 24,
      transition: 'background-color 160ms cubic-bezier(0.4,0,0.2,1), border-color 160ms cubic-bezier(0.4,0,0.2,1)',
      ...style
    }
  }), children);
}

/* ─── Reveal ──────────────────────────────────────────────
   Fade + slide entrance on scroll. IntersectionObserver fires once
   per element; reduced-motion users start visible. */
function inView(el, ratio = 0.92) {
  const r = el.getBoundingClientRect();
  const vh = window.innerHeight || document.documentElement.clientHeight;
  return r.top < vh * ratio && r.bottom > 0;
}
const REVEAL_HIDDEN_TRANSFORM = {
  rise: 'translateY(12px)',
  fade: 'none',
  'slide-left': 'translateX(-8px)',
  scale: 'scale(0.97)'
};
function Reveal({
  children,
  delay = 0,
  style,
  variant = 'rise'
}) {
  const ref = useRef(null);
  const prefersReduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const [visible, setVisible] = useState(prefersReduced);
  useEffect(() => {
    if (visible) return;
    const el = ref.current;
    if (!el) return;
    const scrollRoot = document.getElementById('scroll-root');
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, {
      root: scrollRoot || null,
      threshold: 0.05,
      rootMargin: '0px 0px -40px 0px'
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  const hiddenTransform = REVEAL_HIDDEN_TRANSFORM[variant] || REVEAL_HIDDEN_TRANSFORM.rise;
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      opacity: visible ? 1 : 0,
      transform: visible ? 'none' : hiddenTransform,
      transition: visible ? `opacity 480ms ease-out ${delay}ms, transform 480ms cubic-bezier(0,0,0.2,1) ${delay}ms` : 'none',
      ...style
    }
  }, children);
}

/* ─── Stat ───────────────────────────────────────────────────
   Renders final values directly. (The brand's count-up-from-0 on
   scroll is documented; shown resolved here so frozen/captured
   contexts never display 0.) */
function Stat({
  value,
  suffix = '',
  label
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 32,
      color: 'var(--accent-fg)',
      lineHeight: 1
    }
  }, value, suffix), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, label));
}

/* ─── Overline ───────────────────────────────────────────── */
function Overline({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      color: 'var(--text-muted)',
      margin: 0,
      ...style
    }
  }, children);
}

/* ─── HoverButton ─────────────────────────────────────────
   Glass pill with a cursor-following circle trail. Ported from the
   shadcn `hover-button` the user supplied; colours retuned to the
   brand primary (var(--accent)) so the trail reads as sky-blue, not indigo.
   Two layers over the bg: blurred colour circles (behind) and a
   pointer-inert "glass" border layer (the inset light rings + drop
   shadow that give the liquid-glass edge). */
function HoverButton({
  children,
  onClick,
  primary = false
}) {
  const btnRef = useRef(null);
  const [listening, setListening] = useState(false);
  const [circles, setCircles] = useState([]);
  const lastAdded = useRef(0);
  const createCircle = (x, y) => {
    const w = btnRef.current ? btnRef.current.offsetWidth : 0;
    const p = (w ? x / w : 0.5) * 100;
    const color = `linear-gradient(to right, #a8dbfb ${p}%, #4f7fe0 ${p}%)`;
    setCircles(prev => [...prev, {
      id: Date.now() + Math.random(),
      x,
      y,
      color,
      fade: null
    }]);
  };
  const onMove = e => {
    if (!listening) return;
    const now = Date.now();
    if (now - lastAdded.current > 100) {
      lastAdded.current = now;
      const r = e.currentTarget.getBoundingClientRect();
      createCircle(e.clientX - r.left, e.clientY - r.top);
    }
  };
  useEffect(() => {
    circles.forEach(c => {
      if (!c.fade) {
        setTimeout(() => setCircles(p => p.map(x => x.id === c.id ? {
          ...x,
          fade: 'in'
        } : x)), 0);
        setTimeout(() => setCircles(p => p.map(x => x.id === c.id ? {
          ...x,
          fade: 'out'
        } : x)), 1000);
        setTimeout(() => setCircles(p => p.filter(x => x.id !== c.id)), 2200);
      }
    });
  }, [circles]);
  const innerGlow = primary ? '0 0 0 1px rgba(146,208,252,0.45), inset 0 0 18px 0 rgba(146,208,252,0.28), inset 0 -3px 12px 0 rgba(146,208,252,0.30)' : 'inset 0 0 0 1px rgba(170,202,255,0.20), inset 0 0 16px 0 rgba(170,202,255,0.10), inset 0 -3px 12px 0 rgba(170,202,255,0.15)';
  return /*#__PURE__*/React.createElement("button", {
    ref: btnRef,
    type: "button",
    onClick: onClick,
    className: "hb",
    onPointerMove: onMove,
    onPointerEnter: () => setListening(true),
    onPointerLeave: () => setListening(false),
    style: {
      position: 'relative',
      isolation: 'isolate',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 9,
      padding: '13px 24px',
      borderRadius: 999,
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontWeight: 500,
      fontSize: 15,
      lineHeight: 1.2,
      color: 'var(--text-primary)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      background: primary ? 'rgba(146,208,252,0.16)' : 'rgba(var(--bg-base-rgb), 0.25)'
    }
  }, circles.map(({
    id,
    x,
    y,
    color,
    fade
  }) => /*#__PURE__*/React.createElement("span", {
    key: id,
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: x,
      top: y,
      width: 12,
      height: 12,
      transform: 'translate(-50%,-50%)',
      borderRadius: 999,
      filter: 'blur(10px)',
      pointerEvents: 'none',
      zIndex: 0,
      background: color,
      opacity: fade === 'in' ? 0.75 : 0,
      transition: fade === 'out' ? 'opacity 1200ms ease' : 'opacity 300ms ease'
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "hb-border",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 'inherit',
      pointerEvents: 'none',
      zIndex: 1,
      boxShadow: `${innerGlow}, 0 1px 3px 0 rgba(0,0,0,0.50), 0 4px 12px 0 rgba(0,0,0,0.45)`,
      transition: 'transform 300ms ease'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      zIndex: 2,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 9
    }
  }, children));
}

/* ─── WavePath ────────────────────────────────────────────────
   Interactive SVG wave line. Hover + drag to deform.
   Ported from the shadcn wave-path component; adapted to
   inline-style React with no Tailwind / TypeScript. */
function WavePath({
  style
}) {
  const pathRef = useRef(null);
  const containerRef = useRef(null);
  const progressRef = useRef(0);
  const xRef = useRef(0.5);
  const timeRef = useRef(Math.PI / 2);
  const reqIdRef = useRef(null);
  const getWidth = () => containerRef.current ? containerRef.current.offsetWidth : window.innerWidth * 0.9;
  const setPath = progress => {
    const width = getWidth();
    if (pathRef.current) {
      pathRef.current.setAttributeNS(null, 'd', `M0 100 Q${width * xRef.current} ${100 + progress * 0.6}, ${width} 100`);
    }
  };
  useEffect(() => {
    setPath(0);
    const onResize = () => setPath(progressRef.current);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  const lerp = (a, b, t) => a * (1 - t) + b * t;
  const manageMouseEnter = () => {
    if (reqIdRef.current) {
      cancelAnimationFrame(reqIdRef.current);
      resetAnimation();
    }
  };
  const manageMouseMove = e => {
    const {
      movementY,
      clientX
    } = e;
    if (pathRef.current) {
      const bound = pathRef.current.getBoundingClientRect();
      xRef.current = (clientX - bound.left) / bound.width;
      progressRef.current += movementY;
      setPath(progressRef.current);
    }
  };
  const manageMouseLeave = () => animateOut();
  const animateOut = () => {
    const newProgress = progressRef.current * Math.sin(timeRef.current);
    progressRef.current = lerp(progressRef.current, 0, 0.025);
    timeRef.current += 0.2;
    setPath(newProgress);
    if (Math.abs(progressRef.current) > 0.75) {
      reqIdRef.current = requestAnimationFrame(animateOut);
    } else {
      resetAnimation();
    }
  };
  const resetAnimation = () => {
    timeRef.current = Math.PI / 2;
    progressRef.current = 0;
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: containerRef,
    style: {
      position: 'relative',
      height: 1,
      width: '100%',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    onMouseEnter: manageMouseEnter,
    onMouseMove: manageMouseMove,
    onMouseLeave: manageMouseLeave,
    style: {
      position: 'relative',
      top: -20,
      zIndex: 10,
      height: 40,
      width: '100%',
      cursor: 'default'
    }
  }), /*#__PURE__*/React.createElement("svg", {
    style: {
      position: 'absolute',
      top: -100,
      height: 300,
      width: '100%',
      overflow: 'visible',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("path", {
    ref: pathRef,
    style: {
      fill: 'none',
      stroke: 'var(--border)',
      strokeWidth: 1.5
    }
  })));
}
Object.assign(window, {
  Icon,
  Button,
  Badge,
  Card,
  Reveal,
  Stat,
  Overline,
  inView,
  HoverButton,
  WavePath
});