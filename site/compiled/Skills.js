/* Skills.jsx — two-column skills layout + certifications list.
   Left: soft-skill pills. Right: tech stack sub-category cards.
   Below: certifications rows (year | name | issuer | logo). */

/* Custom SVGs not available on simpleicons — rendered inline at chip size. */
const CUSTOM_SVG = {
  openai: size => /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 100 100"
  }, /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#oai-a)"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M93.06 40.937c1.25-3.438 1.563-6.875 1.25-10.313-.312-3.437-1.562-6.875-3.125-10-2.812-4.687-6.875-8.437-11.562-10.625-5-2.187-10.313-2.812-15.625-1.562-2.5-2.5-5.313-4.688-8.438-6.25S48.685-.001 45.248-.001c-5.313 0-10.625 1.563-15 4.688a24.16 24.16 0 0 0-9.063 12.5c-3.75.937-6.875 2.5-10 4.374-2.812 2.188-5 5-6.875 7.813-2.812 4.688-3.75 10-3.125 15.313a27.2 27.2 0 0 0 6.25 14.375c-1.25 3.437-1.562 6.874-1.25 10.312s1.563 6.875 3.125 10c2.813 4.688 6.875 8.438 11.563 10.625 5 2.188 10.312 2.813 15.625 1.563 2.5 2.5 5.312 4.687 8.437 6.25s6.875 2.187 10.313 2.187c5.312 0 10.625-1.562 15-4.687s7.5-7.5 9.062-12.5c3.438-.626 6.875-2.188 9.688-4.376 2.812-2.187 5.312-4.687 6.875-7.812 2.812-4.687 3.75-10 3.125-15.312-.625-5.313-2.5-10.313-5.938-14.375m-37.5 52.5c-5 0-8.75-1.563-12.187-4.376 0 0 .312-.312.625-.312l20-11.562c.625-.313.937-.626 1.25-1.25.312-.626.312-.938.312-1.563V46.249l8.438 5v23.125c.312 10.938-8.438 19.063-18.438 19.063M15.248 76.249c-2.188-3.75-3.125-8.125-2.188-12.5 0 0 .313.312.625.312l20 11.563c.625.313.938.313 1.563.313s1.25 0 1.562-.313l24.375-14.062v9.687L40.873 83.124c-4.375 2.5-9.375 3.125-14.063 1.875-5-1.25-9.062-4.375-11.562-8.75M9.935 32.812c2.188-3.75 5.625-6.563 9.688-8.125v23.75c0 .625 0 1.25.312 1.562.313.625.625.938 1.25 1.25L45.56 65.311l-8.437 5-20-11.562c-4.375-2.5-7.5-6.562-8.75-11.25s-.938-10.312 1.562-14.687m69.063 15.937L54.623 34.687l8.437-5 20 11.562c3.125 1.875 5.625 4.375 7.188 7.5s2.5 6.563 2.187 10.313c-.312 3.437-1.562 6.874-3.75 9.687s-5 5-8.437 6.25v-23.75c0-.625 0-1.25-.313-1.562 0 0-.312-.625-.937-.938m8.437-12.5s-.312-.312-.625-.312l-20-11.563c-.625-.312-.937-.312-1.562-.312s-1.25 0-1.563.312L39.31 38.437v-9.688l20.313-11.875c3.125-1.875 6.562-2.5 10.312-2.5 3.438 0 6.875 1.25 10 3.437 2.813 2.188 5.313 5 6.563 8.125s1.562 6.876.937 10.313m-52.5 17.5-8.437-5V25.311c0-3.437.937-7.187 2.812-10 1.875-3.124 4.688-5.312 7.813-6.874 3.125-1.563 6.875-2.188 10.312-1.563 3.438.313 6.875 1.875 9.688 4.063 0 0-.313.312-.625.312l-20 11.562c-.625.313-.938.625-1.25 1.25s-.313.938-.313 1.563zm4.375-10 10.938-6.25 10.937 6.25v12.5l-10.937 6.25-10.938-6.25z"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "oai-a"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M0 0h100v100H0z"
  })))),
  opencode: size => /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 100 100"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#4b4646",
    d: "M70 80H30V40h40z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#b7b1b1",
    d: "M70 20H30v60h40zm20 80H10V0h80z"
  })),
  sass: size => /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 100 100"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#cd6799",
    d: "M86.108 56.111c-3.489.018-6.52.859-9.06 2.1-.931-1.844-1.863-3.488-2.027-4.694-.183-1.406-.402-2.265-.183-3.945s1.206-4.073 1.187-4.256-.219-1.04-2.228-1.06c-2.01-.017-3.744.385-3.945.914-.201.53-.585 1.735-.84 2.977-.348 1.827-4.019 8.348-6.12 11.763-.675-1.333-1.26-2.502-1.388-3.434-.182-1.406-.401-2.264-.182-3.945.219-1.68 1.205-4.073 1.187-4.256s-.22-1.04-2.228-1.06c-2.01-.017-3.745.384-3.946.914-.2.53-.42 1.772-.84 2.977-.42 1.206-5.297 12.092-6.575 14.905a84 84 0 0 1-1.626 3.38s-.018.054-.073.145a45 45 0 0 1-.548 1.041v.019c-.274.493-.566.95-.712.95-.11 0-.311-1.316.036-3.106.73-3.78 2.466-9.662 2.448-9.863 0-.11.328-1.133-1.133-1.662-1.425-.53-1.936.347-2.064.347s-.219.31-.219.31 1.59-6.612-3.032-6.612c-2.886 0-6.868 3.16-8.84 6.01a2157 2157 0 0 0-6.722 3.67c-1.078.604-2.192 1.206-3.233 1.773-.073-.073-.146-.165-.22-.238-5.589-5.972-15.927-10.192-15.488-18.21.164-2.923 1.169-10.594 19.854-19.91 15.38-7.58 27.617-5.48 29.736-.822 3.032 6.649-6.557 18.996-22.448 20.786-6.064.676-9.242-1.662-10.046-2.538-.84-.914-.968-.968-1.279-.786-.511.274-.182 1.096 0 1.571.475 1.242 2.43 3.434 5.736 4.512 2.922.95 10.028 1.479 18.63-1.845 9.626-3.726 17.152-14.083 14.941-22.759-2.21-8.804-16.822-11.708-30.649-6.795-8.22 2.923-17.133 7.526-23.544 13.517C.808 36.019-.397 42.21.096 44.805 1.868 54.01 14.562 60.002 19.64 64.44c-.256.146-.493.274-.694.384-2.539 1.26-12.22 6.32-14.63 11.671-2.74 6.064.438 10.412 2.538 10.996 6.521 1.808 13.224-1.443 16.823-6.813 3.598-5.37 3.16-12.347 1.497-15.544-.018-.036-.036-.073-.073-.11.658-.383 1.334-.785 1.991-1.168a97 97 0 0 1 3.672-2.064c-.621 1.698-1.078 3.726-1.297 6.648-.274 3.434 1.132 7.89 2.977 9.644.822.767 1.79.786 2.411.786 2.156 0 3.124-1.79 4.201-3.909 1.315-2.594 2.503-5.608 2.503-5.608s-1.48 8.147 2.538 8.147c1.462 0 2.941-1.9 3.599-2.868v.018s.036-.054.11-.182c.145-.238.237-.384.237-.384v-.036c.584-1.023 1.9-3.343 3.854-7.197 2.52-4.968 4.95-11.178 4.95-11.178s.219 1.516.968 4.036c.438 1.48 1.351 3.105 2.082 4.676-.584.822-.95 1.279-.95 1.279l.018.018c-.474.621-.986 1.297-1.552 1.955-1.991 2.374-4.365 5.096-4.694 5.881-.384.932-.293 1.607.438 2.155.53.402 1.48.457 2.448.402 1.79-.128 3.05-.566 3.671-.84.968-.347 2.1-.877 3.16-1.662 1.954-1.443 3.142-3.507 3.032-6.229-.055-1.497-.548-2.995-1.15-4.402.182-.255.346-.511.529-.767 3.087-4.511 5.48-9.461 5.48-9.461s.219 1.516.968 4.036c.365 1.279 1.114 2.667 1.771 4.019-2.904 2.356-4.694 5.096-5.333 6.886-1.15 3.324-.256 4.822 1.443 5.169.767.164 1.863-.201 2.667-.548a12.2 12.2 0 0 0 3.379-1.735c1.954-1.443 3.835-3.452 3.726-6.174-.055-1.242-.384-2.466-.84-3.653 2.465-1.023 5.644-1.59 9.698-1.114 8.695 1.023 10.412 6.447 10.083 8.73s-2.155 3.526-2.758 3.91c-.603.383-.804.51-.749.785.073.402.365.383.877.31.712-.127 4.566-1.844 4.73-6.045.275-5.37-4.84-11.234-13.881-11.179m-67.07 22.613c-2.887 3.141-6.905 4.329-8.64 3.324-1.863-1.078-1.133-5.717 2.41-9.041 2.156-2.028 4.933-3.91 6.777-5.06.42-.256 1.041-.62 1.79-1.078.128-.073.201-.11.201-.11l.439-.273c1.296 4.749.054 8.932-2.978 12.238M40.041 64.44c-1.004 2.448-3.105 8.713-4.383 8.366-1.096-.293-1.772-5.041-.22-9.736.786-2.356 2.448-5.169 3.416-6.265 1.571-1.753 3.306-2.338 3.726-1.625.53.931-1.918 7.726-2.539 9.26m17.334 8.293c-.42.219-.822.365-1.004.255-.128-.073.182-.365.182-.365s2.174-2.338 3.032-3.397c.494-.621 1.078-1.352 1.7-2.174v.238c0 2.794-2.704 4.676-3.91 5.443m13.37-3.05c-.31-.22-.255-.95.786-3.234.402-.895 1.352-2.392 2.977-3.835.183.584.31 1.15.293 1.68-.019 3.525-2.54 4.84-4.055 5.388"
  })),
  python: size => /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 100 100"
  }, /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#a)"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "url(#b)",
    d: "M49.866 0c-4.08.02-7.973.367-11.4.974C28.368 2.757 26.537 6.49 26.537 13.376v9.092h23.856v3.03h-32.81c-6.934 0-13.005 4.168-14.904 12.098-2.191 9.086-2.288 14.758 0 24.246 1.695 7.063 5.745 12.095 12.68 12.095h8.203v-10.9c0-7.875 6.812-14.82 14.903-14.82h23.83c6.633 0 11.928-5.463 11.928-12.123V13.377c0-6.466-5.455-11.323-11.928-12.402-4.1-.682-8.352-.993-12.43-.974M36.964 7.314c2.464 0 4.477 2.046 4.477 4.562 0 2.505-2.013 4.53-4.477 4.53-2.473 0-4.476-2.025-4.476-4.53-.001-2.516 2.003-4.562 4.476-4.562"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#c)",
    d: "M77.198 25.498v10.594c0 8.212-6.964 15.125-14.903 15.125h-23.83c-6.527 0-11.928 5.587-11.928 12.124V86.06c0 6.464 5.621 10.268 11.928 12.122 7.551 2.219 14.793 2.621 23.83 0 6.005-1.74 11.927-5.24 11.927-12.122v-9.094H50.394v-3.031h35.758c6.933 0 9.519-4.836 11.93-12.095 2.491-7.473 2.383-14.66 0-24.246-1.714-6.903-4.986-12.097-11.93-12.097zm-13.403 57.53c2.474 0 4.477 2.026 4.477 4.533 0 2.514-2.004 4.56-4.477 4.56-2.464 0-4.476-2.046-4.476-4.56 0-2.507 2.012-4.533 4.476-4.533"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "b",
    x1: "-1.392",
    x2: "53.633",
    y1: "2.844",
    y2: "49.769",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#5a9fd4"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#306998"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "c",
    x1: "74.335",
    x2: "54.603",
    y1: "78.937",
    y2: "51.265",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#ffd43b"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#ffe873"
  })), /*#__PURE__*/React.createElement("clipPath", {
    id: "a"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M0 0h100v100H0z"
  })))),
  gohighlevel: size => /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 100 100"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "100",
    height: "100",
    rx: "14",
    fill: "#0A1628"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#F5B731",
    d: "M8 82 L8 50 L2 50 L20 18 L38 50 L32 50 L32 82 Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#4B8EEA",
    d: "M34 82 L34 58 L28 58 L46 32 L64 58 L58 58 L58 82 Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#3DC45A",
    d: "M60 82 L60 50 L54 50 L72 18 L90 50 L84 50 L84 82 Z"
  }))
};
const STRENGTHS = ['Bias For Action', 'Systems Thinking', 'Eye For Detail', 'Clear Communication', 'Cold Outbound', 'Ownership Mindset'];
const STACK = [{
  title: 'AI / LLM',
  items: [{
    label: 'OpenAI',
    svgKey: 'openai'
  }, {
    label: 'Anthropic (Claude Code, Skills & Workflows)',
    slug: 'anthropic',
    hex: 'D97757'
  }, {
    label: 'ElevenLabs',
    slug: 'elevenlabs',
    hex: 'EDEDED'
  }, {
    label: 'DeepSeek',
    slug: 'deepseek',
    hex: '4D9CF7'
  }, {
    label: 'OpenCode',
    svgKey: 'opencode'
  }]
}, {
  title: 'AUTOMATION',
  items: [{
    label: 'Zapier',
    slug: 'zapier',
    hex: 'FF4A00'
  }, {
    label: 'Make',
    slug: 'make',
    hex: 'A259FF'
  }]
}, {
  title: 'DEVELOPMENT',
  items: [{
    label: 'React',
    slug: 'react',
    hex: '61DAFB'
  }, {
    label: 'Tailwind CSS',
    slug: 'tailwindcss',
    hex: '38BDF8'
  }, {
    label: 'JavaScript',
    slug: 'javascript',
    hex: 'F7DF1E'
  }, {
    label: 'HTML / CSS',
    slug: 'html5',
    hex: 'E34F26'
  }, {
    label: 'WordPress',
    slug: 'wordpress',
    hex: '6CA8D9'
  }, {
    label: 'Sass',
    svgKey: 'sass'
  }, {
    label: 'Python',
    svgKey: 'python'
  }]
}, {
  title: 'TOOLS & PLATFORMS',
  items: [{
    label: 'Figma',
    slug: 'figma',
    hex: 'F24E1E'
  }, {
    label: 'Webflow',
    slug: 'webflow',
    hex: '4D8DF7'
  }, {
    label: 'Airtable',
    slug: 'airtable',
    hex: '3AC1FF'
  }, {
    label: 'Git',
    slug: 'git',
    hex: 'F05032'
  }, {
    label: 'Notion',
    slug: 'notion',
    hex: 'EDEDED'
  }, {
    label: 'Obsidian',
    slug: 'obsidian',
    hex: '7C3AED'
  }, {
    label: 'GoHighLevel',
    svgKey: 'gohighlevel'
  }, {
    label: 'Smartlead',
    icon: 'send'
  }, {
    label: 'Instantly',
    icon: 'mail'
  }]
}];

/* One real cert (Anthropic Claude 101) + placeholders. */
const CERTS = [{
  year: '2026',
  name: 'Claude 101',
  issuer: 'Anthropic',
  url: 'https://verify.skilljar.com/c/wrejqt39nz3r',
  slug: 'anthropic',
  hex: 'D97757',
  real: true
}, {
  year: '2026',
  name: 'Claude Code 101',
  issuer: 'Anthropic',
  url: 'https://verify.skilljar.com/c/bs8xitidy5a8',
  slug: 'anthropic',
  hex: 'D97757',
  real: true
}, {
  year: '2026',
  name: 'Introduction to Claude Cowork',
  issuer: 'Anthropic',
  url: 'https://verify.skilljar.com/c/9ya3kz4xnwbi',
  slug: 'anthropic',
  hex: 'D97757',
  real: true
}, {
  year: '2026',
  name: 'Claude Code in Action',
  issuer: 'Anthropic',
  url: 'https://verify.skilljar.com/c/3n29rh77bns4',
  slug: 'anthropic',
  hex: 'D97757',
  real: true
}, {
  year: '2026',
  name: 'Teaching AI Fluency',
  issuer: 'Anthropic',
  url: 'https://verify.skilljar.com/c/jc333j3ubov4',
  slug: 'anthropic',
  hex: 'D97757',
  real: true
}, {
  year: '2026',
  name: 'AI Fluency: Framework & Foundations',
  issuer: 'Anthropic',
  url: 'https://verify.skilljar.com/c/w9hxsqkjavke',
  slug: 'anthropic',
  hex: 'D97757',
  real: true
}, {
  year: '2026',
  name: 'AI Fluency for Educators',
  issuer: 'Anthropic',
  url: 'https://verify.skilljar.com/c/jxfhee7s8m6z',
  slug: 'anthropic',
  hex: 'D97757',
  real: true
}, {
  year: '2026',
  name: 'AI Fluency for Students',
  issuer: 'Anthropic',
  url: 'https://verify.skilljar.com/c/up4d863y77sr',
  slug: 'anthropic',
  hex: 'D97757',
  real: true
}, {
  year: '2026',
  name: 'Introduction to Model Context Protocol',
  issuer: 'Anthropic',
  url: 'https://verify.skilljar.com/c/z4v8m7mqod6z',
  slug: 'anthropic',
  hex: 'D97757',
  real: true
}];
function LogoChip({
  item
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      padding: '6px 10px',
      borderRadius: 8,
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 500,
      color: 'var(--text-primary)',
      background: 'var(--bg-raised)',
      border: '1px solid var(--border)',
      whiteSpace: 'nowrap'
    }
  }, item.svgKey ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      flexShrink: 0,
      lineHeight: 0
    }
  }, CUSTOM_SVG[item.svgKey](14)) : item.slug ? /*#__PURE__*/React.createElement("img", {
    src: `https://cdn.simpleicons.org/${item.slug}/${item.hex}`,
    width: 14,
    height: 14,
    alt: "",
    loading: "lazy",
    style: {
      display: 'block',
      flexShrink: 0
    }
  }) : /*#__PURE__*/React.createElement(Icon, {
    name: item.icon,
    size: 14,
    color: "var(--accent-fg)"
  }), item.label);
}
function StackCard({
  g,
  i
}) {
  return /*#__PURE__*/React.createElement(Reveal, {
    delay: Math.min(i, 4) * 70,
    variant: "scale"
  }, /*#__PURE__*/React.createElement(Card, {
    hover: false,
    style: {
      height: '100%',
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.08em',
      color: 'var(--accent-fg)',
      textTransform: 'uppercase',
      margin: '0 0 14px'
    }
  }, g.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, g.items.map(it => /*#__PURE__*/React.createElement(LogoChip, {
    key: it.label,
    item: it
  })))));
}
function CertRow({
  c,
  i
}) {
  const isPlaceholder = c.year === '—';
  const [hover, setHover] = React.useState(false);
  const active = hover && !isPlaceholder;
  return /*#__PURE__*/React.createElement(Reveal, {
    delay: Math.min(i, 5) * 50
  }, /*#__PURE__*/React.createElement("a", {
    href: c.url,
    target: "_blank",
    rel: "noreferrer",
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '14px 12px',
      margin: '0 -12px',
      borderTop: '1px solid var(--border-subtle)',
      borderRadius: 8,
      textDecoration: 'none',
      opacity: isPlaceholder ? 0.45 : 1,
      background: active ? 'var(--accent-10)' : 'transparent',
      boxShadow: active ? 'inset 0 0 0 1px var(--accent-30), 0 0 24px var(--accent-20)' : 'none',
      transition: 'background 240ms ease, box-shadow 240ms ease, opacity 160ms',
      cursor: isPlaceholder ? 'default' : 'pointer'
    },
    onClick: isPlaceholder ? e => e.preventDefault() : undefined
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: 'var(--text-faint)',
      minWidth: 36,
      flexShrink: 0
    }
  }, c.year), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 15,
      color: 'var(--text-primary)',
      display: 'block',
      lineHeight: 1.3
    }
  }, c.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--text-faint)'
    }
  }, c.issuer)), /*#__PURE__*/React.createElement("img", {
    src: `https://cdn.simpleicons.org/${c.slug}/${c.hex}`,
    width: 20,
    height: 20,
    alt: c.issuer,
    loading: "lazy",
    style: {
      display: 'block',
      flexShrink: 0,
      opacity: 0.8
    }
  }), !isPlaceholder && /*#__PURE__*/React.createElement(Icon, {
    name: "arrowUpRight",
    size: 14,
    color: "var(--text-faint)"
  })));
}
function Skills() {
  var mobile = useMobile();
  return /*#__PURE__*/React.createElement("section", {
    id: "skills",
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
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(26px, 3.5vw, 40px)',
      color: 'var(--text-primary)',
      margin: '0 0 0'
    }
  }, "Build, grow, and systemise.")), /*#__PURE__*/React.createElement("div", {
    className: "skills-layout",
    style: {
      display: 'grid',
      gridTemplateColumns: '200px 1fr',
      gap: 32,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("aside", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sparkles",
    size: 16,
    color: "var(--accent)"
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 16,
      color: 'var(--text-primary)',
      margin: 0
    }
  }, "Strengths")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: mobile ? 'row' : 'column',
      flexWrap: mobile ? 'wrap' : 'nowrap',
      alignItems: 'flex-start',
      gap: 8
    }
  }, STRENGTHS.map(s => /*#__PURE__*/React.createElement("span", {
    key: s,
    style: {
      padding: '7px 14px',
      borderRadius: 999,
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 500,
      color: 'var(--accent-fg)',
      background: 'var(--accent-10)',
      border: '1px solid var(--accent-30)'
    }
  }, s)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "code",
    size: 16,
    color: "var(--accent)"
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 16,
      color: 'var(--text-primary)',
      margin: 0
    }
  }, "Tech stack")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: mobile ? '1fr' : 'repeat(2, 1fr)',
      gap: 14
    }
  }, STACK.map((g, i) => /*#__PURE__*/React.createElement(StackCard, {
    key: g.title,
    g: g,
    i: i
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 64
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "award",
    size: 16,
    color: "var(--accent)"
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 16,
      color: 'var(--text-primary)',
      margin: 0
    }
  }, "Certifications"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, CERTS.map((c, i) => /*#__PURE__*/React.createElement(CertRow, {
    key: c.name,
    c: c,
    i: i
  })))), /*#__PURE__*/React.createElement("style", {
    dangerouslySetInnerHTML: {
      __html: '@media (max-width: 720px){ .skills-layout{ grid-template-columns: 1fr !important; } }'
    }
  })));
}
Object.assign(window, {
  Skills
});