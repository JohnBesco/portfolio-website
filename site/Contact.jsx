/* Contact.jsx — centered CTA block with wave divider, no form.
   WavePath is defined in ui.jsx and available globally. */

function Contact() {
  return (
    <section id="contact" className="fullbleed" style={{ paddingTop: 96, paddingBottom: 112, position: 'relative' }}>
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        style={{
          pointerEvents: 'none',
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '70%',
          height: '100%',
          background: 'radial-gradient(ellipse at top, color-mix(in srgb, var(--accent) 7%, transparent), transparent 60%)',
          filter: 'blur(32px)',
          zIndex: 0,
        }}
      />

      <div className="fullbleed-inner" style={{ position: 'relative', zIndex: 1 }}>
        {/* Wave divider */}
        <WavePath style={{ marginBottom: 80 }} />

        {/* Centered copy + buttons */}
        <Reveal variant="fade">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(40px, 6vw, 72px)',
              color: 'var(--text-primary)',
              margin: '0 0 20px',
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
            }}>
              Got a project?
            </h2>

            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 18,
              color: 'var(--text-secondary)',
              margin: '0 0 48px',
              lineHeight: 1.6,
              maxWidth: 480,
            }}>
              Websites, growth systems, AI workflows: let's build something that works.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <Button variant="primary" href="mailto:johnbesco.dev@gmail.com">
                Get in touch <Icon name="arrowRight" size={16} color="currentColor" />
              </Button>
              <Button variant="secondary" href="https://uk.linkedin.com/in/john-besco" target="_blank" rel="noopener noreferrer">
                <Icon name="linkedin" size={16} color="var(--text-secondary)" />LinkedIn
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

Object.assign(window, { Contact });
