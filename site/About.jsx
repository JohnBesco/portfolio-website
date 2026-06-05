/* About.jsx — the story that continues from the hero intro, told in
   first person and ending in the CTA pills (glass HoverButtons).
   Centred narrative; emphasis carried by the primary accent + weight,
   not by gradients — keeps the brand's flat, evidence-first voice. */

function aboutScrollTo(id) {
  const el = document.getElementById(id);
  const root = document.getElementById('scroll-root');
  if (!el || !root) return;
  const top = el.getBoundingClientRect().top - root.getBoundingClientRect().top + root.scrollTop - 24;
  root.scrollTo({ top, behavior: 'smooth' });
}

function About() {
  const accent = { color: 'var(--accent-fg)' };
  const lead = { fontFamily: 'var(--font-display)', fontWeight: 700, lineHeight: 1.3, letterSpacing: '-0.01em' };

  return (
    <section id="about" className="fullbleed" style={{ paddingTop: 96, paddingBottom: 96, textAlign: 'center' }}>
      <div style={{ maxWidth: 680, margin: '0 auto', padding: '0 24px' }}>
        {/* Visually hidden heading — gives screen readers a named landmark */}
        <h2 style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clipPath: 'inset(50%)', whiteSpace: 'nowrap', margin: 0 }}>About</h2>

        <Reveal variant="fade">
          <p style={{ ...lead, fontSize: 'clamp(1.5rem,3.2vw,2rem)', color: 'var(--text-secondary)', margin: '0 0 8px' }}>
            <span style={accent}>7 years in sales.</span> I managed a team of 12 sales reps.
          </p>
        </Reveal>

        <Reveal delay={60} variant="fade">
          <p style={{ ...lead, fontSize: 'clamp(1.5rem,3.2vw,2rem)', color: 'var(--text-secondary)', margin: '0 0 36px' }}>
            Then I stopped pitching. I started <span style={accent}>building.</span>
          </p>
        </Reveal>

        <Reveal delay={120}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, color: 'var(--text-muted)', lineHeight: 1.7, margin: '0 0 40px', maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}>
            Freelance since Nov 2023, I've grown client lead pipelines 25%+ — cold
            outbound that books B2B appointments, landing pages that convert, and SEO
            that earns the click. I write the code and understand the conversion.
          </p>
        </Reveal>

        <Reveal delay={150}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, color: 'var(--text-muted)', lineHeight: 1.7, margin: '0 0 40px', maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}>
            Lately I've gone further — building AI workflows and operating systems that
            turn scattered work into repeatable process.
          </p>
        </Reveal>

        <Reveal delay={180}>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(1.6rem,3.6vw,2.2rem)', color: 'var(--text-primary)', lineHeight: 1.25, margin: '0 0 6px' }}>
            This still feels like day one.
          </p>
        </Reveal>

        <Reveal delay={220}>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.3rem,2.8vw,1.7rem)', color: 'var(--text-secondary)', lineHeight: 1.3, margin: '0 0 4px' }}>
            Harder briefs. Sharper pages. Smarter systems.
          </p>
        </Reveal>

        <Reveal delay={260}>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(1.6rem,3.6vw,2.2rem)', ...accent, lineHeight: 1.25, margin: '0 0 40px' }}>
            Ready for what's next.
          </p>
        </Reveal>

        <Reveal delay={320}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
            <HoverButton onClick={() => aboutScrollTo('experience')}>
              <Icon name="briefcase" size={16} color="var(--accent)" />My path
            </HoverButton>
            <HoverButton onClick={() => aboutScrollTo('projects')}>
              <Icon name="code" size={16} color="var(--accent)" />What I build
            </HoverButton>
            <HoverButton onClick={() => aboutScrollTo('contact')}>
              <Icon name="mail" size={16} color="var(--accent)" />Let's talk
            </HoverButton>
          </div>
        </Reveal>

      </div>
    </section>
  );
}

Object.assign(window, { About });
