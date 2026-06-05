/* ThemeToggle.jsx — floating dark/light mode toggle. Fixed top-right. */

function ThemeToggle() {
  var [theme, setTheme] = React.useState(function () {
    return localStorage.getItem('theme') || 'dark';
  });
  var [hover, setHover] = React.useState(false);
  React.useEffect(function () {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);
  return /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setTheme(function (t) {
        return t === 'dark' ? 'light' : 'dark';
      });
    },
    onMouseEnter: function () {
      setHover(true);
    },
    onMouseLeave: function () {
      setHover(false);
    },
    "aria-label": theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode',
    style: {
      position: 'fixed',
      top: 20,
      right: 24,
      zIndex: 60,
      width: 44,
      height: 44,
      borderRadius: 999,
      border: '1px solid var(--border)',
      background: hover ? 'var(--bg-raised)' : 'var(--bg-card)',
      color: hover ? 'var(--text-primary)' : 'var(--text-secondary)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'background 200ms ease, border-color 200ms ease, color 200ms ease',
      boxShadow: '0 2px 8px rgba(0,0,0,0.18)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: theme === 'dark' ? 'sun' : 'moon',
    size: 18,
    color: "currentColor"
  }));
}
Object.assign(window, {
  ThemeToggle
});