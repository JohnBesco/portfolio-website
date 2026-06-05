/* About.jsx — the story that continues from the hero intro, told in
   first person and ending in the CTA pills (glass HoverButtons).
   Centred narrative; emphasis carried by the primary accent + weight,
   not by gradients — keeps the brand's flat, evidence-first voice. */

function aboutScrollTo(id) {
  const el = document.getElementById(id);
  const root = document.getElementById('scroll-root');
  if (!el || !root) return;
  const top = el.getBoundingClientRect().top - root.getBoundingClientRect().top + root.scrollTop - 24;
  root.scrollTo({
    top,
    behavior: 'smooth'
  });
}
function About() {
  const accent = {
    color: 'var(--accent-fg)'
  };
  const lead = {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    lineHeight: 1.3,
    letterSpacing: '-0.01em'
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "about",
    className: "fullbleed",
    style: {
      paddingTop: 96,
      paddingBottom: 96,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 680,
      margin: '0 auto',
      padding: '0 24px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      position: 'absolute',
      width: 1,
      height: 1,
      overflow: 'hidden',
      clipPath: 'inset(50%)',
      whiteSpace: 'nowrap',
      margin: 0
    }
  }, "About"), /*#__PURE__*/React.createElement(Reveal, {
    variant: "fade"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      ...lead,
      fontSize: 'clamp(1.5rem,3.2vw,2rem)',
      color: 'var(--text-secondary)',
      margin: '0 0 8px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: accent
  }, "7 years in sales."), " I managed a team of 12 sales reps.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 60,
    variant: "fade"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      ...lead,
      fontSize: 'clamp(1.5rem,3.2vw,2rem)',
      color: 'var(--text-secondary)',
      margin: '0 0 36px'
    }
  }, "Then I stopped pitching. I started ", /*#__PURE__*/React.createElement("span", {
    style: accent
  }, "building."))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 17,
      color: 'var(--text-muted)',
      lineHeight: 1.7,
      margin: '0 0 40px',
      maxWidth: 600,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  }, "Freelance since Nov 2023, I've grown client lead pipelines 25%+ \u2014 cold outbound that books B2B appointments, landing pages that convert, and SEO that earns the click. I write the code and understand the conversion.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 150
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 17,
      color: 'var(--text-muted)',
      lineHeight: 1.7,
      margin: '0 0 40px',
      maxWidth: 600,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  }, "Lately I've gone further \u2014 building AI workflows and operating systems that turn scattered work into repeatable process.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 180
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(1.6rem,3.6vw,2.2rem)',
      color: 'var(--text-primary)',
      lineHeight: 1.25,
      margin: '0 0 6px'
    }
  }, "This still feels like day one.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 220
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'clamp(1.3rem,2.8vw,1.7rem)',
      color: 'var(--text-secondary)',
      lineHeight: 1.3,
      margin: '0 0 4px'
    }
  }, "Harder briefs. Sharper pages. Smarter systems.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 260
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(1.6rem,3.6vw,2.2rem)',
      ...accent,
      lineHeight: 1.25,
      margin: '0 0 40px'
    }
  }, "Ready for what's next.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 320
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 12,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(HoverButton, {
    onClick: () => aboutScrollTo('experience')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "briefcase",
    size: 16,
    color: "var(--accent)"
  }), "My path"), /*#__PURE__*/React.createElement(HoverButton, {
    onClick: () => aboutScrollTo('projects')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "code",
    size: 16,
    color: "var(--accent)"
  }), "What I build"), /*#__PURE__*/React.createElement(HoverButton, {
    onClick: () => aboutScrollTo('contact')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 16,
    color: "var(--accent)"
  }), "Let's talk")))));
}
Object.assign(window, {
  About
});