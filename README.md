# Glow - Animated React Landing Page

![Glow Landing Page Screenshot](https://placehold.co/1200x600/0a0a0a/34d399?text=Glow+Landing+Page)

A modern, visually-stunning, and fully responsive landing page built with **React** and **Tailwind CSS**. This project showcases a dark-themed UI enhanced with multiple layers of dynamic canvas animations to create an immersive user experience.

---

## ✨ Key Features

- **Stunning Dark UI**: A sleek and modern dark theme that's easy on the eyes.
- **Interactive Cursor Glow**: A radial gradient follows the user's cursor, illuminating the content underneath.
- **Multi-Layered Animations**:
    - A dynamic **star shower** bursts from the center of the hero section.
    - A subtle background animation of **slowly drifting characters** adds depth.
    - A site-wide particle animation provides a constant, gentle motion.
- **Responsive & Mobile-First**: The layout is optimized for all screen sizes, from mobile phones to desktop monitors.
- **Engaging Micro-interactions**: Smooth hover effects and transitions on buttons and navigation links.
- **Component-Based Architecture**: Built with reusable React components for easy maintenance and scalability.

---

## 🚀 Technologies Used

- **[React](https://reactjs.org/)**: A JavaScript library for building user interfaces.
- **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework for rapid UI development.
- **HTML5 Canvas**: Used for creating the dynamic, multi-layered background animations.
- **JavaScript (ES6+)**: For all application logic and animations.
- **SVG**: Inline SVG components are used for icons to ensure they are lightweight and scalable.

---

## ⚙️ Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) (or yarn) installed on your machine.

### Installation

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/your-username/your-repository-name.git](https://github.com/your-username/your-repository-name.git)
    ```

2.  **Navigate to the project directory:**
    ```sh
    cd your-repository-name
    ```

3.  **Install dependencies:**
    ```sh
    npm install
    ```
    or if you use yarn:
    ```sh
    yarn install
    ```

4.  **Run the development server:**
    ```sh
    npm start
    ```
    or
    ```sh
    yarn start
    ```

The application will open automatically in your browser at `http://localhost:3000`.

---

## 📂 Project Structure

The project is organized into a single main component, `App.js`, which contains all the UI sections and animation logic.


src/
└── App.js       # Main application component containing all sub-components and logic
├── Navbar
├── HeroSection
│   ├── StarShower (Canvas Animation)
│   └── FloatingCharacters (Canvas Animation)
├── FeaturesSection
├── TestimonialsSection
├── CtaSection
├── Footer
├── CursorGlow
└── BackgroundParticles


---

## 🎨 Customization

Customizing the landing page is straightforward:

- **Text & Content**: All text can be modified directly within the JSX of each section component (e.g., `HeroSection`, `FeaturesSection`).
- **Colors & Styling**: Colors, fonts, and spacing are controlled by [Tailwind CSS](https://tailwindcss.com/docs/customizing-colors) utility classes. You can change the primary theme colors (e.g., `teal`, `amber`) throughout the components to match your brand.
- **Animations**: Animation parameters like particle count, speed, and colors can be adjusted within their respective canvas components (`StarShower`, `FloatingCharacters`, etc.).

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
