# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js 15, featuring advanced animations, dynamic backgrounds, and a professional design.

## 🚀 Features

- **Text Scrambling Animation**: Unique scrambling effect for the name display with session storage to prevent repeated animations
- **Dynamic Background**: Floating particle system with subtle animations
- **Fluid UI Components**: Smooth hover effects and transitions throughout
- **Responsive Design**: Optimized for all screen sizes
- **Professional Content**: Showcasing Georgia Tech Computer Science background
- **Inline Contact System**: Expandable contact buttons with Email, LinkedIn, and GitHub links
- **Modern Tech Stack**: Built with the latest web technologies

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Fonts**: Roboto (weights 100-900)
- **Icons**: Heroicons (SVG)

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx              # Homepage with text scrambling and contact expansion
│   ├── layout.tsx            # Root layout with fonts and dynamic background
│   ├── globals.css           # Global styles and animations
│   ├── about/               # About Me page with photo integration
│   ├── portfolio/           # Portfolio projects showcase
│   ├── skills/             # Skills with dot-based proficiency system
│   └── contact/            # Contact page (legacy)
├── components/
│   ├── TextScramble.tsx    # Text scrambling animation component
│   └── DynamicBackground.tsx # Floating particles background
public/
├── Resume2108.pdf          # Resume file
└── ujaan-photo.jpg        # Personal photo
```

## 🎨 Design Features

### Homepage
- Large text scrambling animation for name display
- Three-line professional description
- Clean vertical navigation menu
- Inline contact expansion with animated buttons
- Floating particle background
- Professional footer with copyright

### Navigation
- **About Me**: Personal background and Georgia Tech focus
- **Portfolio**: Real projects with status badges (Completed/In Progress)
- **Skills**: Dot-based proficiency indicators for technical skills
- **Resume**: Direct PDF download link
- **Contact**: Inline expansion with Email, LinkedIn, GitHub

### Skills Categories
- **Programming Languages**: Python, Java, JavaScript, TypeScript, C++, HTML/CSS
- **AI/ML Frameworks**: TensorFlow, PyTorch, Scikit-learn, Pandas, NumPy
- **Data Handling**: SQL, MongoDB, Excel, R
- **Other Tools**: Git, Docker, AWS, React, Node.js

### Portfolio Projects
- **Photo Organizer**: AI-powered photo management system
- **JurassIQ**: Machine learning project for dinosaur classification
- **Knights-and-Knaves**: Research project in computational logic
- **Portfolio Website**: This website itself

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/UjaanRakshit/personal-website.git
   cd personal-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop**: Full-size layout with large text and spacing
- **Tablet**: Medium-sized text and adjusted spacing
- **Mobile**: Compact layout with touch-friendly buttons

## 🎭 Animations

- **Text Scrambling**: Custom scrambling effect for name display
- **Framer Motion**: Smooth page transitions and element animations
- **Hover Effects**: Interactive button and link animations
- **Background Particles**: Subtle floating elements
- **Contact Expansion**: Smooth reveal animation for contact buttons

## 🔧 Customization

### Updating Content
- **Personal Info**: Edit variables in `src/app/page.tsx`
- **About Me**: Update content in `src/app/about/page.tsx`
- **Portfolio**: Modify projects in `src/app/portfolio/page.tsx`
- **Skills**: Update proficiency levels in `src/app/skills/page.tsx`

### Styling
- **Colors**: Modify Tailwind classes in component files
- **Fonts**: Update font imports in `src/app/layout.tsx`
- **Animations**: Customize Framer Motion settings in components

## 📄 Resume Integration

The website includes direct PDF resume integration:
- Place your resume PDF in the `public/` directory
- Update the resume link in the navigation menu
- The resume opens in a new tab for easy viewing/downloading

## 📸 Photo Integration

Personal photo integration in the About Me section:
- Add your photo to `public/ujaan-photo.jpg`
- Responsive image with proper alt text
- Professional styling with subtle effects

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on push

### Other Platforms
- **Netlify**: Connect GitHub repo for auto-deployment
- **GitHub Pages**: Use `npm run build` and deploy static files

## 🤝 Contributing

This is a personal portfolio project, but suggestions and improvements are welcome!

1. Fork the project
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📞 Contact

**Ujaan Rakshit**
- Email: [ujaanrakshit@gmail.com](mailto:ujaanrakshit@gmail.com)
- LinkedIn: [ujaan-rakshit](https://www.linkedin.com/in/ujaan-rakshit-18508b281/)
- GitHub: [UjaanRakshit](https://github.com/ujaanrakshit)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🎓 About

This portfolio represents my journey as a Computer Science student at Georgia Tech, class of 2027. Currently seeking internship opportunities for Summer 2026.

**Built with ❤️ by Ujaan Rakshit**
