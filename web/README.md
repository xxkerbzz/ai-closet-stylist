# AI Closet Stylist - Web Application

Next.js application for AI Closet Stylist wardrobe management platform.

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
web/
├── app/                    # Next.js App Router
│   ├── components/        # React components
│   ├── lib/               # Utility functions
│   ├── resources/         # Dynamic SEO content routes
│   └── page.tsx           # Homepage
├── public/                # Static assets
└── SEO Strategy/          # Content files (symlinked/relative)
```

## Environment Variables

Create `.env.local` for local development:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

For production, set in Vercel dashboard:
- `NEXT_PUBLIC_SITE_URL` = Your production domain

## Deployment

See `../DEPLOYMENT.md` for detailed Vercel deployment instructions.

## Content Management

Content files are loaded from `../SEO Strategy/content/` directory. The system:
- Automatically sets `lastUpdated` from file creation dates
- Supports pillar, subtopic, and PAA post templates
- Generates dynamic routes at `/resources/[...slug]`

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Content:** Markdown with gray-matter
- **Deployment:** Vercel
