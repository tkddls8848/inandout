import React from "react";
import './styles.css';

const style = {
    root: {
        width: "30%",
        height: 300,
        margin:10,

    }
}

export default function Flip() {
  return (
    <div class="flip-card" style={style.root}>
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <h1>Front</h1>
        </div>
        <div class="flip-card-back">
          <h1>Back</h1>
        </div>
      </div>
    </div>
  );
}