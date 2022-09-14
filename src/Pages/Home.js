import React from "react";
import { Link } from "react-router-dom";

import styles from "./style/Home.module.css";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <>
      <Navigation />
      <div className={styles["hero-container"]}>
        <div className={styles.hero}>
          <h3>Play Traditional Games!</h3>
          <h2>Rock</h2>
          <h2>Paper</h2>
          <h2>Scissor</h2>
          <p>
            Let's play some traditional games here!. These games will bring you
            back to your childhood where everything are fine.
          </p>
          <div className={styles["button-container"]}>
            <Link className={styles["button__subs"]} to="/login">
              <span>Play Now</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
