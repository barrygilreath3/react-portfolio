import React from "react";
import './styles/style.css';
import Project from "./components/Project";
import Header from "./components/Header"
import Navigation from "./components/Navigation";
import About from "./components/About"
import Footer from "./components/Footer";

function App() {
  return (
    <div>
        <div><Header /></div>
        <div><Navigation /></div>
        <main>
          <div><About /></div>
          <div><Project /></div>
        </main>
        <div><Footer /></div>
    </div>
  );
};

export default App;