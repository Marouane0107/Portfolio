# Logo and Favicon Setup Guide

To display your logo in Google search results, you need to create these image files and place them in the `/public` folder:

## Required Files:

### 1. **logo.png** (512x512px)

- Your main logo/profile picture
- Square format (512x512 pixels)
- PNG format with transparent background
- This will appear in Google search results

### 2. **favicon-32x32.png** (32x32px)

- Small version of your logo
- For browser tabs and bookmarks

### 3. **favicon-16x16.png** (16x16px)

- Tiny version of your logo
- For browser tabs

### 4. **apple-touch-icon.png** (180x180px)

- For iOS devices when bookmarked
- Square format

### 5. **og-image.jpg** (1200x630px)

- Social media sharing image
- Include your name and title
- Professional photo or logo

## Quick Creation Options:

### Option A: Use Existing favicon.svg

If your `favicon.svg` looks good, you can:

1. Open it in a design tool (Figma, Canva, etc.)
2. Export as PNG in the required sizes
3. Save them in `/public` folder

### Option B: Create New Logo

1. Use Canva, Figma, or Adobe tools
2. Create a professional logo/headshot
3. Export in all required sizes

### Option C: Use Online Tools

- favicon.io - Generate all sizes from one image
- realfavicongenerator.net - Complete favicon package

## File Placement:

```
/public/
  ├── logo.png (512x512)
  ├── favicon-32x32.png
  ├── favicon-16x16.png
  ├── apple-touch-icon.png
  ├── og-image.jpg
  └── site.webmanifest
```

## After Adding Files:

1. Commit and push changes
2. Wait for Vercel deployment
3. Test: https://aouzal.dev/logo.png
4. Request re-indexing in Google Search Console
5. Logo should appear in search results within 1-2 weeks

## Pro Tips:

- Use high-quality, professional images
- Keep logos simple and recognizable at small sizes
- Ensure good contrast for visibility
- Use consistent branding across all images
