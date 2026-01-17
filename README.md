# 🚀 Personal Portfolio Website

A modern, responsive personal portfolio website built with React, TypeScript, and Tailwind CSS. Features a dark-themed design, smooth animations, and a fully responsive mobile-first layout.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)

## ✨ Features

- 🎨 **Modern Dark Theme**: Beautiful dark-themed design with purple and cyan accents
- 📱 **Fully Responsive**: Mobile-first design that works seamlessly on all devices
- 🚀 **Smooth Animations**: Fade-in effects, hover animations, and smooth scrolling
- 🧭 **Interactive Navigation**: Fixed navbar with mobile menu and active section highlighting
- 📸 **Profile Section**: Professional photo display with gradient borders and hover effects
- 💼 **Resume Integration**: Embedded Google Docs resume with download and view options
- 🔗 **Social Links**: GitHub, LinkedIn, and email integration with hover effects
- 🎯 **Skills Showcase**: Comprehensive tech stack organized by categories
- 🌐 **Cross-browser Compatible**: Works on all modern browsers
- ⚡ **Fast Loading**: Optimized build with Vite for lightning-fast performance
- 🎭 **Component-Based**: Modular React components for easy maintenance

## 🛠️ Technologies Used

- **React 18**: Modern UI library for building interactive interfaces
- **TypeScript**: Type-safe JavaScript for better development experience
- **Vite**: Next-generation frontend build tool for fast development
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Lucide React**: Beautiful icon library
- **Radix UI**: Accessible component primitives
- **Class Variance Authority**: For component variants
- **Tailwind Merge**: For merging Tailwind classes

## 📁 Project Structure

```
Portfolio/
├── public/
│   └── images/
│       └── Jafrul_Amin.jpg    # Profile photo
├── src/
│   ├── components/
│   │   ├── ui/                # Reusable UI components
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── textarea.tsx
│   │   │   ├── badge.tsx
│   │   │   └── card.tsx
│   │   ├── Navbar.tsx         # Navigation component
│   │   ├── Hero.tsx           # Hero section
│   │   ├── About.tsx          # About section
│   │   ├── Projects.tsx       # Projects showcase
│   │   ├── Resume.tsx         # Resume section
│   │   ├── Contact.tsx        # Contact form
│   │   └── Footer.tsx         # Footer component
│   ├── lib/
│   │   └── utils.ts           # Utility functions
│   ├── App.tsx                # Main app component
│   ├── main.tsx               # Entry point
│   └── index.css              # Global styles and Tailwind
├── index.html                 # HTML template
├── package.json               # Dependencies
├── tsconfig.json              # TypeScript config
├── vite.config.ts             # Vite config
├── tailwind.config.ts         # Tailwind config
└── README.md                  # This file
```

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm** or **yarn** package manager

### Installation

1. **Clone or Download** the repository

   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Start Development Server**

   ```bash
   npm run dev
   ```

4. **View** your portfolio at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Customization Guide

### 1. Personal Information

Update the following in `src/components/Hero.tsx`:

```tsx
<h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4">
  <span className="gradient-text">Your Name</span>
</h1>
<h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-muted-foreground mb-6">
  Your Title
</h2>
```

### 2. Profile Photo

1. **Place your photo** in the `public/images/` folder
2. **Update the image path** in `src/components/About.tsx`:

   ```tsx
   <img 
     src="/images/your-photo.jpg" 
     alt="Your Name" 
     className="w-60 h-60 rounded-xl object-cover"
   />
   ```

### 3. Tech Stack

Modify the tech stack in `src/components/About.tsx`:

```tsx
const techStack = [
  { category: "Languages", items: ["JavaScript", "TypeScript", "Python"] },
  // Add more categories...
];
```

### 4. Projects

Update projects in `src/components/Projects.tsx`:

```tsx
const projects = [
  {
    title: "Your Project",
    description: "Project description",
    tags: ["React", "TypeScript"],
    github: "https://github.com/yourusername/project",
    live: "https://yourproject.com",
    featured: true,
  },
];
```

### 5. Resume Link

Update the resume URL in `src/components/Resume.tsx`:

```tsx
const GOOGLE_DOCS_RESUME_URL = "https://docs.google.com/document/d/YOUR_FILE_ID/edit";
```

### 6. Social Links

Update social links in `src/components/Hero.tsx` and `src/components/Contact.tsx`:

```tsx
href="https://github.com/yourusername"
href="https://linkedin.com/in/yourusername"
href="mailto:your.email@example.com"
```

### 7. Colors and Theme

Customize the color scheme in `src/index.css`:

```css
:root {
  --primary: 262 83% 58%;        /* Purple */
  --accent: 199 89% 48%;         /* Cyan */
  --background: 222 47% 6%;      /* Dark background */
  /* ... */
}
```

Or modify `tailwind.config.ts` for more advanced customization.

## 📱 Responsive Design

The website is built with a mobile-first approach:

- **Desktop**: Full grid layout with side-by-side content
- **Tablet**: Optimized spacing and layout adjustments
- **Mobile**: Single-column layout with hamburger navigation

### Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌐 Deployment

### Vercel (Recommended)

1. **Push** your code to GitHub
2. **Import** your repository on [Vercel](https://vercel.com)
3. **Deploy** - Vercel will automatically detect Vite and configure everything
4. **Your portfolio** will be live instantly with automatic deployments on every push

### Netlify

1. **Build command**: `npm run build`
2. **Publish directory**: `dist`
3. **Push** to GitHub and connect to [Netlify](https://netlify.com)
4. **Deploy** automatically on every push

### GitHub Pages

1. **Install** `gh-pages` package:
   ```bash
   npm install -D gh-pages
   ```

2. **Add** to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. **Deploy**:
   ```bash
   npm run deploy
   ```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📈 Performance Features

- **Code Splitting**: Automatic code splitting with Vite
- **Tree Shaking**: Unused code elimination
- **Optimized Assets**: Automatic asset optimization
- **Fast Refresh**: Instant HMR during development
- **TypeScript**: Type safety for better code quality

## 🎯 SEO Features

- Semantic HTML5 markup
- Meta viewport tag for mobile
- Proper heading hierarchy
- Alt text for images
- Clean URL structure
- Fast loading times

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **React** for the amazing UI library
- **Vite** for the blazing-fast build tool
- **Tailwind CSS** for the utility-first CSS framework
- **Lucide** for beautiful icons
- **Radix UI** for accessible components

---

⭐ **Star this repository** if you found it helpful!

**Built with ❤️ by Jafrul Amin**
