# QIC UI HTML, CSS, JS project

## Milestone 1
-[Login / Reset Password steps](/login/login.html)

-[Dashboard](/dashboard.html)
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

-[Badges Summary](/badges-summary.html)
  - Table-cards views modes switch.
  - Award badge flow using modals.

-[Logged in template](/templates/logged-in-page-template.html)
  - Footer and Header page template for logged-in users.

-[Logged out template](/templates/logged-out-page-template.html)
  - Footer and Header page template for logged-out users.

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

