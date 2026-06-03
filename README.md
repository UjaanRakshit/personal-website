# personal-website

A skeuomorphic ring-binder portfolio. On first load a closed kraft folder opens, lays its front cover flat on the desk, and reveals paper pages that flip in real 3D between sections. Built in Next.js 15 with no animation library underneath: every gradient, shadow, page rotation, and material is pure CSS.

[Quickstart](#quickstart) | [Highlights](#highlights) | [Architecture](#architecture) | [Project Layout](#project-layout) | [Build & Deploy](#build--deploy)

## Highlights

- **Real 3D page flips.** `transform-style: preserve-3d`, perspective camera, 900 ms cubic-bezier rotation around the spine, with the content swap pinned to the edge-on midpoint so mirrored text never appears on either face.
- **Direction-aware turns.** Forward flips rotate the outgoing page away to the left; backward flips spin the incoming page back from the left. Words stay attached to the page they belong to.
- **Cover that opens once.** On mount the kraft front cover rotates from `0deg` to `-180deg` over 1.5 s, then drops its z-index so subsequent flipped pages stack on top of it the way real divider pages stack on an open binder.
- **Authentic binder materials.** Kraft cover from layered SVG fractal-noise + gradient passes, paper grain on the page faces, red margin rule, embossed punch holes, five brushed-steel clasps from pure CSS radial-gradient + box-shadow.
- **Tabs flush to the page edge** with no visible seam. They sit static across navigations so any section is always one click away.
- **Hover-expand project rows** driven by a single `max-height` transition; the underline beneath each title morphs into a GitHub icon (or external-link arrow) on hover via overlapping `group-hover` transforms.
- **Independent scrolling on the Projects page** so the heading stays pinned while the entry list scrolls within the paper.
- **Roman folios, italic serif dates, dashed dividers** between project entries — small typographic details that lean on the binder metaphor without ever feeling decorative.
- **`prefers-reduced-motion` respected** end to end: rotations collapse to a 1-frame snap, hover transitions short-circuit to color-only.

Stack: Next.js 15 (App Router) · TypeScript · Tailwind CSS. No Framer Motion, no GSAP, no three.js. CSS for everything visual.

## Quickstart

```sh
npm install
npm run dev
# open http://localhost:3000
```

Production build:

```sh
npm run build
npm start
```

## Architecture

The binder is a small controlled state machine.

- `activeSection` is read from `usePathname` — every nav click is a real route change to `/`, `/projects`, or `/contact`.
- `shown` mirrors `activeSection` with a 450 ms delay so the React content swap lands exactly when the page is edge-on at `rotateY(-90deg)`.
- Each of the three pages renders in 3D space at a `rotateY` derived from `delta = pageIdx - activeIdx`. `delta < 0` pages sit at `-180deg` on the left, `delta > 0` pages stack at `0deg` behind the front one, and `delta === 0` is the active page.
- The front cover is a separate layer that runs the opening animation once on mount, then settles into a low z-index so subsequent flipped pages can lay on top of it.
- Mobile (`< 900px`) skips the 3D scene entirely and renders the active section's content in a single paper card with a horizontal tab strip — same content modules, no rotation.

## Project Layout

```
src/
├── app/                          Next.js routes; thin shells, the binder owns rendering
│   ├── page.tsx                  /        → about section
│   ├── projects/page.tsx         /projects
│   ├── contact/page.tsx          /contact
│   ├── layout.tsx                root layout, wires the BinderShell
│   └── globals.css               every CSS variable, gradient, keyframe, and transform
├── components/
│   └── binder/
│       ├── BinderShell.tsx       routes the active section into the right shell
│       ├── DeskBinder.tsx        desktop scene, page-stack state machine, cover animation
│       ├── MobileBinder.tsx      mobile card layout
│       ├── Rings.tsx             five metal clasps
│       ├── SideTabs.tsx          right-edge tabs flush to the page
│       └── TopTabs.tsx           mobile horizontal tab strip
├── content/                      section content modules (independent of routing)
│   ├── About.tsx
│   ├── Projects.tsx
│   └── Contact.tsx
└── lib/
    ├── sections.ts               section metadata (id, label, href, tab color)
    ├── hooks.ts                  useMediaQuery, useReducedMotion
    └── searchIndex.ts            flat index of every section's items
```

## Build & Deploy

Vercel-ready out of the box; nothing exotic in `next.config.ts`. No required environment variables.

```sh
npm run build
```

---

Built by [Ujaan Rakshit](https://github.com/UjaanRakshit).
