import React, { useContext, useEffect } from "react";
import {
  Navbar,
  Footer,
  Hero,
  Projects,
  Skills,
  Contact,
  About,
  Qualification,
} from "./config/index";
import "./styles/global.css";
import { ThemeContext } from "./themes/ThemeProvider.jsx";

const App = () => {
  const { theme } = useContext(ThemeContext);

  // Apply dark or light theme to <html>
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        theme === "dark"
          ? "bg-gray-900 text-gray-100"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Fixed Navbar */}
      <Navbar />

      {/* Main content with spacing below navbar */}
      <main className="max-w-6xl mx-auto px-6 pt-24 space-y-24">
        <Hero />
        <About />
        <Projects />
        <Qualification />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
