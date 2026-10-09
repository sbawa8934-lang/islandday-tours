# MILESTONE 1: CONVERT EXISTING HTML TO NEXT.JS

Project path:
C:\Users\ACER\Downloads\islandday-site

The existing project is already designed according to the approved Figma design. The HTML/CSS frontend is already created.

Your job in this milestone is ONLY to convert the existing HTML/CSS/JS implementation into a clean, production-quality Next.js + React + TypeScript frontend.

IMPORTANT:
Do NOT redesign the website.
Do NOT change the Figma-approved UI.
Do NOT build the admin dashboard.
Do NOT build the CMS.
Do NOT add a database.
Do NOT integrate Stripe.
Do NOT build real payment processing.
Do NOT build real booking APIs.
Do NOT build authentication.

Those will be separate milestones.

## 1. FIRST AUDIT THE PROJECT

Before modifying anything, inspect the complete project.

Read:
- README.md
- all HTML files
- CSS files
- JavaScript files
- data files
- assets
- existing booking/demo functionality

Understand how the current website works before converting it.

Do not blindly rewrite the project.

## 2. CONVERT TO NEXT.JS

Use:

- Next.js
- React
- TypeScript

Create a clean App Router structure.

Convert the existing pages into proper routes, including:

- Home
- Tours
- Tour Detail
- Checkout
- Confirmation
- Compare
- Guide
- Departure
- Stories
- Contact

For example:

app/
  page.tsx
  tours/page.tsx
  tour/[slug]/page.tsx
  checkout/page.tsx
  confirmed/page.tsx
  compare/page.tsx
  guide/page.tsx
  departure/page.tsx
  stories/page.tsx
  contact/page.tsx

Preserve the current URL/query behavior where necessary.

## 3. DO NOT CHANGE THE DESIGN

The existing HTML is already based on the Figma design.

The current HTML implementation is the visual source of truth.

Keep:

- colors
- typography
- spacing
- layouts
- buttons
- cards
- navigation
- mobile design
- desktop design
- booking UI
- galleries
- filters
- footer
- header

Do not replace the design with a generic Next.js design.

The goal is:

EXISTING HTML → NEXT.JS

NOT:

EXISTING HTML → NEW DESIGN

## 4. CREATE REUSABLE COMPONENTS

Convert repeated UI into reusable React components.

Examples:

- Header
- Footer
- MobileMenu
- Hero
- TourCard
- TourGrid
- TourFilters
- TourFinder
- Gallery
- Lightbox
- Pricing
- Itinerary
- BookingWidget
- FAQ
- Breadcrumbs
- WhatsAppButton
- CurrencySwitcher

Only create components where they are actually reusable.

Do not over-engineer.

## 5. MOVE STATIC DATA TO TYPESCRIPT

If the current project has data.js or similar files, convert the data into clean TypeScript files.

For example:

data/
  tours.ts
  destinations.ts
  reviews.ts
  hotels.ts
  blog.ts
  site.ts

Create proper TypeScript types/interfaces.

Do not use `any` unnecessarily.

Do NOT introduce a database yet.

Static/local data is fine for this milestone.

## 6. PRESERVE EXISTING DEMO BOOKING FUNCTIONALITY

The current frontend booking functionality should continue working as a demo.

Preserve existing functionality such as:

- Date selection
- Guest selection
- Adult/child/infant selection
- Price calculation
- Hotel pickup
- Pickup zone surcharge
- Hotel autocomplete
- Booking UI
- Checkout UI
- Validation
- Confirmation page
- Booking reference demo
- WhatsApp booking/enquiry
- Mobile booking bar
- Mobile booking sheet

These remain frontend/demo functionality for now.

Do NOT connect them to real payment or backend services.

## 7. PRESERVE OTHER INTERACTIONS

Keep existing functionality such as:

- Mobile navigation
- Tour filtering
- Sorting
- Search
- Wishlist
- Share/copy link
- Gallery/lightbox
- FAQ accordion
- Currency switcher
- Reviews pagination
- Compare functionality
- WhatsApp links
- Newsletter UI

Do not remove functionality just because it is currently static/demo.

## 8. CURRENCY

Preserve the existing currency switcher if present.

Support the currencies already implemented in the current project, including:

THB
USD
EUR
GBP
INR

Preserve localStorage behavior where applicable.

## 9. SEO FOUNDATION

Implement basic Next.js metadata for each page.

Include where appropriate:

- title
- description
- canonical
- Open Graph
- social metadata

Do not create fake business information.

Do not spend this milestone building the complete SEO/schema system.

## 10. PERFORMANCE

Keep the application lightweight.

Use:

- Server Components by default
- Client Components only when required
- Next/Image where appropriate
- Minimal dependencies
- No unnecessary JavaScript
- Proper static rendering where possible

Do not over-engineer.

## 11. ACCESSIBILITY

Preserve existing accessibility.

Check:

- semantic HTML
- buttons and links
- keyboard navigation
- focus states
- labels
- ARIA where needed
- mobile accessibility
- reduced-motion support

Do not introduce accessibility regressions.

## 12. DO NOT BUILD THESE YET

Do NOT implement:

- Admin dashboard
- WordPress-style dashboard
- CMS
- Database
- Real booking backend
- Real availability system
- Stripe
- Stripe webhook
- Payment processing
- Booking emails
- Customer accounts
- Authentication
- Real booking management
- External booking APIs

These are separate milestones.

## 13. TEST EVERYTHING

After conversion:

- Run the project locally
- Test every route
- Test desktop
- Test mobile
- Test tablet
- Test navigation
- Test filters
- Test tour pages
- Test booking demo
- Test checkout demo
- Test confirmation page
- Test currency switcher
- Test WhatsApp
- Test gallery
- Test forms
- Check browser console
- Run TypeScript checks
- Run production build

Fix all errors.

## 14. VISUAL QA

Compare the new Next.js version against the existing HTML version.

The Next.js version must remain visually very close to the existing implementation.

Pay special attention to:

- Header
- Hero
- Navigation
- Tour cards
- Tour grids
- Filters
- Tour detail
- Gallery
- Booking widget
- Checkout
- Footer
- Mobile layout

Do not consider the milestone complete if the design has noticeably changed.

## 15. FINAL RESULT

At the end, I should have:

- Clean Next.js project
- React
- TypeScript
- All current pages converted
- Reusable components
- Existing frontend functionality preserved
- Existing demo booking flow preserved
- Responsive design preserved
- Basic metadata
- Clean architecture
- No unnecessary dependencies
- Successful production build

Also give me a short summary of:

1. What you converted
2. Routes created
3. Components created
4. Functionality preserved
5. Any issues found
6. What should be done in Milestone 2

IMPORTANT:

Do not start Milestone 2.

Complete ONLY the Next.js conversion first.

Project:
C:\Users\ACER\Downloads\islandday-site