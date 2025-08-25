# 🚀 Personal Portfolio Website

A modern, responsive personal portfolio website built with HTML, CSS, and JavaScript. Features a clean design, smooth animations, and mobile-first responsive layout.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## ✨ Features

- 🎨 **Modern Design**: Clean, professional layout with blue + white + gray color scheme
- 📱 **Fully Responsive**: Mobile-first design that works on all devices
- 🚀 **Smooth Animations**: Fade-in effects, hover animations, and smooth scrolling
- 🧭 **Interactive Navigation**: Fixed navbar with active section highlighting
- 📸 **Profile Section**: Professional photo display with hover effects
- 💼 **Resume Integration**: Direct link to Google Drive resume
- 🔗 **Social Links**: GitHub, LinkedIn, and email integration
- 🎯 **Skills Showcase**: Interactive skill tags with hover effects
- 🌐 **Cross-browser Compatible**: Works on all modern browsers
- ⚡ **Fast Loading**: Optimized for performance and SEO

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and accessibility
- **CSS3**: Modern styling with Flexbox, Grid, and animations
- **JavaScript (ES6+)**: Interactive features and smooth scrolling
- **Font Awesome**: Professional icons
- **Google Fonts**: Clean typography

## 📁 Project Structure

```
Portfolio/
├── index.html          # Main HTML file
├── style.css           # CSS styles and responsive design
├── script.js           # JavaScript functionality
├── images/             # Image assets folder
│   └── Jafrul_Amin.jpg # Profile photo
└── README.md           # Project documentation
```

## 🚀 Quick Start

### Prerequisites

- A modern web browser
- Basic knowledge of HTML/CSS/JavaScript (for customization)

### Installation

1. **Clone or Download** the repository

   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Open** `index.html` in your web browser

   - Double-click the file, or
   - Drag and drop into your browser, or
   - Use a local server (recommended)

3. **Local Server** (Optional but recommended)

   ```bash
   # Using Python 3
   python -m http.server 8000

   # Using Node.js
   npx serve .

   # Using PHP
   php -S localhost:8000
   ```

4. **View** your portfolio at `http://localhost:8000`

## 🎨 Customization Guide

### 1. Personal Information

Update the following in `index.html`:

```html
<!-- Hero Section -->
<h1 class="hero-title">Your Name</h1>
<p class="hero-subtitle">Your Title</p>
<p class="hero-description">Your tagline</p>

<!-- About Section -->
<h3>Hello! I'm Your Name</h3>
<p class="bio">Your bio description</p>
```

### 2. Profile Photo

1. **Place your photo** in the `images/` folder
2. **Update the image path** in `index.html`:
   ```html
   <img
     src="images/your-photo.jpg"
     alt="Your Name's Photo"
     class="profile-photo"
   />
   ```

### 3. Skills

Modify the skills section in `index.html`:

```html
<div class="skill-tags">
  <span class="skill-tag">Your Skill 1</span>
  <span class="skill-tag">Your Skill 2</span>
  <span class="skill-tag">Your Skill 3</span>
</div>
```

### 4. Resume Link

Update the resume link with your Google Drive URL:

```html
<a
  href="https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing"
  class="resume-button"
  target="_blank"
  rel="noopener noreferrer"
></a>
```

### 5. Social Links

Update your social media profiles:

```html
<a href="https://github.com/yourusername" class="social-link github">
  <a href="https://linkedin.com/in/yourusername" class="social-link linkedin">
    <a href="mailto:your.email@example.com" class="social-link email"></a></a
></a>
```

### 6. Colors and Styling

Customize the color scheme in `style.css`:

```css
:root {
  --primary-color: #4a90e2; /* Main blue */
  --secondary-color: #357abd; /* Darker blue */
  --accent-color: #f8f9fa; /* Light gray */
  --text-color: #333; /* Dark text */
  --white: #ffffff; /* Pure white */
}
```

## 📱 Responsive Design

The website is built with a mobile-first approach:

- **Desktop**: Full grid layout with side-by-side content
- **Tablet**: Optimized spacing and layout adjustments
- **Mobile**: Single-column layout with hamburger navigation

### Breakpoints

- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: > 768px

## 🌐 Deployment

### GitHub Pages (Recommended)

1. **Push** your code to GitHub
2. **Go to** Repository Settings → Pages
3. **Select** source branch (usually `main` or `master`)
4. **Your portfolio** will be live at `https://username.github.io/repository-name`

### Netlify

1. **Drag and drop** your project folder to [Netlify](https://netlify.com)
2. **Get** a live URL instantly
3. **Custom domain** available

### Vercel

1. **Connect** your GitHub repository to [Vercel](https://vercel.com)
2. **Automatic deployment** on every push
3. **Custom domain** support

## 🔧 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 📈 Performance Features

- **Lazy loading** for images
- **CSS animations** with hardware acceleration
- **Minimal JavaScript** for fast execution
- **Optimized CSS** with efficient selectors
- **Responsive images** for different screen sizes

## 🎯 SEO Features

- Semantic HTML5 markup
- Meta viewport tag for mobile
- Proper heading hierarchy
- Alt text for images
- Clean URL structure

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Font Awesome** for beautiful icons
- **Google Fonts** for typography
- **CSS Grid & Flexbox** for modern layouts
- **Intersection Observer API** for smooth animations

---

⭐ **Star this repository** if you found it helpful!

**Built with ❤️ by Jafrul Amin**
