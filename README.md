# Central Asia Tours - Static Design

A pure HTML, CSS, and vanilla JavaScript website for Central Asia Tours with static design implementation.

## Project Requirements

This project meets the following requirements:

1. **Pure Technologies**
   - Pure HTML5
   - Pure CSS3 (no frameworks like Bootstrap, Tailwind, etc.)
   - Vanilla JavaScript (no jQuery or other libraries)
   - No build tools or bundlers

2. **Static Design Implementation**
   - Fixed width layout (1920px) to maintain consistent design
   - Viewport settings to prevent zoom-related layout shifts
   - Text size adjust disabled to prevent browser scaling interference
   - Content remains visually stable when using Ctrl+/Ctrl- zoom
   - No micro-shifts, font jerks, or element repositioning during zoom
   - Adaptive display even with Firefox "Text Only" mode

3. **Windows Scaling Support**
   - Content displays consistently across different Windows display scaling (100%, 125%, 150%)
   - No background shrinking or popup shifting
   - No vertical scrollbar appearing at 150% scaling

## File Structure

```
central-asia-tours-static/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # Vanilla JavaScript functionality
└── README.md           # This file
```

## How to Run

1. Open the `index.html` file directly in any modern web browser
2. No server or build process required
3. All resources are self-contained

## Testing Static Design

### Browser Zoom Test (Ctrl+/Ctrl-) ⚠️ CRITICAL TEST
1. Open `index.html` in Chrome
2. Press `Ctrl+` 5-10 times to zoom in to 200%+
3. Press `Ctrl-` 5-10 times to zoom out
4. **Expected Result:** ZERO visual changes
   - ✅ Font sizes stay EXACTLY the same
   - ✅ Element positions stay EXACTLY the same
   - ✅ NO layout reflows or breaks
   - ✅ NO micro-movements or jerks
   - ✅ NO cards fading in/out
   - ✅ Page acts like a fixed 1920px image
   - ✅ Only a horizontal scrollbar appears to pan around
5. **If you see ANY changes, the test FAILS**

### Firefox Text-Only Mode Test
1. Open `index.html` in Firefox
2. Go to Settings → Language and Appearance
3. Enable "Only text" checkbox under Zoom
4. Verify that content remains properly adaptive and static

### Windows Display Scaling Test
1. Open Windows Settings → Display
2. Change "Scale and layout" to 125%
3. Open `index.html` and verify layout
4. Change to 150% and verify no vertical scrollbar appears
5. Verify background doesn't shrink and popups don't shift

## Features

### Navigation
- Fixed navigation bar with smooth scrolling
- Mobile-responsive hamburger menu
- Active link highlighting based on scroll position

### Sections
1. **Hero Section** - Full-screen hero with gradient overlay
2. **Why Choose Us** - Feature cards with icons
3. **Featured Destinations** - Image cards with hover effects
4. **Popular Tours** - Tour packages with pricing
5. **CTA Section** - Call-to-action with gradient background
6. **Footer** - Complete footer with links and contact info

### JavaScript Functionality
- Mobile menu toggle
- Smooth scrolling for anchor links
- Active navigation link on scroll
- Scroll reveal animations
- Back to top button
- Touch gesture prevention for static design
- Image hover effects

## Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Opera (latest)

## Technical Implementation Details

### Static Design Approach

1. **Fixed Width Container**
   ```css
   .container {
       width: 1920px;
       max-width: 1920px;
       min-width: 1920px;
   }
   ```

2. **Viewport Settings**
   ```html
   <meta name="viewport" content="width=1920, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
   ```

3. **Text Size Adjust Prevention**
   ```css
   html {
       -webkit-text-size-adjust: 100%;
       -moz-text-size-adjust: 100%;
       -ms-text-size-adjust: 100%;
       text-size-adjust: 100%;
   }
   ```

4. **Fixed Font Sizes**
   - All font sizes use absolute pixel values
   - No relative units (em, rem, %, vw, vh) for critical measurements
   - Consistent spacing throughout

## Customization

To customize the website:

1. **Colors**: Edit CSS variables or color values in `styles.css`
2. **Content**: Modify HTML content in `index.html`
3. **Functionality**: Add or modify JavaScript in `script.js`

## Notes

- Images are loaded from Unsplash CDN (external)
- To use local images, download them and update image paths in `index.html`
- The design is optimized for 1920px width displays
- Horizontal scrolling will appear on smaller screens to maintain static design

## License

This is a demonstration project for educational purposes.

---

**Created for static design requirements compliance**
