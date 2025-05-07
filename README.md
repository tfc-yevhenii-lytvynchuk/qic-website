# QIC UI HTML, CSS, JS project

## Milestone 1
-[Login / Reset Password steps](/login/login.html)

-[Dashboard](/dashboard.html)

-[Badges Summary](/badges-summary.html)

## Description
Project showcasing pure html, css, js website wich can be used as template for .NET .asp pages, with some level of css configurability.

## Features
- Pure HTML, CSS, and JavaScript pages
- Customizable UI through configuration files:
  - Located in `assets/css/config.css`
  - Contains 3 example configurations
  - Switch between configurations by uncommenting different sections, then refresh the page.
  - Can be included in your pages using:
    ```html
    <link rel="stylesheet" href="assets/css/config.css">
    ```
  - config.css contains 3 versions in one file but it is possible to create separate files for each version and just change link href when including it on some page. Just be sure that structure(names of variables) is the same.

- To avoid managing/editing multiple css files for all pages in applicatio(in this demo its only 2 but can be much more) styles fow all pages are in one file called styles.css. This way blocks from one page can be copied into another if needed without looking what css must be copied too. This increases css sizes on all pages but this should not become an issue since bootstrap css classes are mostly used for styling the UI.
  

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

