import React from "react";
import '../styles/navigation.css';

function Navigation() {
  return (
    <div id="navigation">
        <nav>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="https://www.linkedin.com/in/barry-gilreath-iii/" target="_blank">LinkedIn</a></li>
              <li><a href="https://drive.google.com/file/d/1FH1R-ciajfBll5NfCIWrnBNXJXx1eaC6/view?usp=sharing" target="_blank">Resume</a></li>
              <li><a href="https://github.com/barrygilreath3/" target="_blank">GitHub</a></li>
              <li><a href="mailto:barrygilreath3@gmail.com" target="_blank">Contact</a></li>
            </ul>
        </nav>
    </div>
  );
}

export default Navigation;