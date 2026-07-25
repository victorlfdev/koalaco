---
name: Koala & Co
description: Landing page for a marketing, sales, and technology agency targeting Brazilian local businesses
colors:
  bg: "#faf8f5"
  bg-alt: "#f0ece2"
  bg-card: "#ffffff"
  primary: "#4e652e"
  primary-dark: "#2f3d1c"
  primary-soft: "#e7ead9"
  text: "#1f2417"
  text-muted: "#5c624f"
  cream-on-dark: "#f4f1ea"
  line: "rgba(31, 36, 23, 0.12)"
  line-strong: "rgba(31, 36, 23, 0.22)"
typography:
  display:
    fontFamily: "var(--font-outfit), Outfit, sans-serif"
    fontWeight: 600
    letterSpacing: "-0.02em"
    lineHeight: 1.05
  body:
    fontFamily: "var(--font-inter), Inter, sans-serif"
    fontWeight: 400
    fontSize: "16px"
    lineHeight: 1.55
  heading:
    fontFamily: "var(--font-outfit), Outfit, sans-serif"
    fontWeight: 600
    letterSpacing: "-0.01em"
    lineHeight: 1.12
    color: "#1f2417"
rounded:
  sm: "10px"
  md: "18px"
  lg: "28px"
  full: "999px"
spacing:
  container: "1180px"
  container-pad: "24px"
  section-pad: "clamp(72px, 9vw, 140px)"
  gap-sm: "16px"
  gap-md: "24px"
  gap-lg: "56px"
motion:
  duration-fast: "0.25s"
  duration-base: "0.35s"
  duration-slow: "0.4s"
  easing-ease: "ease"
  easing-smooth: "cubic-bezier(0.22, 1, 0.36, 1)"
  easing-spring: "cubic-bezier(0.22, 1, 0.36, 1)"
---

# Overview

Koala & Co is a Brazilian marketing, sales, and technology agency. The visual identity is **earthy, warm, and grounded** — a nature-inspired palette that conveys trust without feeling corporate. The design prioritizes clarity and scanability: generous white space, strong typographic hierarchy, and a consistent card-based system.

# Colors

- **Background**: `#faf8f5` — warm cream, not white
- **Alternating sections**: `#f0ece2` — slightly darker cream for contrast breaks
- **Primary green**: `#4e652e` — the Koala green, used for CTAs, accents, icons
- **Primary dark**: `#2f3d1c` — deep green-black, used for dark surfaces and contrast
- **Primary soft**: `#e7ead9` — tinted background for skeletons and subtle highlights
- **Text**: `#1f2417` — near-black with warm undertone
- **Text muted**: `#5c624f` — secondary copy, descriptions
- **Lines**: `rgba(31, 36, 23, 0.12)` — borders, dividers
- **Lines strong**: `rgba(31, 36, 23, 0.22)` — active borders, focus states
- **Cream on dark**: `#f4f1ea` — text on dark green surfaces

# Typography

- **Display**: Outfit, 600 (semibold) — headings, logo, navigation
- **Body**: Inter, 400 (regular) — body copy, descriptions, list items
- **Headlines**: `clamp()` fluid sizing, tight tracking `-0.01em`, line-height `1.12`
- **Hero title**: `clamp(36px, 5.4vw, 64px)`, line-height `1.05`
- **Eyebrow**: 13px, uppercase, `0.08em` tracking, bold, primary green color
- **Section headings**: `clamp(30px, 4vw, 44px)`, line-height `1.12`

# Layout

- **Container**: 1180px max-width, 24px horizontal padding
- **Section padding**: `clamp(72px, 9vw, 140px)` vertical
- **Grid systems**: 2-column for problem/solution, 3-column for services, team cards; responsive collapse to 1-column below 880–980px
- **Hero**: 2-column grid (1.05fr / 0.95fr), collapses to single column
- **Method**: 4-column horizontal step track with connecting line; collapses to vertical stack on mobile
- **Portfolio carousel**: centered, max-width 1400px, offset with `translateX(-50%)` for horizontal overflow visibility

# Elevation & Depth

- **Cards**: 1px border `var(--color-line)`, `var(--radius-md)` rounding, no shadow by default
- **Hero visual frame**: `box-shadow: 0 30px 80px -40px rgba(47, 61, 28, 0.35)` — deep green shadow
- **Service card hover**: `translateY(-6px)` + green shadow `0 24px 50px -30px rgba(47, 61, 28, 0.4)`
- **Header scrolled**: `backdrop-filter: blur(10px)`, `rgba(250, 248, 245, 0.85)` background
- **Mobile menu**: `box-shadow: 0 28px 80px rgba(31, 36, 23, 0.12)`
- **No default shadows** on static cards — elevation is activated only on interaction

# Shapes

- **Small radius**: 10px — general UI elements
- **Medium radius**: 18px — cards, sections, mobile menu items
- **Large radius**: 28px — hero frames, CTA banner, carousel container
- **Full radius**: 999px — buttons, indicators, social icons (pill and circle shapes)

# Components

### Buttons
- **Primary**: green background `#4e652e`, cream text, hover → dark green + `translateY(-2px)`
- **Secondary**: transparent background, bordered, hover → green border + green text
- **Ghost**: cream-on-dark text, subtle border, hover → stronger border
- All buttons: pill shape, 14px 28px padding, 15px font, 600 weight, 8px gap for icons

### Cards
- White background, 1px border, 18px radius, 30–36px padding
- Inner icon containers: 46×46px, 12px radius, soft green background
- List items with dot bullet: 6px primary green circle

### Hero visual frame
- White card, 28px padding, 28px radius, heavy green shadow
- Skeleton placeholder: animated gradient pulse during loading

### Method step
- Number circle: 54px diameter, cream background, green border
- Active state: green fill, cream text
- Connecting line: 1.5px solid line across steps

### CTA banner
- Green background, 28px radius, 72px padding
- Flex layout with heading + action, wraps on mobile

### Footer
- Dark green background, 64px top padding
- 3-column link layout with 64px gap
- Social icons: 36×36px circle, subtle border

# Do's and Don'ts

**Do:**
- Use the cream background as the base; never use pure white for page backgrounds
- Keep green as the sole accent — one color story
- Preserve fluid typography with `clamp()` for responsive scaling
- Use 18px radius as the standard card radius
- Maintain the warm undertone in all text colors (avoid pure black)
- Animate with smooth easing (`cubic-bezier(0.22, 1, 0.36, 1)`) for a premium feel

**Don't:**
- Don't introduce new hues — the palette is strictly green/cream/earthy tones
- Don't use drop shadows as default card treatment — borders are the primary visual separator
- Don't use standard `ease-in-out` transitions — always use the project's custom easing
- Don't override the Outfit/Inter pairing with system fonts or new typefaces
- Don't use pure white borders — always use the rgba line tokens
- Don't add decorative gradients outside the skeleton state
