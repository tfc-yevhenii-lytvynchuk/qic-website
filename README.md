# QIC UI HTML, CSS, JS project


## Description
Project showcasing pure html, css, js website wich can be used as template for .NET .asp pages, with some level of css configurability.

## Features
- Pure HTML, CSS, and JavaScript pages
- Customizable UI through configuration files:
  - Located in `assets/css/config.css`
  - Contains 2 example configurations
  - Switch between configurations by uncommenting different sections, then refresh the page.
  - Can be included in your pages using:
    ```html
    <link rel="stylesheet" href="assets/css/config.css">
    ```
  - config.css contains 2 versions in one file but it is possible to create separate files for each version and just change link href when including it on some page, or use 1 file when building different versions by changing variable values. Just be sure that structure(names of variables) is the same.
  - Each page imports styles fro, global `assets/css/styles.css` file. But styles that are only related to the page in question are defined in <style> tag of <head> of the page.

## Technologies Used

### Bootstrap
> **Note**: Bootstrap files should not be modified to avoid unexpected behaviors. And should be included on all pages.

Required files for proper UI functionality:
- CSS:
  - `assets/css/bootstrap.min.css`
  - `assets/fonts/bootstrap-icons.css`
- JavaScript:
  - `assets/js/bootstrap-bundle.min.js`

Documentation: [Bootstrap v5.3](https://getbootstrap.com/docs/5.3/getting-started/introduction/)

### Bootstrap icons
> **Note**: To reduce assets folder and size of html templates - Free, high quality, open source icon library with over 2,000 icons is used

Documentation: [Bootstrap v5.3](https://icons.getbootstrap.com/?q=home#usage)

### Security Headers
> **Note**: These security headers are included in all pages for enhanced security.

```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' https: data:;">
<meta http-equiv="X-Content-Type-Options" content="nosniff">
<meta name="referrer" content="strict-origin-when-cross-origin">
```

These headers provide:
- Content Security Policy (CSP): Restricts resource loading to same origin, with exceptions for inline scripts/styles and HTTPS images
- X-Content-Type-Options: Prevents MIME type sniffing
- Referrer Policy: Controls how much referrer information is sent with requests

### Datepicker.js
> **Note**: A lightweight, dependency-free date picker library used for date input fields.

Required files for proper date picker functionality:
- CSS:
  - `assets/css/datepicker.material.css`
- JavaScript:
  - `assets/js/datepicker.js`

Documentation: [Datepicker.js](https://wwilsman.github.io/Datepicker.js/)

Features:
- Lightweight and dependency-free
- Material Design theme
- Customizable date selection
- Support for date ranges
- Mobile-friendly interface
- Dashboard
  - Customizable layout through CSS variables in config.css:
    - Layout Order Control:
      ```css
      --dashboard-reward-program-order: <value: number>;      /* Controls order of reward program section */
      --dashboard-personalized-offers-order: <value: number>; /* Controls order of personalized offers section */
      --dashboard-hot-tasks-order: <value: number>;           /* Controls order of hot tasks section */
      --dashboard-summary-order: <value: number>;             /* Controls order of summary section */
      --dashboard-your-quizes-order: <value: number>;         /* Controls order of quizzes section */
      ```
    - Summary Section Card Ordering:
      ```css
      --dashboard-summary-section-ranking-order: <value: 0 or 1>;        /* Controls ranking card position relative to progress */
      --dashboard-summary-section-badges-order: <value: 0 or 1>;         /* Controls badges card position relative to rest of section*/
      --dashboard-summary-section-instant-reward-order: <value: 0 or 1>; /* Controls instant reward card position relative to progres/ranking block */
      ```
    - Usage:
      1. Open `assets/css/config.css`
      2. Modify the order values (lower numbers appear first)
      3. Set to 0 to move a section before its siblings
      4. Refresh the page to see changes 

### Range Slider Component
> **Note**: A custom, reusable dual-handle range slider component for filtering by numeric ranges (price, points, etc.).

Required files for proper range slider functionality:
- CSS:
  - `assets/css/range-input.css`
- JavaScript:
  - `assets/js/input-range.js`

#### Features:
- **Dual-handle slider**: Select minimum and maximum values
- **Number inputs**: Manual value entry with automatic synchronization
- **Drag functionality**: Drag the range bar to move both handles simultaneously
- **Form integration**: Proper form reset support
- **Multiple instances**: Support for multiple independent sliders on same page
- **Customizable ranges**: Configure min/max values and initial state
- **Responsive design**: Works on desktop and mobile devices

#### HTML Structure:
```html
<div class="qic-range-slider" id="unique-slider-id">
  <input type="number" class="min-price" name="range-min"/>
  <input type="number" class="max-price" name="range-max"/>
  <div class="qic-range-slider-range">
    <input type="range" class="min-input"/>
    <input type="range" class="max-input"/>
    <div class="qic-range-slider-slider">
      <div class="qic-range-slider-slider-progress"></div>
    </div>
  </div>
</div>
```

#### JavaScript Initialization:
```javascript
// Initialize a range slider
initRangeSlider({
  containerId: 'unique-slider-id',  // Required: ID of the container element
  min: 0,                          // Optional: Minimum value (default: 0)
  max: 9999,                       // Optional: Maximum value (default: 9999)
  initialMin: 0,                   // Optional: Initial minimum value (default: min)
  initialMax: 5000                 // Optional: Initial maximum value (default: max)
});
```

#### Usage Examples:

**Price Range Filter:**
```javascript
initRangeSlider({
  containerId: 'price-filter',
  min: 0,
  max: 10000,
  initialMin: 100,
  initialMax: 5000
});
```

**Points Range Filter:**
```javascript
initRangeSlider({
  containerId: 'points-filter',
  min: 100,
  max: 5000,
  initialMin: 500,
  initialMax: 3000
});
```

#### CSS Classes:
- `.qic-range-slider` - Main container (requires unique ID)
- `.min-price`, `.max-price` - Number input fields
- `.min-input`, `.max-input` - Range input elements
- `.qic-range-slider-slider-progress` - Visual progress bar
- `.qic-range-slider-range` - Range inputs container
- `.qic-range-slider-slider` - Slider track container

#### Form Integration:
- Automatically detects parent form and handles reset events
- Restores initial values when form is reset
- Updates visual state properly after reset
- Multiple sliders in same form work independently

#### Browser Support:
- Modern browsers supporting HTML5 range inputs
- CSS Grid and Flexbox support required
- Touch events supported for mobile devices