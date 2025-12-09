# Vercel Deployment Guide

## Quick Deploy

### Option 1: Deploy from Root (Recommended)

1. **Connect Repository to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your Git repository
   - Vercel will auto-detect Next.js

2. **Configure Project Settings**
   - **Root Directory:** `web`
   - **Framework Preset:** Next.js
   - **Build Command:** `npm run build` (auto-detected)
   - **Output Directory:** `.next` (auto-detected)
   - **Install Command:** `npm install` (auto-detected)

3. **Set Environment Variables**
   - Go to Project Settings → Environment Variables
   - Add: `NEXT_PUBLIC_SITE_URL` = `https://yourdomain.com`
   - For preview deployments, Vercel automatically sets `VERCEL_URL`

4. **Deploy**
   - Click "Deploy"
   - Vercel will build and deploy automatically

### Option 2: Deploy from Web Directory

If you prefer to deploy from the `web` directory:

1. Navigate to `web` folder in terminal
2. Run `vercel` command
3. Follow prompts
4. Ensure content directory path is correctly resolved

## Environment Variables

### Required

- `NEXT_PUBLIC_SITE_URL` - Your production domain
  - Example: `https://aiclosetstylist.com`
  - Used for canonical URLs, sitemaps, and structured data

### Optional

- `VERCEL_URL` - Automatically set by Vercel (don't set manually)
  - Used as fallback if `NEXT_PUBLIC_SITE_URL` is not set

## Build Configuration

The project uses Next.js 16 with:
- **Output:** `standalone` (optimized for Vercel)
- **Image Optimization:** AVIF and WebP formats
- **Static Generation:** All content pages are statically generated

## Content Directory

The content directory (`SEO Strategy/content/`) must be accessible during build. The path resolution:

- Development: `../SEO Strategy/content` (relative to `web/app`)
- Production: Resolved from project root

If you encounter content loading issues:

1. Verify `SEO Strategy/content/` exists in repository
2. Check that content files are committed to Git
3. Ensure path in `site-config.ts` is correct

## Troubleshooting

### Build Fails: Content Directory Not Found

**Error:** `Content directory not found: ...`

**Solution:**
1. Verify `SEO Strategy/content/` exists in repository
2. Check `.gitignore` doesn't exclude content files
3. Ensure content directory path in `site-config.ts` is correct

### Build Fails: Module Not Found

**Error:** `Cannot find module 'gray-matter'` or similar

**Solution:**
1. Ensure `package.json` includes all dependencies
2. Run `npm install` in `web` directory
3. Verify `node_modules` is not in `.gitignore` (it shouldn't be)

### Sitemap Shows Wrong URLs

**Error:** Sitemap URLs use `localhost` or wrong domain

**Solution:**
1. Set `NEXT_PUBLIC_SITE_URL` environment variable in Vercel
2. Redeploy after setting environment variable
3. Check sitemap at `/sitemap.xml` after deployment

### Images Not Loading

**Solution:**
1. Ensure images are in `web/public/` directory
2. Use Next.js Image component for optimization
3. Check image paths are relative to `public/`

## Performance Optimization

The project is optimized for Vercel with:

- ✅ Static generation for all pages
- ✅ Image optimization (AVIF/WebP)
- ✅ Standalone output mode
- ✅ Automatic code splitting
- ✅ Edge-ready configuration

## Monitoring

After deployment:

1. Check build logs in Vercel dashboard
2. Test sitemap: `https://yourdomain.com/sitemap.xml`
3. Test HTML sitemap: `https://yourdomain.com/sitemap`
4. Verify all pages load correctly
5. Check structured data with Google Rich Results Test

## Custom Domain

1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions
4. Update `NEXT_PUBLIC_SITE_URL` to match custom domain
5. Redeploy

## Preview Deployments

Vercel automatically creates preview deployments for:
- Pull requests
- Feature branches

Preview URLs use `VERCEL_URL` environment variable automatically.
