# Tech-stack logos — the chip pattern

How the **Skills → Tech stack** chips are built, and how to make them
production-ready when you hand this to a code agent.

## The chip

Each tech item is a single inline-flex chip: a small brand mark + a label.
This is the exact pattern the cv-santiago reference uses (Tailwind version,
straight from its DOM):

```html
<span class="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-xs bg-muted text-foreground">
  <svg viewBox="0 0 24 24" class="w-3.5 h-3.5 shrink-0" fill="#3776AB" aria-hidden="true">
    <path d="M14.25.18l.9.2.73.26.59.3.45.32…"/> <!-- Python glyph -->
  </svg>
  Python
</span>
```

Plain-CSS equivalent (what this kit's tokens map to):

```html
<span style="display:inline-flex;align-items:center;gap:7px;padding:6px 10px;
             border-radius:8px;font:500 13px var(--font-body);color:#EDEDED;
             background:#1A1A1A;border:1px solid #2A2A2A;white-space:nowrap;">
  <svg viewBox="0 0 24 24" width="15" height="15" fill="#3776AB" aria-hidden="true">
    <path d="…python path…"/>
  </svg>
  Python
</span>
```

Key facts: **single-path, `viewBox="0 0 24 24"`, `fill="<brand hex>"`,
~15px square, `aria-hidden`** (the label carries the accessible name).
Monochrome single-colour glyphs — not the multicolour marketing logos.

## Where the glyphs come from

All marks are [simple-icons](https://simpleicons.org) (MIT, single-path,
24×24). Two ways to use them:

| Use | How |
|---|---|
| **This kit (recreation)** | `<img src="https://cdn.simpleicons.org/<slug>/<hex>">` — quickest, exact shapes + colour. Needs network. |
| **Production (recommended)** | Inline the SVG `<path>` so it ships in the bundle, themes with `fill`, and works offline. Copy the path from `node_modules/simple-icons/icons/<slug>.svg` or the simple-icons site. |

The kit (`Skills.jsx`) uses the CDN `<img>` form for speed. Swap each one for
an inline `<svg>` with the path below when you build for real.

## Slug + colour map (this portfolio's stack)

`https://cdn.simpleicons.org/<slug>/<hex>` — hexes are tuned a little lighter
than the official brand colour so they read on the dark `#1A1A1A` chip.

| Label | simple-icons slug | brand hex | chip hex (dark-tuned) |
|---|---|---|---|
| React | `react` | `61DAFB` | `61DAFB` |
| Tailwind CSS | `tailwindcss` | `06B6D4` | `38BDF8` |
| JavaScript | `javascript` | `F7DF1E` | `F7DF1E` |
| HTML5 | `html5` | `E34F26` | `E34F26` |
| CSS | `css` | `663399` | `4F9BE8` |
| Sass | `sass` | `CC6699` | `E082A6` |
| WordPress | `wordpress` | `21759B` | `6CA8D9` |
| Google Ads | `googleads` | `4285F4` | `5A9CF8` |
| Figma | `figma` | `F24E1E` | `F24E1E` |
| Webflow | `webflow` | `146EF5` | `4D8DF7` |
| Airtable | `airtable` | `18BFFF` | `3AC1FF` |
| Git | `git` | `F05032` | `F05032` |

## Skills without a brand mark

SEO, Cold outbound, Email campaigns, Social media — no logo. They use a
**Lucide** stroke icon (1.5px, `--color-primary`) instead of a brand glyph,
so the chip shape stays consistent. Mapping in `Skills.jsx`:
`SEO → search · Cold outbound → send · Email campaigns → mail · Social media → share2`.

## Reference: the Python path (from the inspector capture)

```
M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z
```
