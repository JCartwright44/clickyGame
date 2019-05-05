import React from "react";
import "./style.css";

function Title(props) {
  console.log(props)
  return (
  
<nav className="navbar navbar-expand-lg">
  <a className="navbar-brand" href="#" id='title'>Paw Patrol Clicky Game</a>
  <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
    <div className="navbar-nav inline">
      <h1 className="nav-item" id="message">{props.message}</h1>
    </div>
  </div>
  <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup2">
    <div className="navbar-nav inline">
      <a className="nav-item" id='score'>Score: {props.score}   </a>
      <a className="nav-item" id='highscore'>Highscore: {props.highscore}   </a>
    </div>
  </div>
</nav>
  )
}

export default Title;
