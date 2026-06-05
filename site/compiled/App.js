/* App.jsx — root component. Applies design tokens from TWEAK_DEFAULTS and
   mounts all sections. Compiled to compiled/App.js via `npm run build`. */

const TWEAK_DEFAULTS = {
  accent: '#92D0FC',
  displayFont: 'Cabinet Grotesk',
  bodyFont: 'Bricolage Grotesque',
  background: 'dots',
  heroLayout: 'split',
  heroGlow: 'subtle'
};
const DISPLAY_FONTS = {
  'Cabinet Grotesk': "'Cabinet Grotesk', 'Arial Black', sans-serif",
  'Space Grotesk': "'Space Grotesk', sans-serif",
  'Archivo': "'Archivo', sans-serif",
  'Instrument Serif': "'Instrument Serif', Georgia, serif"
};
const BODY_FONTS = {
  'Bricolage Grotesque': "'Bricolage Grotesque', system-ui, sans-serif",
  'IBM Plex Sans': "'IBM Plex Sans', system-ui, sans-serif",
  'Public Sans': "'Public Sans', system-ui, sans-serif"
};
const GLOW_OPACITY = {
  vivid: 1,
  subtle: 0.45,
  off: 0
};
function App() {
  const t = TWEAK_DEFAULTS;
  React.useEffect(() => {
    const r = document.documentElement;
    r.style.setProperty('--accent', t.accent);
    r.style.setProperty('--font-display', DISPLAY_FONTS[t.displayFont] || DISPLAY_FONTS['Cabinet Grotesk']);
    r.style.setProperty('--font-body', BODY_FONTS[t.bodyFont] || BODY_FONTS['Bricolage Grotesque']);
    r.style.setProperty('--hero-glow-opacity', String(GLOW_OPACITY[t.heroGlow] ?? 1));
    const root = document.getElementById('scroll-root');
    if (root) root.setAttribute('data-bg', t.background);
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Sidebar, null), /*#__PURE__*/React.createElement(ThemeToggle, null), /*#__PURE__*/React.createElement(MobileNav, null), /*#__PURE__*/React.createElement("main", {
    id: "scroll-root",
    "data-bg": t.background
  }, /*#__PURE__*/React.createElement(Hero, {
    layout: t.heroLayout
  }), /*#__PURE__*/React.createElement(About, null), /*#__PURE__*/React.createElement(Experience, null), /*#__PURE__*/React.createElement(AICapabilities, null), /*#__PURE__*/React.createElement(Projects, null), /*#__PURE__*/React.createElement(Skills, null), /*#__PURE__*/React.createElement(Contact, null), /*#__PURE__*/React.createElement("footer", {
    className: "fullbleed-inner",
    style: {
      padding: '32px 32px 48px',
      borderTop: '1px solid var(--border)',
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--text-muted)',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 John Besco \xB7 johnbesco-dev.co.uk"), /*#__PURE__*/React.createElement("span", null, "Front-end developer \xB7 growth marketer \xB7 AI workflow builder"))));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));