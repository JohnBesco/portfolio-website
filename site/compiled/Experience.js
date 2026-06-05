/* Experience.jsx — full-bleed section, role blocks separated by dividers. */

const ROLES = [{
  title: 'Digital Marketer — Freelance',
  dates: 'Nov 2023 – Present',
  current: true,
  points: ['Grew client lead pipelines by 25%+ through cold email systems and outbound campaigns, working with clients across e-commerce, staffing, and micro-SaaS.', 'Built search-optimised websites for local and nationwide businesses.', 'Managed SEO for small business clients — improved organic visibility and traffic.', 'Built AI-assisted workflows and reusable systems to speed delivery and keep client projects consistent.'],
  tags: ['Web Design', 'Web Development', 'Lead Generation', 'Client Management', 'SEO'],
  testimonial: {
    quote: 'I recently had the pleasure of working with John to create a website for my landscaping business, and I must say, the experience was exceptional. From start to finish, John demonstrated a deep understanding of the challenges faced by landscapers, particularly regarding time constraints and the demands of managing quotes.',
    name: 'Michael Fernandez',
    role: 'Owner — MJF Landscapes',
    source: 'Trustpilot · 2024',
    initials: 'MF'
  }
}, {
  title: 'Course Advisor — Caring For Care',
  dates: 'Nov 2024 – Jul 2025',
  points: ['Ran B2B outbound sales for healthcare training services.', 'Coordinated nationwide training sessions, aligning client needs with logistics.', 'Analysed sales metrics to inform prospecting and solution-based selling.'],
  tags: ['B2B sales', 'Account management']
}, {
  title: 'Assistant Sales Manager — Safestyle UK',
  dates: 'Dec 2016 – Nov 2023',
  points: ['Part of a branch team consistently writing over £1 million in monthly sales revenue.', 'Helped manage a team of over 12 sales representatives.', 'Grew sales opportunities by 30% through strategic prospect distribution and management.'],
  tags: ['Telemarketing', 'Lead Management', 'B2C Sales', 'CRM Management', 'Customer Relations']
}];
function TestimonialCard({
  t
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      padding: '20px 24px',
      borderRadius: 12,
      background: 'var(--bg-raised)',
      border: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-secondary)',
      lineHeight: 1.7,
      fontStyle: 'italic',
      margin: '0 0 18px'
    }
  }, "\"", t.quote, "\""), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: '50%',
      flexShrink: 0,
      background: 'var(--bg-card-alt)',
      border: '1px solid var(--border)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 12,
      color: 'var(--accent-fg)'
    }
  }, t.initials), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--text-primary)',
      margin: 0
    }
  }, t.name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: 'var(--text-faint)',
      margin: '2px 0 0'
    }
  }, t.role))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      fontWeight: 500,
      color: 'var(--text-faint)',
      whiteSpace: 'nowrap'
    }
  }, t.source)));
}
function RoleBlock({
  role,
  i
}) {
  return /*#__PURE__*/React.createElement(Reveal, {
    delay: Math.min(i, 4) * 70,
    variant: "slide-left"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '48px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 16,
      flexWrap: 'wrap',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 20,
      color: 'var(--text-primary)',
      margin: 0,
      lineHeight: 1.25
    }
  }, role.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10
    }
  }, role.current && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      padding: '2px 8px',
      borderRadius: 999,
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.06em',
      color: 'var(--accent-fg)',
      background: 'var(--accent-10)',
      border: '1px solid var(--accent-30)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'var(--accent)',
      flexShrink: 0
    }
  }), "NOW"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--text-faint)',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar",
    size: 14,
    color: "var(--text-faint)"
  }), role.dates))), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: '0 0 16px',
      padding: 0,
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 7
    }
  }, role.points.map((p, k) => /*#__PURE__*/React.createElement("li", {
    key: k,
    style: {
      display: 'flex',
      gap: 10,
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--text-tertiary)',
      lineHeight: 1.55
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: 'var(--accent-fg)',
      flex: 'none',
      marginTop: 1
    }
  }, "\u2014"), p))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, role.tags.map(t => /*#__PURE__*/React.createElement(Badge, {
    key: t
  }, t))), role.testimonial && /*#__PURE__*/React.createElement(TestimonialCard, {
    t: role.testimonial
  })));
}
function Experience() {
  return /*#__PURE__*/React.createElement("section", {
    id: "experience",
    className: "fullbleed",
    style: {
      paddingTop: 96,
      paddingBottom: 96,
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
  }, /*#__PURE__*/React.createElement(Reveal, {
    variant: "fade",
    style: {
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(26px, 3.5vw, 40px)',
      color: 'var(--text-primary)',
      margin: '0 0 0'
    }
  }, "7 years selling. 3 building.")), /*#__PURE__*/React.createElement("div", null, ROLES.map((r, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement(WavePath, null), /*#__PURE__*/React.createElement(RoleBlock, {
    role: r,
    i: i
  }))))));
}
Object.assign(window, {
  Experience
});