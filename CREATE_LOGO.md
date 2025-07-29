# Create PNG Logo Script

Since you have a nice SVG logo with "M", here's how to convert it to the required PNG formats:

## Option 1: Online Conversion (Easiest)

1. Go to https://convertio.co/svg-png/
2. Upload your `/public/favicon.svg` file
3. Download as PNG
4. Resize to different dimensions using:
   - https://resizeimage.net/
   - Or any image editor

## Option 2: Command Line (if you have ImageMagick)

Run these commands in your terminal:

```bash
# Convert SVG to PNG at different sizes
convert -background transparent public/favicon.svg -resize 512x512 public/logo.png
convert -background transparent public/favicon.svg -resize 32x32 public/favicon-32x32.png
convert -background transparent public/favicon.svg -resize 16x16 public/favicon-16x16.png
convert -background transparent public/favicon.svg -resize 180x180 public/apple-touch-icon.png
```

## Option 3: Manual Creation

Your current SVG has:

- Blue gradient background
- White "M" letter
- Rounded corners
- Clean, professional look

You can recreate this in:

- Canva (search "logo maker")
- Figma (free design tool)
- Adobe Creative Suite

## Quick Fix

For now, I'll create a temporary solution. You can replace these later with higher quality versions.
