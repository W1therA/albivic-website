# Albivic Construction Website

Marketing site for **Albivic Construction** — steel buildings, design-build shops, and community facilities across Western Canada and the North.

Inspired by [AllRotaru Construction](https://www.allrotaru.ca/) with video backgrounds, scroll animations, and a full Home / Gallery / About / Contact structure.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact form

1. Create a form at [Formspree](https://formspree.io)
2. Copy `.env.example` to `.env.local`
3. Set `NEXT_PUBLIC_FORMSPREE_ID=your_form_id`

Without an ID, the form shows a success state in demo mode (no email is sent).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server (Turbopack) |
| `npm run build` | Production build |
| `npm start` | Serve production build |

## Assets

- Project photos: `public/images/projects/`
- Stock videos (Pexels): `public/videos/` — see `public/videos/ATTRIBUTION.md`
- Source portfolio PDF and original pics remain in the project root / `pics/`

## Update contact details

Edit `lib/content.ts` — phone, email, location, services, FAQ, and project metadata.
