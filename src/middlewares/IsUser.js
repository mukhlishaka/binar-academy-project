import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/userContext";

function IsUser(props) {
  const navigate = useNavigate();

  const { currentUser } = useContext(UserContext);
  if (!currentUser) {

    navigate("/login");
  }

  return props.children;
}
export default IsUser;
