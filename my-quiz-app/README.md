# Quiz Application - Front-End Development Assignment

A modern, interactive quiz application built with React, Vite, and Tailwind CSS featuring smooth animations, accessibility support, and a beautiful gradient UI.

---

## 📋 Table of Contents

- [Setup Instructions](#setup-instructions)
- [Tech Stack](#tech-stack)
- [Key Features Implemented](#key-features-implemented)
- [Project Structure](#project-structure)
- [Assumptions Made](#assumptions-made)
- [Time Spent](#time-spent)
- [Deployment](#deployment)

---

## 🚀 Setup Instructions

### Prerequisites

- Node.js (v20.19.0 or higher recommended)
- npm (v11.6.3 or higher)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd my-quiz-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The app will open at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

---

## 🛠️ Tech Stack

### Required Technologies
- **React** (v19.2.0) - UI library
- **Vite** (v7.2.4) - Build tool and dev server
- **Tailwind CSS** (v3.4.17) - Utility-first CSS framework
- **Modern ES6+ JavaScript** - Latest JavaScript features

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

---

## ✨ Key Features Implemented

### 1. **Pixel-Perfect Design**
- Desktop-only responsive layout (1625px container width)
- Custom gradient background with aurora effect
- Precise spacing and measurements matching Figma specifications
- Custom typography using Borel-Regular font

### 2. **Smooth Animations & Transitions**
- Animated score counter with easing function
- Hover effects on interactive elements
- Smooth page transitions
- Transform animations on buttons and cards

### 3. **Accessibility (WCAG 2.1)**
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support (Tab, Enter, Space)
- Focus indicators with custom ring styles
- Screen reader friendly
- Proper heading hierarchy

### 4. **Interactive Features**
- Multi-question quiz flow
- Progress tracking with visual segments
- Direct question navigation
- Answer selection with visual feedback
- Score calculation and animated display
- Quiz restart functionality

### 5. **Component Architecture**
- Modular, reusable components
- Clear separation of concerns
- Props-based communication
- State management with React hooks

---

## 📁 Project Structure

```
my-quiz-app/
├── public/
│   ├── fonts/
│   │   └── Borel-Regular.woff2      # Custom font
│   └── vite.svg                      # Vite logo
├── src/
│   ├── components/
│   │   ├── NavArrows.jsx             # Navigation arrows component
│   │   ├── Options.jsx               # Quiz option/choice component
│   │   ├── ProgressSegments.jsx      # Progress bar segments
│   │   └── QuestionCard.jsx          # Question display card
│   ├── pages/
│   │   ├── QuizPage.jsx              # Main quiz interface
│   │   └── ResultPage.jsx            # Results/score page
│   ├── App.jsx                       # Root application component
│   ├── main.jsx                      # Application entry point
│   └── index.css                     # Global styles and Tailwind
├── .gitignore                        # Git ignore rules
├── eslint.config.js                  # ESLint configuration
├── index.html                        # HTML entry point
├── package.json                      # Dependencies and scripts
├── postcss.config.cjs                # PostCSS configuration
├── tailwind.config.js                # Tailwind CSS configuration
├── vite.config.js                    # Vite configuration
└── README.md                         # This file
```

---

## 🤔 Assumptions Made

1. **Desktop-First Approach**: Focused on desktop screens only as specified in requirements (no mobile/tablet responsiveness).

2. **Quiz Data**: Implemented with hardcoded sample questions for demonstration. In production, this would likely come from an API or CMS.

3. **Scoring Logic**: Assumed second option (index 1) is always correct for demo purposes. Real implementation would have answer keys.

4. **Browser Support**: Targeted modern browsers with ES6+ support (Chrome, Firefox, Safari, Edge).

5. **Font Loading**: Used web font (Borel-Regular) with fallback to system fonts.

6. **State Management**: Used React's built-in useState for state management. For larger apps, would consider Context API or Redux.

7. **Navigation**: Allowed jumping to any question regardless of answer status for better UX.

8. **Gradient Background**: Implemented as CSS gradient instead of using background images for better performance.

---

## ⏱️ Time Spent on Assignment

**Total Time: Approximately 6-8 hours**

### Breakdown:
- **Setup & Configuration** (1 hour)
  - Vite project setup
  - Tailwind CSS configuration
  - Font integration
  - ESLint setup

- **Component Development** (3-4 hours)
  - QuizPage layout and logic
  - QuestionCard component
  - Navigation controls
  - Progress indicators
  - ResultPage with animations

- **Styling & Polish** (1.5-2 hours)
  - Gradient backgrounds
  - Custom animations
  - Hover effects
  - Fine-tuning spacing

- **Accessibility** (0.5-1 hour)
  - ARIA labels
  - Keyboard navigation
  - Focus states
  - Semantic HTML

- **Testing & Refinement** (1 hour)
  - Manual testing
  - Bug fixes
  - Cross-browser testing
  - Code cleanup

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   npm run build
   vercel --prod
   ```

### Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Drag and drop** the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)

   **OR**

3. **Connect GitHub repository** on Netlify dashboard for automatic deployments

### Deploy to GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json**
   ```json
   {
     "homepage": "https://yourusername.github.io/my-quiz-app",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Update vite.config.js**
   ```javascript
   export default defineConfig({
     base: '/my-quiz-app/',
     plugins: [react()],
   })
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

---

## 🎯 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build locally
npm run lint     # Run ESLint
```

---

## 🌟 Additional Notes

- The application uses Vite's hot module replacement (HMR) for fast development
- Tailwind CSS is configured with custom colors and shadows
- All components are functional components using React Hooks
- The app maintains state in memory (no localStorage/API integration)
- CSS custom properties (CSS variables) are used for theme consistency

---

## 📧 Contact

For any questions or issues, please contact: [your.email@example.com]

---

## 📄 License

This project is created as part of a front-end development assignment.

---

**Made with ❤️ using React, Vite, and Tailwind CSS**
