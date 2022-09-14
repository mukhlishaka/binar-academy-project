import React, { useEffect, useState } from "react";
import style from "./style/game.css";
import Header from "./Header";
import { Link } from "react-router-dom";

const Game = ({ score, playerChoice, setScore }) => {
  const [com, setCom] = useState("");
  const [playerWin, setplayerWin] = useState("");
  const [counter, setCounter] = useState(3);

  const getComPick = () => {
    const choices = ["rock", "paper", "scissors"];
    setCom(choices[Math.floor(Math.random() * 3)]);
  };
  useEffect(() => {
    getComPick();
  }, []);

  const getResult = () => {
    if (playerChoice === "rock" && com === "scissors") {
      setplayerWin("win");
      setScore(score + 1);
    } else if (playerChoice === "rock" && com === "paper") {
      setplayerWin("lose");
      setScore(score - 1);
    } else if (playerChoice === "scissors" && com === "paper") {
      setplayerWin("win");
      setScore(score + 1);
    } else if (playerChoice === "scissors" && com === "rock") {
      setplayerWin("lose");
      setScore(score - 1);
    } else if (playerChoice === "paper" && com === "rock") {
      setplayerWin("win");
      setScore(score + 1);
    } else if (playerChoice === "paper" && com === "scissors") {
      setplayerWin("lose");
      setScore(score - 1);
    } else {
      setplayerWin("draw");
    }
  };

  useEffect(() => {
    const timer =
      counter > 0
        ? setInterval(() => {
            setCounter(counter - 1);
          }, 1000)
        : getResult();

    return () => {
      clearInterval(timer);
    };
  }, [counter, com]);

  return (
    <>
      <Header score={score} />
      <div className="app__container">
        <div className="game">
          <div className="game__player">
            <span className="p__sansserif">you picked</span>
            <div className={`image image__${playerChoice} ${playerWin === "win" ? `image image__${playerChoice}__winner` : ""}`}></div>
          </div>
          {playerWin === "win" && (
            <div className="game__play">
              <span className="p__sansserif">you win</span>
              <Link to="/startgame" className="play-again" onClick={() => setCom()}>
                Play Again
              </Link>
            </div>
          )}
          {playerWin === "lose" && (
            <div className="game__play">
              <span className="p__sansserif">you lose</span>
              <Link to="/startgame" className="play-again" onClick={() => setCom()}>
                Play Again
              </Link>
            </div>
          )}
          {playerWin === "draw" && (
            <div className="game__play">
              <span className="p__sansserif">draw</span>
              <Link to="/startgame" className="play-again" onClick={() => setCom()}>
                Play Again
              </Link>
            </div>
          )}

          <div className="game__com">
            <span className="p__sansserif">the com picked</span>
            {counter === 0 ? <div className={`image image__${com} ${playerWin === "lose" ? `image image__${com}__winner` : ""}`}></div> : <div className="counter">{counter}</div>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Game;
