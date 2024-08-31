import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CourseInfo from "./components/CourseInfo";
import CourseCards from "./components/CourseCards";
import MissionAbout from "./components/MissionAbout";
import Benefits from "./components/Benefits";
import Footer from "./components/Footer";
import '../CSS/project2.css';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <CourseInfo />
      <CourseCards />
      <MissionAbout />
      <Benefits />
      <Footer />
    </div>
  );
}

export default App;
