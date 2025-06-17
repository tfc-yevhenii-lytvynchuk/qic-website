# QIC Website Sitemap

## Overview
This is a comprehensive sitemap for the QIC (Quality Incentive Center) website, a reward and points management system with shopping capabilities.

## Site Structure

### 1. Authentication & Entry Points
- **`login.html`** - Main login page
  - Links to: `dashboard.html` (after login), `login-reset-request.html`
- **`login-reset-request.html`** - Password reset request
- **`login-reset-confirm.html`** - Password reset confirmation
- **`login-reset-success.html`** - Password reset success message
- **`login-reset.html`** - Password reset form

### 2. Main Dashboard & Navigation
- **`dashboard.html`** - Main dashboard/homepage (after login)
  - Central hub with navigation to all other sections
  - Shows user points, check-in functionality, progress tracking
  - Links to all major sections

### 3. User Profile & Settings
- **`profile-settings.html`** - User profile configuration and account settings

### 4. Points & Rewards System

#### Points Management
- **`points-summary.html`** - Overview of user points and transactions
- **`points-deposit-card-history.html`** - History of deposit cards used
- **`points-add-new-card.html`** - Add new payment/deposit cards

#### Virtual Cards & Social Features
- **`points-virtual-card-selector.html`** - Select virtual card templates
- **`points-virtual-card-configurator.html`** - Customize virtual cards

#### Gamification
- **`quizzes.html`** - Interactive quizzes for earning points
- **`leaderboard.html`** - User rankings and competitive elements
- **`badges-summary.html`** - User achievements and badges
  - Parameter: `?award-badge=true` - Award badge functionality

### 5. Shopping System

#### Main Shopping
- **`shop-main.html`** - Main shopping catalog and homepage
- **`shop-category.html`** - Product categories and filtering
- **`shop-item.html`** - Individual product details

#### Shopping Cart & Orders
- **`shop-cart-details.html`** - Shopping cart contents and management
- **`shop-checkout.html`** - Checkout process and payment
- **`shop-orders-history.html`** - Past orders and order tracking
- **`shop-wishlist.html`** - Saved items and wishlists

### 6. Template Files (Development)
- **`logged-in-page-template.html`** - Template for authenticated pages
- **`logged-out-page-template.html`** - Template for public pages

## Navigation Structure

### Main Navigation Menu
The site uses a horizontal navigation bar with the following main sections:

1. **Dashboard** - Links to `dashboard.html`
2. **Shop** - Dropdown with categories:
   - A Digital World (Camcorders, Computers, DVD Players, Game Consoles)
   - All About You (Apparel, Eyewear, Jewelry, Fragrances)
   - Personal section (My Orders, My Wishlist)
3. **Points** - Dropdown with:
   - General (Points Summary, Quizzes, Ranking)
   - Points Actions (Deposit Points, Award Points)  
   - Cards (Deposit Cards, Instant Rewards)
4. **Social** - Dropdown with:
   - Badges (Badges Summary, Award a Badge)
   - User Actions (Nominate User)
   - Cards (Virtual Cards)

### User Controls
- **Notifications** - Bell icon for alerts
- **Profile Menu** - Dropdown with:
  - Profile Settings
  - Program Guide
  - Logout
- **Shopping Cart** - Direct link to cart with item count
- **Points Display** - Current user points shown in header

## User Flow Patterns

### Authentication Flow
1. `login.html` → `dashboard.html` (successful login)
2. `login.html` → `login-reset-request.html` → `login-reset-confirm.html` → `login-reset-success.html` (password reset)

### Shopping Flow
1. `dashboard.html` → `shop-main.html` → `shop-category.html` → `shop-item.html`
2. `shop-item.html` → `shop-cart-details.html` → `shop-checkout.html`
3. Order history: `shop-orders-history.html`
4. Wishlist management: `shop-wishlist.html`

### Points & Rewards Flow
1. Points overview: `points-summary.html`
2. Earning points: `quizzes.html`, check-in from dashboard
3. Card management: `points-deposit-card-history.html` → `points-add-new-card.html`
4. Social features: `points-virtual-card-selector.html` → `points-virtual-card-configurator.html`

### Gamification Flow
1. View progress: `dashboard.html` → `leaderboard.html`
2. Achievements: `badges-summary.html`
3. Competitive elements: `leaderboard.html` for rankings

## Key Features
- **Responsive Design** - Mobile-friendly navigation and layouts
- **Points System** - Integrated rewards and incentive tracking
- **E-commerce** - Full shopping cart and checkout functionality
- **Gamification** - Badges, leaderboards, and quizzes
- **Social Features** - Virtual cards and user nominations
- **Account Management** - Profile settings and card management

## Technical Notes
- All pages share common navigation structure
- Bootstrap framework used for styling
- JavaScript interactions for forms and navigation
- Search functionality integrated in navigation
- Breadcrumb navigation for deep pages 