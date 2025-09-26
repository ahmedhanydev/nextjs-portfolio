## Ahmed Hany – Portfolio

A modern, performance-focused personal portfolio built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion. It showcases projects, articles, experience, education, and core frontend engineering skills with accessible UI, dark mode, smooth motion, and reusable components.

### Live URL
https://ahmedhany-portfolio.vercel.app/

---
### Key Features
- Responsive design (mobile-first, fluid breakpoints, custom Tailwind screens)
- Dark / light theme with no-flash inline script + persisted preference
- Animated headline + staggered text + motion-driven entrances (Framer Motion)
- Accessible navigation (semantic landmarks, focusable interactive elements)
- Projects & featured project cards with hover micro‑interactions
- Dynamic skills radial layout (motion-based polar distribution)
- Scroll progress driven vertical timeline for experience
- Reusable sections: Skills, Experience, Education, Articles, Footer, Navbar
- Optimized images via `next/image` + priority loading for hero
- SEO metadata per page (`metadata` export) + descriptive alt text
- TypeScript strictness for safer component props
- Centralized theme tokens & radial background patterns via Tailwind extension
- Clean component + data separation (`/data/experience.json`)

### Tech Stack
- Framework: Next.js 14 (App Router)
- Language: TypeScript / React 18
- Styling: Tailwind CSS (custom config, dark class strategy)
- Animation: Framer Motion (stagger, scroll progress, presence)
- Fonts: Google Montserrat (CSS variable injection)
- Images: next/image + static asset optimization
- Build & Tooling: ESLint (next config), PostCSS, pnpm

### Project Structure (simplified)
```
src/
  app/               # App Router pages (home, about, projects, articles)
  components/        # UI + layout + motion + hooks
    hooks/           # Theme + mount detection
    Project/         # Project & FeaturedProject components
    Article/         # (Article related components)
    providers/       # ClientProviders (NavBar, Footer, AnimatePresence)
  data/experience.json
  styles/            # Global Tailwind entry + module CSS if needed
public/
  images/            # Optimized project, article, tech, profile images
  ...icons / favicons / manifest
```

### Notable Components
- `AnimatedText` – word-by-word stagger entrance respecting prefers-reduced-motion
- `NavBar` – adaptive desktop/mobile with animated hamburger + theme toggle
- `Skills` – radial motion layout of tech badges
- `Experience` – scroll-linked vertical timeline (scaleY progress bar)
- `useThemeSwitcher` – SSR safe, OS sync fallback, persistence & attribute binding
- `ClientProviders` – wraps layout with AnimatePresence + consistent shells

### Theming
- Dark mode class applied pre-paint via inline script to avoid FOUC
- LocalStorage persistence with OS preference auto-sync (only if no explicit choice)
- Tailwind custom colors: `dark`, `light`, `primary`, `primaryDark`

### Performance & SEO
- Hero image `priority` + appropriate `sizes`
- Minimal inline theme script instead of hydration flash
- Descriptive alt text, semantic headings hierarchy
- Component-level metadata exports (title + description)
- Reusable layout to reduce duplicate markup

### Accessibility
- Reduced motion support via `useReducedMotion`
- Focusable interactive elements with visible text labels
- Proper aria attributes on theme toggle & external icon links
- Landmark structure: header / main / footer

### Scripts
```
pnpm dev      # Start local dev server
pnpm build    # Production build
pnpm start    # Run built app
pnpm lint     # Lint source
```

### Getting Started
1. Clone repository
2. Install dependencies: `pnpm install` (or `npm install` / `yarn`)
3. Run dev server: `pnpm dev` then visit http://localhost:3000
4. Adjust content (projects, experience) in `src/data` & components
5. Deploy (Vercel recommended): push to GitHub + import repo in Vercel dashboard

### Adding / Updating Experience
Edit `src/data/experience.json` (array order = vertical position). Keep keys consistent for TypeScript inference.

### Adding a Project
Add image to `public/images/projects/` → reference in a project component (or create a data file and map). Use `next/image` import for static optimization.

### Animations
- Framer Motion `AnimatePresence` keyed on pathname enables page transitions (extend by wrapping page root in a `motion.div` with exit/enter variants)
- Skill positions use `whileInView` for once-per-viewport reveal
- Timeline uses scroll progress with `useScroll` for dynamic scaling

### Potential Improvements / Roadmap
- Add sitemap + robots directives generation (if not already automated)
- Integrate MDX for Articles section
- Lighthouse budget + bundle analyzer integration
- i18n (Next.js built-in routing) for multilingual support


### Deployment Notes
- Ensure environment variables (if later added) are prefixed with NEXT_PUBLIC_ for client usage
- Leverage Vercel image optimization & edge network caching

### License
Personal portfolio source. You may reference structure & patterns, but please replace personal branding, content & assets before reuse.

### Author
Built by Ahmed Hany – Frontend Developer.

---
For suggestions or collaboration: open an issue or reach out via LinkedIn/GitHub.
