# UI Kit — Portfolio / CV site

Hi-fi, interactive recreation of John Besco's portfolio/CV website — the brand's
primary (and only) product surface. Built from the design system's foundations
(`../../colors_and_type.css`) and the `components/` starters in the source folder.
Layout follows the cv-santiago pattern: left sticky timeline nav + stacked
section cards on a dark dot-grid canvas.

## Run it
Open `index.html`. React + Babel are loaded from CDN; components compile in the
browser (a few hundred ms on first load). Everything is a cosmetic recreation —
the contact form validates and shows a success state but sends nothing.

## Files

| File | What it is |
|---|---|
| `index.html` | App shell — scroll container, layout, font + token wiring, mounts `<App>` |
| `ui.jsx` | Primitives: `Icon` (Lucide paths, 1.5 stroke), `Button`, `Badge`, `Card`, `Stat`, `Overline`, `Reveal` |
| `Sidebar.jsx` | Sticky left nav — profile bubble, timeline dots, scroll-spy, "Open to work" status |
| `Hero.jsx` | Name, headline, role tags, the bridge paragraph, CTAs, stat row |
| `Experience.jsx` | Vertical timeline of roles (real CV content, numbered bullets) |
| `Projects.jsx` | 2-col project grid — real names, linked cards (no mockup images) |
| `Skills.jsx` | Strengths column + tech-stack grid with brand-logo chips |
| `Contact.jsx` | "Let's talk" CTA with a working (fake) validated contact form |

Each component file exports to `window` at the bottom so the others can use it
(separate Babel scripts don't share scope).

## Interactions covered
- **Scroll-spy nav** — active dot + label track the section in view; click to scroll.
- **Hover states** — buttons (primary dims, secondary border picks up blue),
  cards (border lightens, surface lifts — no transform), project "View" link.
- **Contact form** — inline validation (name/email/message), error styling in
  `--color-error`, focus glow ring, success confirmation.

## Resolved since first build
- **Fonts self-hosted** — Cabinet Grotesk now loads from `../../assets/fonts/`
  (no CDN). Bricolage Grotesque still on Google Fonts.
- **Projects are linked cards, not mockups** — by brand decision, no device-frame
  images; each card links out (live + code).
- **Tech-stack logos are brand SVGs** — chips with brand marks (simple-icons CDN
  here; inline-SVG pattern documented in `tech-logos.md`).

## Still NOT reproduced
- Real headshot in the hero (John to provide) — sidebar uses the JB mark.
- Real project URLs/repos — cards link to `#` (cosmetic recreation).

## Notes on fidelity
Visuals are matched to the documented system (colours, type, radii, borders,
spacing). Component *implementations* are simplified/cosmetic, not the
production React. The brand's scroll-reveal entrance and stat count-up are
documented in the design system but rendered in their resting (visible, final)
state here for reliability — re-add them with the `motion.md` spec in production.
