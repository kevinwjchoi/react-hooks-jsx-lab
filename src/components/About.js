import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id ="about">
      <h2>About Me</h2>
      <p>IDK</p>
      <img src={image} alt="I made this"></img>
    </div>

    )
}
const imgStyle = {
  src: "../data/data",
  alt: "I made this"
}

export default About;
