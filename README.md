# UserPool - Random User Listing

A modern web application that fetches and displays random users from the FreeAPI in an elegant, responsive interface with dark mode support.

## Features

✨ **Highlights:**
- 🎨 **Beautiful UI** built with shadcn/ui components
- 🌓 **Dark/Light Mode Toggle** with persistent theme switching
- 📱 **Fully Responsive Design** - optimized for mobile, tablet, and desktop
- 🔄 **Real-time Data Fetching** from FreeAPI
- 📊 **Tabbed Interface** - General and Personal information tabs
- 🎯 **Type-Safe** development with TypeScript
- ⚡ **Lightning Fast** powered by Vite

## Tech Stack

- **Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **State Management:** React Hooks (useState, useEffect)

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- Bun (latest version) - [Install Bun](https://bun.sh)

### Installation

1. Clone or navigate to the project directory
2. Install dependencies:
   ```bash
   bun install
   ```

3. Start the development server:
   ```bash
   bun run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── components/
│   ├── AppBody.tsx          # Main card display component
│   ├── custom/
│   │   └── Date.tsx         # Date formatting component
│   ├── icons/
│   │   ├── MapPinIcon.tsx   # Location icon
│   │   ├── lucide-*.tsx     # Other custom icons
│   └── ui/                  # shadcn/ui components
├── App.tsx                  # Main app with header and theme toggle
├── main.tsx                 # Entry point
├── index.css               # Global styles & theme definitions
└── lib/
    └── utils.ts            # Utility functions
```

## Available Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run preview` - Preview production build locally
- `bun run lint` - Run ESLint checks

## API Reference

The app fetches random users from:
```
https://api.freeapi.app/api/v1/public/randomusers
```

### Response Structure
- **User Information:** Name, email, phone, location
- **Avatar:** Profile picture (thumbnail)
- **Date of Birth:** Age and formatted date
- **Registration:** Account creation date
- **Location Details:** City, country, postcode, coordinates

## Features Usage

### Theme Toggle
Click the Sun/Moon icon in the header to switch between light and dark modes. The preference persists across sessions.

### User Information Tabs
- **General Tab:** Location, country, city, and postal code
- **Personal Tab:** Email and date of birth

### Responsive Layout
- Mobile: Full width, single column layout
- Tablet & Desktop: 70% centered width with flexible card grid

## Styling & Theming

The project uses shadcn's custom color palette defined in `index.css`:
- Primary colors adapt to light/dark mode
- All colors follow OKLCH color space for better perceptual uniformity
- CSS variables enable easy theme customization

## Recent Updates

- ✅ Fixed syntax errors in component mapping
- ✅ Separated UI logic into `AppBody` component
- ✅ Added header bar with "UserPool" branding
- ✅ Implemented functional theme toggle with dark mode support
- ✅ Optimized card sizing and spacing
- ✅ Improved dark mode styling for tabs and form elements

## Contributing

Feel free to fork and submit pull requests with improvements!

## License

MIT

