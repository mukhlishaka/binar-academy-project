import React from "react";
import './style/header.css';


function Header({ score }) {
    return (
        <>
            <div className="app__container">
                <div className="header">
                    <div className="p__sansserif">
                        <span>Rock</span>
                        <span>Paper</span>
                        <span>Scissors</span>
                    </div>
                    <div className="score-box">
                        <span>Score</span>
                        <div className="score-box__score">{score}</div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Header;