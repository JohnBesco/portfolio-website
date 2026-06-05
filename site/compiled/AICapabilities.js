/* AICapabilities.jsx — two-column asymmetric layout.
   Left: section heading (sticky on desktop). Right: capability list with
   hairline separators. Replaces the identical-card grid with a typographic
   approach that matches the "systems thinker" brand voice. */

const AI_CAPABILITIES = [{
  icon: 'sparkles',
  title: 'AI Workflow Design',
  desc: 'Prompt flows, tool use, handoffs, and repeatable operating steps for real tasks.'
}, {
  icon: 'search',
  title: 'Second-Brain Architecture',
  desc: 'Structured vaults, project context, and memory layers built for continuity.'
}, {
  icon: 'code',
  title: 'Skill & Prompt Systems',
  desc: 'Reusable Claude skill libraries and operating rules that cut repeat setup.'
}, {
  icon: 'briefcase',
  title: 'Operating-System Thinking',
  desc: 'Domains, projects, and playbooks that make AI part of daily execution.'
}, {
  icon: 'send',
  title: 'Automation Mapping',
  desc: 'Finding where AI, APIs, and automations remove manual work and tighten delivery.'
}, {
  icon: 'messageCircle',
  title: 'Context & Handoff Design',
  desc: 'Session handoffs, context files, and SOPs that keep work coherent over time.'
}];
function AICapabilities() {
  var mobile = useMobile();
  return /*#__PURE__*/React.createElement("section", {
    id: "ai-systems",
    className: "fullbleed",
    style: {
      paddingTop: 96,
      paddingBottom: 96
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fullbleed-inner"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: mobile ? '1fr' : '260px 1fr',
      gap: mobile ? 40 : 80,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    variant: "fade"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: mobile ? 'static' : 'sticky',
      top: 24
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(26px, 3.5vw, 40px)',
      color: 'var(--text-primary)',
      margin: '0 0 16px',
      lineHeight: 1.15,
      letterSpacing: '-0.02em'
    }
  }, "I build systems, not just pages."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--text-secondary)',
      margin: 0,
      lineHeight: 1.65,
      maxWidth: 220
    }
  }, "Beyond websites and campaigns \u2014 AI workflows that turn messy work into repeatable process."))), /*#__PURE__*/React.createElement("div", null, AI_CAPABILITIES.map((c, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: c.title,
    delay: Math.min(i, 5) * 55
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      padding: '20px 0',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      marginTop: 3
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: c.icon,
    size: 16,
    color: "var(--accent)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 16,
      color: 'var(--text-primary)',
      margin: '0 0 4px',
      lineHeight: 1.3
    }
  }, c.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-tertiary)',
      lineHeight: 1.6,
      margin: 0
    }
  }, c.desc))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-subtle)'
    }
  })))));
}
Object.assign(window, {
  AICapabilities
});