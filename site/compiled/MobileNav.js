/* MobileNav.jsx — bottom navigation for viewports < 1440px (where Sidebar is absent).
   Two modes:
   • < 880px  — full-width frosted bottom bar with icons + labels (phone)
   • 880–1440px — compact floating pill dock with text labels only (laptop / tablet) */

const {
  useState: useStateMN,
  useEffect: useEffectMN
} = React;
const MN_NAV = [{
  id: 'hero',
  label: 'About',
  icon: 'sparkles'
}, {
  id: 'experience',
  label: 'Experience',
  icon: 'briefcase'
}, {
  id: 'projects',
  label: 'Projects',
  icon: 'code'
}, {
  id: 'skills',
  label: 'Skills',
  icon: 'share2'
}, {
  id: 'contact',
  label: 'Contact',
  icon: 'mail'
}];
function MobileNav() {
  const [active, setActive] = useStateMN('hero');
  const [width, setWidth] = useStateMN(window.innerWidth);
  useEffectMN(() => {
    const check = () => setWidth(window.innerWidth);
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  /* Scroll tracking — identical logic to Sidebar */
  useEffectMN(() => {
    const root = document.getElementById('scroll-root');
    if (!root) return;
    const onScroll = () => {
      const rootTop = root.getBoundingClientRect().top;
      const mark = root.clientHeight * 0.4;
      let cur = MN_NAV[0].id;
      for (const {
        id
      } of MN_NAV) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top - rootTop <= mark) cur = id;
      }
      setActive(cur);
    };
    onScroll();
    root.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => root.removeEventListener('scroll', onScroll);
  }, []);
  const go = id => {
    const el = document.getElementById(id);
    const root = document.getElementById('scroll-root');
    if (!el || !root) return;
    const offset = id === 'hero' ? 0 : 24;
    const top = el.getBoundingClientRect().top - root.getBoundingClientRect().top + root.scrollTop - offset;
    root.scrollTo({
      top,
      behavior: 'smooth'
    });
  };

  /* Sidebar handles ≥ 1440px */
  if (width >= 1440) return null;
  const isMobile = width < 880;

  /* ── Phone mode: full-width frosted bottom bar ────────────── */
  if (isMobile) {
    return /*#__PURE__*/React.createElement("nav", {
      "aria-label": "Section navigation",
      style: {
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: 'flex',
        borderTop: '1px solid var(--border-subtle)',
        background: 'rgba(var(--bg-base-rgb), 0.88)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        paddingBottom: 'max(8px, env(safe-area-inset-bottom))'
      }
    }, MN_NAV.map(({
      id,
      label,
      icon
    }) => {
      const on = active === id;
      return /*#__PURE__*/React.createElement("button", {
        key: id,
        onClick: () => go(id),
        "aria-current": on ? 'page' : undefined,
        style: {
          flex: 1,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 4,
          padding: '10px 8px 8px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          color: on ? 'var(--accent)' : 'var(--text-muted)',
          transition: 'color 160ms cubic-bezier(0.4,0,0.2,1)',
          WebkitTapHighlightColor: 'transparent'
        }
      }, /*#__PURE__*/React.createElement("span", {
        "aria-hidden": "true",
        style: {
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: `translateX(-50%) scaleX(${on ? 1 : 0})`,
          transformOrigin: 'center',
          width: 24,
          height: 2,
          borderRadius: 999,
          background: 'var(--accent)',
          transition: 'transform 200ms cubic-bezier(0.4,0,0.2,1)'
        }
      }), /*#__PURE__*/React.createElement(Icon, {
        name: icon,
        size: 20,
        color: "currentColor"
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'var(--font-body)',
          fontSize: 11,
          fontWeight: 500,
          letterSpacing: '0.01em',
          lineHeight: 1
        }
      }, label));
    }));
  }

  /* ── Mid-range mode: floating pill dock (880–1440px) ─────── */
  return /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Section navigation",
    style: {
      position: 'fixed',
      bottom: 24,
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 50,
      display: 'inline-flex',
      alignItems: 'center',
      background: 'rgba(var(--bg-base-rgb), 0.88)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      border: '1px solid var(--border)',
      borderRadius: 999,
      padding: '5px 6px',
      gap: 2,
      boxShadow: '0 4px 24px rgba(0,0,0,0.18)'
    }
  }, MN_NAV.map(({
    id,
    label
  }) => {
    const on = active === id;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      onClick: () => go(id),
      "aria-current": on ? 'page' : undefined,
      style: {
        background: on ? 'var(--accent-10)' : 'none',
        border: `1px solid ${on ? 'var(--accent-30)' : 'transparent'}`,
        borderRadius: 999,
        color: on ? 'var(--accent)' : 'var(--text-muted)',
        fontFamily: 'var(--font-body)',
        fontSize: 13,
        fontWeight: on ? 600 : 400,
        padding: '7px 18px',
        cursor: 'pointer',
        transition: 'all 160ms cubic-bezier(0.4,0,0.2,1)',
        whiteSpace: 'nowrap',
        letterSpacing: on ? '-0.01em' : '0',
        WebkitTapHighlightColor: 'transparent'
      }
    }, label);
  }));
}
Object.assign(window, {
  MobileNav
});