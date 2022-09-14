import React from "react";
import "./style/game.css";
import Header from "./Header";
import { Link } from "react-router-dom";


function Play({ setplayerChoice, score }) {
  const setChoice = (e) => {
    setplayerChoice(e.target.dataset.id);
  };

  return (
    <>
      <Header score={score} />
      <div className="app__container">
        <div className="play">
          <h1>Select Your Choice!</h1>
          <div className="items">
            <Link to="/game">
              <div data-id="paper" onClick={setChoice} className="image image__paper"></div>
            </Link>
            <Link to="/game">
              <div data-id="scissors" onClick={setChoice} className="image image__scissors"></div>
            </Link>
            <Link to="/game">
              <div data-id="rock" onClick={setChoice} className="image image__rock"></div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Play;
