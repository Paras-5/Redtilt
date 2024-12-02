import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import Footer from "./Components/Footer";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <Blog/>
      <Contact/>
      <Footer />
    </div>
  );
};

export default App;
