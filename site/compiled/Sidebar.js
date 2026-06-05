/* Sidebar.jsx — left timeline nav. Smaller footprint, and it only fades in
   once you reach the Experience section (hidden over the full-bleed hero +
   about). Scroll math uses getBoundingClientRect so it survives the hero/about
   sitting outside the .layout column. */

const {
  useState: useStateS,
  useEffect: useEffectS
} = React;
const NAV = [{
  id: 'hero',
  label: 'About'
}, {
  id: 'experience',
  label: 'Experience'
}, {
  id: 'projects',
  label: 'Projects'
}, {
  id: 'skills',
  label: 'Skills'
}, {
  id: 'contact',
  label: 'Contact'
}];
function Sidebar() {
  const [active, setActive] = useStateS('hero');
  const [visible, setVisible] = useStateS(false);
  useEffectS(() => {
    const root = document.getElementById('scroll-root');
    if (!root) return;
    const onScroll = () => {
      const rootTop = root.getBoundingClientRect().top;
      const mark = root.clientHeight * 0.4;
      let cur = NAV[0].id;
      for (const {
        id
      } of NAV) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top - rootTop <= mark) cur = id;
      }
      setActive(cur);
      // Reveal the nav only once Experience climbs into the upper viewport.
      const exp = document.getElementById('experience');
      const wide = window.innerWidth >= 1440;
      if (exp) setVisible(wide && exp.getBoundingClientRect().top - rootTop <= root.clientHeight * 0.6);
    };
    onScroll();
    root.addEventListener('scroll', onScroll, {
      passive: true
    });
    window.addEventListener('resize', onScroll);
    return () => {
      root.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);
  const go = id => {
    const el = document.getElementById(id);
    const root = document.getElementById('scroll-root');
    if (!el || !root) return;
    const top = el.getBoundingClientRect().top - root.getBoundingClientRect().top + root.scrollTop - (id === 'hero' ? 0 : 24);
    root.scrollTo({
      top,
      behavior: 'smooth'
    });
  };
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      position: 'fixed',
      left: 'max(12px, calc(50vw - 706px))',
      top: '50%',
      width: 160,
      zIndex: 40,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      paddingLeft: 4,
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(-50%)' : 'translateY(calc(-50% - 8px)) translateX(-6px)',
      pointerEvents: visible ? 'auto' : 'none',
      transition: 'opacity 320ms cubic-bezier(0.16,1,0.3,1), transform 320ms cubic-bezier(0.16,1,0.3,1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "PVP%20V2.webp",
    alt: "John Besco",
    width: 32,
    height: 32,
    style: {
      borderRadius: 999,
      objectFit: 'cover',
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 14,
      color: 'var(--text-primary)',
      lineHeight: 1.1
    }
  }, "John Besco"))), /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Section navigation",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 15
    }
  }, NAV.map(({
    id,
    label
  }) => {
    const on = active === id;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      onClick: () => go(id),
      "aria-current": on ? 'page' : undefined,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 11,
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: 0,
        textAlign: 'left'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        borderRadius: 999,
        flex: 'none',
        width: on ? 7 : 5,
        height: on ? 7 : 5,
        background: on ? 'var(--accent)' : 'var(--border)',
        transition: 'all 160ms cubic-bezier(0.4,0,0.2,1)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 13,
        color: on ? 'var(--text-primary)' : 'var(--text-muted)',
        transition: 'color 160ms cubic-bezier(0.4,0,0.2,1)'
      }
    }, label));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "hero-online-dot",
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: 'var(--color-success)',
      boxShadow: '0 0 0 3px color-mix(in srgb, var(--color-success) 13%, transparent)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: 'var(--text-secondary)'
    }
  }, "Open to work")));
}
Object.assign(window, {
  Sidebar
});