# Balance Community Section - Portable Component

This is an extracted, standalone version of the "Join the Balance Community" section from the BalanX website. It's designed to be easily integrated into any React/Next.js project.

## Features

- ✨ **Beautiful animations** with GSAP
- 🎨 **Gradient text effects** and modern styling
- 📱 **Responsive design** for all devices
- ⚡ **Customizable content** via props
- 🔧 **Easy integration** with any project
- 🎯 **Form validation** and submission handling

## Quick Start

### 1. Install Dependencies

```bash
npm install gsap
# or
yarn add gsap
# or
pnpm add gsap
```

### 2. Add Required Fonts (Optional)

Add these fonts to your project for the best visual experience:

```html
<!-- In your HTML head or Next.js layout -->
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Crimson+Text:wght@400;600&display=swap" rel="stylesheet">
```

### 3. Copy the Component

Copy `balance-community-section.tsx` to your project's components folder.

### 4. Use the Component

```tsx
import BalanceCommunitySection from './components/balance-community-section'

export default function MyPage() {
  const handleSubmit = async (email: string) => {
    // Your submission logic here
    console.log('Email submitted:', email)
  }

  return (
    <div>
      <h1>My Website</h1>
      <BalanceCommunitySection onSubmit={handleSubmit} />
    </div>
  )
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `onSubmit` | `(email: string) => void` | - | Callback function when form is submitted |
| `title` | `string` | "Join the Balance Community" | Main heading text |
| `subtitle` | `string` | "Be the first to experience..." | Subtitle text |
| `buttonText` | `string` | "Reserve Now" | Button text |
| `placeholderText` | `string` | "Enter your email" | Email input placeholder |
| `disclaimerText` | `string` | "No payment required..." | Disclaimer text |
| `className` | `string` | "" | Additional CSS classes |

## Examples

### Default Usage
```tsx
<BalanceCommunitySection onSubmit={handleSubmit} />
```

### Customized Content
```tsx
<BalanceCommunitySection
  title="Join Our Newsletter"
  subtitle="Stay updated with the latest wellness tips and exclusive offers."
  buttonText="Subscribe Now"
  placeholderText="Your email address"
  disclaimerText="We respect your privacy. Unsubscribe at any time."
  onSubmit={handleSubmit}
  className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
/>
```

### Minimal Version
```tsx
<BalanceCommunitySection
  title="Get Early Access"
  subtitle="Be among the first to experience our revolutionary product."
  buttonText="Join Waitlist"
  onSubmit={handleSubmit}
/>
```

## Styling

The component uses Tailwind CSS classes. If you're not using Tailwind, you'll need to:

1. Install Tailwind CSS
2. Or extract the CSS classes and convert them to your preferred styling solution

### Required Tailwind Classes
```css
/* Add these to your CSS if not using Tailwind */
.bg-gradient-to-br { /* background gradient */ }
.from-orange-50 { /* gradient start color */ }
.to-amber-600 { /* gradient end color */ }
.bg-clip-text { /* text background clip */ }
.text-transparent { /* transparent text */ }
/* ... and many more */
```

## GSAP Setup

The component requires GSAP for animations. Make sure to:

1. Install GSAP: `npm install gsap`
2. Import ScrollTrigger plugin in your main layout:

```tsx
// In your main layout or app file
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}
```

## Customization

### Changing Colors
The component uses orange/amber gradients. To change colors:

1. Update the gradient classes in the component
2. Modify the GSAP animation colors
3. Update the border colors for form inputs

### Adding More Fields
To add more form fields (like name, phone, etc.):

1. Add new state variables
2. Add new input fields to the form
3. Update the `onSubmit` callback to handle additional data

### Custom Animations
The component uses GSAP for animations. You can:

1. Modify the animation parameters in the `useEffect`
2. Add new animation triggers
3. Change the timing and easing functions

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Requires JavaScript enabled
- CSS Grid and Flexbox support required

## License

This component is extracted from the BalanX website. Use it according to your project's licensing requirements.

## Support

For questions or issues with this component, please refer to the original project or create an issue in your project repository. 