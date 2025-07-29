# Domain Setup Guide for aouzal.dev

## Steps to Deploy Your Portfolio to aouzal.dev

### 1. Build Your Portfolio

```bash
npm run build
```

### 2. Choose a Hosting Platform

Here are the best options for hosting your React portfolio:

#### Option A: Vercel (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Sign up/login with GitHub
3. Import your portfolio repository
4. In project settings, add your custom domain: `aouzal.dev`
5. Configure DNS settings (see DNS section below)

#### Option B: Netlify

1. Go to [netlify.com](https://netlify.com)
2. Sign up/login with GitHub
3. Deploy from GitHub repository
4. Add custom domain in site settings
5. Configure DNS settings

#### Option C: GitHub Pages + Custom Domain

1. Enable GitHub Pages in repository settings
2. Add `aouzal.dev` as custom domain
3. Configure DNS settings

### 3. DNS Configuration

Point your domain to your hosting provider:

#### For Vercel:

- Add CNAME record: `www` → `cname.vercel-dns.com`
- Add A record: `@` → `76.76.19.19`

#### For Netlify:

- Add CNAME record: `www` → `your-site-name.netlify.app`
- Add A record: `@` → `75.2.60.5`

### 4. SSL Certificate

Most hosting platforms provide free SSL certificates automatically.

### 5. Google Search Console Setup

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property for `aouzal.dev`
3. Verify ownership using HTML meta tag or DNS
4. Submit your sitemap: `https://aouzal.dev/sitemap.xml`

### 6. Google Analytics (Optional)

1. Create Google Analytics account
2. Add tracking code to your website
3. Monitor traffic and user behavior

### 7. Performance Optimization

- Enable GZIP compression
- Use CDN for static assets
- Optimize images
- Minify CSS/JS (already handled by Vite build)

## File Structure After Build

```
dist/
├── index.html
├── sitemap.xml
├── robots.txt
├── favicon.svg
├── assets/
│   ├── index-[hash].css
│   └── index-[hash].js
└── public files...
```

## Environment Variables

If you have any API keys or sensitive data, make sure to:

1. Use environment variables
2. Add them to your hosting platform's environment settings
3. Never commit `.env` files to git

## Monitoring

- Set up uptime monitoring
- Monitor Core Web Vitals
- Track search rankings
- Monitor site speed

## Next Steps After Deployment

1. Submit to Google Search Console
2. Create social media profiles with consistent branding
3. Build backlinks through networking and content
4. Regularly update your portfolio with new projects
5. Monitor and improve SEO performance
