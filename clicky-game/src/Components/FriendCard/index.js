import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card" onClick={props.handleShuffle} >
      <div className="img-container">
        <img className="img" alt={props.name} src={props.image} />
      </div>
      <div className="content">
        {/* <ul>
          <li> */}
            <strong> {props.name}</strong>
          {/* </li>
        </ul> */}
      </div>
    </div>
  );
}

export default FriendCard;

