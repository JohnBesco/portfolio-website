/* Contact.jsx — centered CTA block with wave divider, no form.
   WavePath is defined in ui.jsx and available globally. */

function Contact() {
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    className: "fullbleed",
    style: {
      paddingTop: 96,
      paddingBottom: 112,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      pointerEvents: 'none',
      position: 'absolute',
      top: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      width: '70%',
      height: '100%',
      background: 'radial-gradient(ellipse at top, color-mix(in srgb, var(--accent) 7%, transparent), transparent 60%)',
      filter: 'blur(32px)',
      zIndex: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fullbleed-inner",
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement(WavePath, {
    style: {
      marginBottom: 80
    }
  }), /*#__PURE__*/React.createElement(Reveal, {
    variant: "fade"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(40px, 6vw, 72px)',
      color: 'var(--text-primary)',
      margin: '0 0 20px',
      letterSpacing: '-0.03em',
      lineHeight: 1.05
    }
  }, "Got a project?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 18,
      color: 'var(--text-secondary)',
      margin: '0 0 48px',
      lineHeight: 1.6,
      maxWidth: 480
    }
  }, "Websites, growth systems, AI workflows: let's build something that works."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    href: "mailto:johnbesco.dev@gmail.com"
  }, "Get in touch ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrowRight",
    size: 16,
    color: "currentColor"
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    href: "https://uk.linkedin.com/in/john-besco",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "linkedin",
    size: 16,
    color: "var(--text-secondary)"
  }), "LinkedIn"))))));
}
Object.assign(window, {
  Contact
});