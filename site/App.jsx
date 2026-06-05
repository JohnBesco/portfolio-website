/* App.jsx — root component. Applies design tokens from TWEAK_DEFAULTS and
   mounts all sections. Compiled to compiled/App.js via `npm run build`. */

const TWEAK_DEFAULTS = {
  accent:      '#92D0FC',
  displayFont: 'Cabinet Grotesk',
  bodyFont:    'Bricolage Grotesque',
  background:  'dots',
  heroLayout:  'split',
  heroGlow:    'subtle',
};

const DISPLAY_FONTS = {
  'Cabinet Grotesk':   "'Cabinet Grotesk', 'Arial Black', sans-serif",
  'Space Grotesk':     "'Space Grotesk', sans-serif",
  'Archivo':           "'Archivo', sans-serif",
  'Instrument Serif':  "'Instrument Serif', Georgia, serif",
};
const BODY_FONTS = {
  'Bricolage Grotesque': "'Bricolage Grotesque', system-ui, sans-serif",
  'IBM Plex Sans':       "'IBM Plex Sans', system-ui, sans-serif",
  'Public Sans':         "'Public Sans', system-ui, sans-serif",
};
const GLOW_OPACITY = { vivid: 1, subtle: 0.45, off: 0 };

function App() {
  const t = TWEAK_DEFAULTS;

  React.useEffect(() => {
    const r = document.documentElement;
    r.style.setProperty('--accent', t.accent);
    r.style.setProperty('--font-display', DISPLAY_FONTS[t.displayFont] || DISPLAY_FONTS['Cabinet Grotesk']);
    r.style.setProperty('--font-body',    BODY_FONTS[t.bodyFont]       || BODY_FONTS['Bricolage Grotesque']);
    r.style.setProperty('--hero-glow-opacity', String(GLOW_OPACITY[t.heroGlow] ?? 1));
    const root = document.getElementById('scroll-root');
    if (root) root.setAttribute('data-bg', t.background);
  }, []);

  return (
    <>
      <Sidebar />
      <ThemeToggle />
      <MobileNav />
      <main id="scroll-root" data-bg={t.background}>
        <Hero layout={t.heroLayout} />
        <About />
        <Experience />
        <AICapabilities />
        <Projects />
        <Skills />
        <Contact />
        <footer
          className="fullbleed-inner"
          style={{
            padding: '32px 32px 48px',
            borderTop: '1px solid var(--border)',
            fontFamily: 'var(--font-body)',
            fontSize: 13,
            color: 'var(--text-muted)',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 8,
          }}
        >
          <span>© 2026 John Besco · johnbesco-dev.co.uk</span>
          <span>Front-end developer · growth marketer · AI workflow builder</span>
        </footer>
      </main>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
