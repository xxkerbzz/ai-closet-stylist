# AI Closet Stylist

AI-powered wardrobe management app that scans wardrobes and suggests outfits, resale prices, and donation recommendations.

## Project Structure

```
ai-closet-stylist/
├── Project Files/
│   └── project-document.md        # PRD
├── SEO Strategy/
│   ├── 01. Topical Map.md         # Topic hierarchy
│   ├── 02. Core Pages.yaml        # Commercial pages
│   ├── 03. Supporting Pages.yaml  # SEO content silos
│   ├── Build Progress.md          # Build tracking
│   └── content/                   # Markdown content files
└── web/                           # Next.js project
    ├── app/                       # App Router pages
    ├── public/                    # Static assets
    └── package.json               # Dependencies
```

## Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Setup

1. Navigate to the web directory:
```bash
cd web
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## Deployment to Vercel

### Option 1: Deploy from Root (Recommended)

1. Connect your repository to Vercel
2. Set the root directory to `web` in Vercel project settings
3. Vercel will automatically detect Next.js and deploy

### Option 2: Deploy from Web Directory

1. Navigate to the `web` directory
2. Run `vercel` command or connect via Vercel dashboard
3. Ensure content directory path is correctly resolved

### Environment Variables

Set the following in Vercel dashboard:

- `NEXT_PUBLIC_SITE_URL` - Your production domain (e.g., `https://aiclosetstylist.com`)

### Build Settings

- **Framework Preset:** Next.js
- **Root Directory:** `web` (if deploying from root)
- **Build Command:** `npm run build`
- **Output Directory:** `.next`

## Content Management

Content files are stored in `SEO Strategy/content/` and are automatically loaded by the Next.js app. The content system:

- Automatically sets `lastUpdated` dates from file creation timestamps
- Supports pillar, subtopic, and PAA post templates
- Generates dynamic routes at `/resources/[...slug]`

## Features

- ✅ Automated wardrobe scanning with computer vision
- ✅ AI-powered outfit recommendations
- ✅ Resale price estimation
- ✅ Donation recommendations
- ✅ Digital closet organization
- ✅ Style analytics

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Content:** Markdown with gray-matter
- **Deployment:** Vercel

## License

Private project - All rights reserved
