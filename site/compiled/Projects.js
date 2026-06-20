/* Projects.jsx — two groups: Client Work + Side Projects.
   Same 2-col card grid for both; WavePath divider between groups. */

const CLIENT_PROJECTS = [{
  name: 'Clear Choice Home',
  meta: 'LOCAL BUSINESS · WINDOWS & DOORS',
  desc: 'Full site build for an established window and door company in Cheshire. WordPress, lead-capture forms, and local SEO to drive quote requests from homeowners.',
  tags: ['WordPress', 'Local SEO', 'Lead Gen'],
  url: 'https://clearchoicehome.co.uk/',
  live: 'clearchoicehome.co.uk',
  repo: null
}, {
  name: 'Energy Windows',
  meta: 'LOCAL BUSINESS · DOUBLE GLAZING',
  desc: 'WordPress site for a double glazing company in Stoke-on-Trent. Quote-request focused layout with local SEO to capture homeowners searching for window and door replacements.',
  tags: ['WordPress', 'Local SEO', 'Lead Gen'],
  url: 'https://energywindows.co.uk/',
  live: 'energywindows.co.uk',
  repo: null
}, {
  name: 'Saepes',
  meta: 'LOCAL BUSINESS · FENCING',
  desc: 'WordPress site for a fencing company in Manchester. Lead-focused layout with local SEO to capture homeowners and businesses searching for installation and repair.',
  tags: ['WordPress', 'Local SEO', 'Lead Gen'],
  url: 'https://saepes.co.uk/',
  live: 'saepes.co.uk',
  repo: null
}, {
  name: 'Essential Massage',
  meta: 'LOCAL BUSINESS · BOOKING',
  desc: 'Booking-led site for a massage therapist. Local SEO plus a simple enquiry flow that fills the calendar. Built and maintained in WordPress.',
  tags: ['WordPress', 'Local SEO'],
  url: 'https://essentialmassage.uk/',
  live: 'essentialmassage.uk',
  repo: null
}, {
  name: 'Bull Solana',
  meta: 'WEB3 · MARKETING SITE',
  desc: 'Single-page marketing site for a Solana token. Fast, animated reveals, mobile-first — front-end built to land the pitch in one scroll.',
  tags: ['Front-end', 'Animation', 'HTML / CSS'],
  url: 'https://solanabulltoken.netlify.app/',
  live: 'solanabulltoken.netlify.app',
  repo: 'https://github.com/JohnBesco/bull-token'
}, {
  name: 'Cult Token',
  meta: 'WEB3 · COMMUNITY',
  desc: 'Community landing page for a crypto project. Dark, punchy, mobile-first with a wallet-connect mock and a token-stats section.',
  tags: ['React', 'Front-end'],
  url: 'https://solanaculttoken.netlify.app/',
  live: 'solanaculttoken.netlify.app',
  repo: 'https://github.com/JohnBesco/cult-project'
}];
const AI_BRAIN = {
  name: "Thursday — AI 2nd Brain OS",
  meta: 'AI SYSTEM · SECOND BRAIN',
  desc: 'A structured Claude + Obsidian operating system for planning, context management, reusable skills, and session handoff — built as a personal second brain and delivery OS.',
  features: ['50+ reusable Claude skills across dev, marketing, and content workflows', 'Project-level context files, operating rules, and memory layers', 'Session handoff flows that keep work coherent across conversations', 'Custom hooks, cron triggers, and structured delivery SOPs', 'Knowledge graph and wiki index for fast cross-project lookup'],
  tags: ['Claude Code', 'Skills Building', 'RAG Systems', 'MCP Integrations', 'Multi-Agent Workflows', 'Automations'],
  url: null,
  live: 'Private system',
  repo: null
};
const SIDE_PROJECTS = [{
  name: 'Manage landing page',
  meta: 'SAAS · LANDING',
  desc: 'Conversion-focused landing page for a SaaS product. Built the hero, pricing flow and responsive layout in React + Tailwind. Shipped to convert on first scroll.',
  tags: ['React', 'Tailwind', 'SEO'],
  url: 'https://manage-landing-pagedesign.netlify.app/',
  live: 'manage-landing-pagedesign.netlify.app',
  repo: 'https://github.com/JohnBesco/Manage-Landing-Page'
}, {
  name: 'SwiftTrade Dashboard',
  meta: 'CRYPTO · TRADING DASHBOARD',
  desc: 'Live crypto trading dashboard with real-time market data, price tracking, and portfolio analytics. Built in React and currently in active development.',
  tags: ['React', 'Front-end', 'Crypto', 'Data'],
  url: 'https://swifttrade-crypto-dashboard.netlify.app/',
  live: 'swifttrade-crypto-dashboard.netlify.app',
  repo: null
}];
function FeaturedProjectCard({
  p
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement(Reveal, {
    variant: "scale"
  }, /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 14,
      border: `1px solid ${hover ? 'var(--accent-90)' : 'var(--accent-30)'}`,
      background: 'linear-gradient(135deg, color-mix(in srgb, var(--accent) 10%, var(--bg-card-alt)) 0%, var(--bg-card-alt) 55%)',
      padding: '28px 28px 24px',
      transition: 'border-color 240ms'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      background: 'radial-gradient(circle at center, rgba(255,255,255,0.018) 1px, transparent 1px)',
      backgroundSize: '4px 4px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '60%',
      height: '60%',
      pointerEvents: 'none',
      background: 'radial-gradient(ellipse at top left, color-mix(in srgb, var(--accent) 12%, transparent), transparent 60%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Overline, {
    style: {
      color: 'var(--accent-fg)'
    }
  }, p.meta), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.06em',
      color: 'var(--accent-fg)',
      background: 'var(--accent-10)',
      border: '1px solid var(--accent-30)',
      borderRadius: 999,
      padding: '3px 10px'
    }
  }, "Private System")), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 26,
      color: 'var(--text-primary)',
      margin: '0 0 10px',
      letterSpacing: '-0.01em'
    }
  }, p.name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-secondary)',
      lineHeight: 1.65,
      margin: '0 0 18px',
      maxWidth: 640
    }
  }, p.desc), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: '0 0 20px',
      padding: 0,
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, (p.features || []).map(f => /*#__PURE__*/React.createElement("li", {
    key: f,
    style: {
      display: 'flex',
      gap: 10,
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--text-tertiary)',
      lineHeight: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: 'var(--accent-fg)',
      flexShrink: 0,
      marginTop: 1
    }
  }, "\u2014"), f))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, (p.tags || []).map(t => /*#__PURE__*/React.createElement(Badge, {
    key: t,
    variant: "primary"
  }, t))))));
}
function ClientFeaturedCard({
  p
}) {
  var [hover, setHover] = React.useState(false);
  var mobile = useMobile();
  var isLive = Boolean(p.url);
  return /*#__PURE__*/React.createElement(Reveal, {
    variant: "scale",
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 14,
      border: `1px solid ${hover ? 'var(--border-active)' : 'var(--border)'}`,
      background: 'var(--bg-card)',
      padding: mobile ? '24px' : '28px 32px',
      minHeight: mobile ? undefined : 256,
      display: 'flex',
      flexDirection: mobile ? 'column' : 'row',
      gap: mobile ? 16 : 48,
      alignItems: 'flex-start',
      transform: hover ? 'translateY(-2px)' : 'translateY(0)',
      boxShadow: hover ? '0 12px 32px rgba(0,0,0,0.45)' : 'none',
      willChange: 'transform',
      transition: 'border-color 240ms, transform 240ms cubic-bezier(0.4,0,0.2,1), box-shadow 240ms cubic-bezier(0.4,0,0.2,1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      opacity: hover ? 1 : 0,
      transition: 'opacity 300ms',
      background: 'radial-gradient(circle at center, rgba(255,255,255,0.025) 1px, transparent 1px)',
      backgroundSize: '4px 4px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      borderRadius: 12,
      opacity: hover ? 1 : 0,
      transition: 'opacity 300ms',
      background: 'linear-gradient(135deg, color-mix(in srgb, var(--accent) 4%, transparent), transparent 55%)'
    }
  }), isLive && /*#__PURE__*/React.createElement("a", {
    href: p.url,
    target: "_blank",
    rel: "noreferrer",
    "aria-label": `Open ${p.name}`,
    style: {
      position: 'absolute',
      top: 18,
      right: 20,
      zIndex: 2,
      display: 'inline-flex',
      color: hover ? 'var(--accent-fg)' : 'var(--text-muted)',
      transition: 'color 160ms',
      padding: 6,
      margin: -6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrowUpRight",
    size: 18,
    color: "currentColor"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Overline, {
    style: {
      marginBottom: 10
    }
  }, p.meta), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 26,
      color: 'var(--text-primary)',
      margin: '8px 0 10px',
      letterSpacing: '-0.01em',
      lineHeight: 1.2
    }
  }, p.name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--text-secondary)',
      lineHeight: 1.65,
      margin: 0
    }
  }, p.desc)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      flexShrink: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: mobile ? 'flex-start' : 'flex-end',
      gap: 14,
      minWidth: mobile ? 'auto' : 200
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      justifyContent: mobile ? 'flex-start' : 'flex-end'
    }
  }, (p.tags || []).map(t => /*#__PURE__*/React.createElement(Badge, {
    key: t
  }, t))), isLive ? /*#__PURE__*/React.createElement("a", {
    href: p.url,
    target: "_blank",
    rel: "noreferrer",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 500,
      color: 'var(--accent-fg)',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "externalLink",
    size: 14,
    color: "currentColor"
  }), p.live) : /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 500,
      color: 'var(--text-muted)'
    }
  }, p.live))));
}
function ProjectCard({
  p,
  i
}) {
  const [hover, setHover] = React.useState(false);
  const isLive = Boolean(p.url);
  return /*#__PURE__*/React.createElement(Reveal, {
    delay: Math.min(i, 4) * 70,
    variant: "scale"
  }, /*#__PURE__*/React.createElement(Card, {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      padding: 24,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden',
      transform: hover ? 'translateY(-3px)' : 'translateY(0)',
      boxShadow: hover ? '0 12px 32px rgba(0,0,0,0.5)' : 'none',
      willChange: 'transform',
      transition: 'transform 240ms cubic-bezier(0.4,0,0.2,1), box-shadow 240ms cubic-bezier(0.4,0,0.2,1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      opacity: hover ? 1 : 0,
      transition: 'opacity 300ms',
      background: 'radial-gradient(circle at center, rgba(255,255,255,0.025) 1px, transparent 1px)',
      backgroundSize: '4px 4px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      borderRadius: 12,
      opacity: hover ? 1 : 0,
      transition: 'opacity 300ms',
      background: 'linear-gradient(135deg, color-mix(in srgb, var(--accent) 5%, transparent), transparent 60%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Overline, null, p.meta), isLive && /*#__PURE__*/React.createElement("a", {
    href: p.url,
    target: "_blank",
    rel: "noreferrer",
    "aria-label": `Open ${p.name}`,
    style: {
      display: 'inline-flex',
      color: hover ? 'var(--accent-fg)' : 'var(--text-muted)',
      transition: 'color 160ms',
      marginTop: 2,
      padding: 6,
      margin: -6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrowUpRight",
    size: 18,
    color: "currentColor"
  }))), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 22,
      color: 'var(--text-primary)',
      margin: '10px 0 8px'
    }
  }, p.name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-secondary)',
      lineHeight: 1.6,
      margin: 0
    }
  }, p.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      margin: '18px 0 0'
    }
  }, (p.tags || []).map(t => /*#__PURE__*/React.createElement(Badge, {
    key: t
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      marginTop: 'auto',
      paddingTop: 18
    }
  }, isLive ? /*#__PURE__*/React.createElement("a", {
    href: p.url,
    target: "_blank",
    rel: "noreferrer",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 500,
      color: 'var(--accent-fg)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "externalLink",
    size: 14,
    color: "currentColor"
  }), p.live) : /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 500,
      color: 'var(--text-muted)'
    }
  }, p.live), p.repo && /*#__PURE__*/React.createElement("a", {
    href: p.repo,
    target: "_blank",
    rel: "noreferrer",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 500,
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "github",
    size: 14,
    color: "currentColor"
  }), "Code")))));
}
function Projects() {
  var mobile = useMobile();
  var cols = mobile ? '1fr' : 'repeat(2, 1fr)';
  return /*#__PURE__*/React.createElement("section", {
    id: "projects",
    className: "fullbleed",
    style: {
      paddingTop: 96,
      paddingBottom: 96
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fullbleed-inner"
  }, /*#__PURE__*/React.createElement(Reveal, {
    variant: "fade",
    style: {
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: mobile ? 28 : 'clamp(26px, 3.5vw, 40px)',
      color: 'var(--text-primary)',
      margin: '0 0 8px'
    }
  }, "Pages, campaigns, and systems that ship."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--text-secondary)',
      margin: 0,
      maxWidth: 560
    }
  }, "Client builds and side projects across web, growth, and AI.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 500,
      color: 'var(--text-tertiary)',
      margin: '0 0 16px'
    }
  }, "Client work"), /*#__PURE__*/React.createElement(ClientFeaturedCard, {
    p: CLIENT_PROJECTS[0]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: cols,
      gap: 20
    }
  }, CLIENT_PROJECTS.slice(1).map((p, i) => /*#__PURE__*/React.createElement(ProjectCard, {
    key: p.name,
    p: p,
    i: i
  })))), /*#__PURE__*/React.createElement(WavePath, {
    style: {
      margin: '52px 0'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 500,
      color: 'var(--text-tertiary)',
      margin: '0 0 16px'
    }
  }, "Side projects"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(FeaturedProjectCard, {
    p: AI_BRAIN
  })), SIDE_PROJECTS.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: cols,
      gap: 20
    }
  }, SIDE_PROJECTS.map((p, i) => /*#__PURE__*/React.createElement(ProjectCard, {
    key: p.name,
    p: p,
    i: i
  }))))));
}
Object.assign(window, {
  Projects
});