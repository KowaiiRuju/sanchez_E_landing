# MSU-MCEST Landing Page

by: Emmanuel V. Sanchez, BSCS 2B

A premium, modern redesign of the MSU-Maigo College of Education, Science, and Technology (MSU-MCEST) landing page.

This project transforms the initial university landing page into a structured, highly responsive, and visually engaging frontend interface that accurately reflects the institution's commitment to quality education, academic excellence, and exemplary service.

## 🌟 Key Features

- **Dynamic Hero Section**: Features a full-width background image with an overlapping glassmorphism card that handles the Vision & Mission statements via a clean tabbed interface.
- **Animated Success Statistics**: A four-column responsive metrics counter that animates on scroll, driven by an `IntersectionObserver`.
- **R.I.S.E Core Values Grid**: A sleek UI block presenting the university's core values (Resilience, Integrity, Service, Excellence) utilizing descriptive icons and hover animations.
- **Centered Key Objectives**: A prominent display of the university's 14 strategic objectives.
- **Interactive Department Cards**: A responsive grid showcasing the diverse academic departments. Each card contains the specific scraped department logo, the exact program offerings (updated from generic names to B.S. degrees), and direct external links to each department's official webpage.
- **Comprehensive Premium Footer**: A multi-column footer layout housing branding, quick links, contact information, and social media connectivity.

## 🛠️ Technologies Used

- **HTML5**: Semantic and accessible markup.
- **CSS3 (Vanilla)**: Extensive use of CSS Grid and Flexbox for complex, responsive layouts. Implements a premium color palette (`#1A365D`, `#ED8936`, etc.) with modern UI trends like subtle shadows and border-radii.
- **JavaScript (Vanilla)**: Handles the tab-switching logic in the Hero section and controls the number counting animations based on scroll position.
- **FontAwesome 6**: Used throughout the page for high-quality, scalable vector icons.
- **Google Fonts (Outfit)**: A modern, clean sans-serif typeface used to enhance the premium editorial feel.

## 📁 Project Structure

```text
mcest_landing/
├── index.html       # The main HTML structure
├── styling.css      # All styling, CSS variables, and media queries
├── script.js        # Core frontend interactivity (tabs, counters)
├── main_image.jpg   # The hero background campus image
├── logo/            # Directory containing all scraped department logos
│   ├── LogoMCEST.png
│   ├── dept-logo-dcs.png
│   ├── dept-logo-dhess.png
│   └── ...
└── README.md        # Project documentation
```

## 🚀 How to Run

1. Clone or download the repository to your local machine.
2. Open `index.html` in your modern web browser of choice. Since this is a static site utilizing Vanilla HTML/CSS/JS, no build step, framework start scripts, or backend server is required to view the landing page.

_Designed specifically for MSU-MCEST._
