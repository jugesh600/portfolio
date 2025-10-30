import React from "react";
import {
  Navbar,
  Footer,
  Button,
  Hero,
  Projects,
  Skills,
  Contact,
  About,
  Qualification,
} from "./config/index";
import "./styles/global.css";

const App = () => {
  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen">
      <Navbar />
      <main className="container mx-auto px-6">
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
