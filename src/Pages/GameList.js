import "./style/gamelist.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";

const GameList = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <Navigation />
      <div class="gamepage">
        <h1 class="listext">GAME LIST</h1>
        <div class="gamelist">
          <button class="gameone" onClick={() => navigate("/gamelist/game")}></button>
          <button class="gametwo">GAME 2</button>
          <button class="gamethree">GAME 3</button>
        </div>
      </div>
    </>
  );
};

export default GameList;
