import React, { useContext } from "react";
import { UserContext } from "../contexts/userContext";
import style from "./style/Footer.module.css";

function Footer(props) {
  const { currentUser } = useContext(UserContext);
  return (
    <>
      <div className={style["app__container"]}>
        <div className={style.footer}>
          <div className={style["button-score"]}>
            {" "}
            <button
              type="submit"
              className={style.btn}
              onClick={() => props.handleSubmit(currentUser.uid)}
            >
              save score
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
