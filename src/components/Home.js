import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  // update the JSX being returned!
  return (
  <div id="home">Home
    <h1 style={h1Style}>{name} is a Web Developer from {city}</h1>
  </div>

  )
}

const h1Style = {
  color: "firebrick"
}

export default Home;
