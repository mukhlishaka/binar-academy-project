import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/userContext";

function IsAdmin(props) {
  const navigate = useNavigate();

  const { currentUser } = useContext(UserContext);
  if (!currentUser || currentUser.uid !=="TO6H8ieUTaasShf9toInVH4kuD82") {
    navigate("/");
    
  }

  return props.children;
}
export default IsAdmin;