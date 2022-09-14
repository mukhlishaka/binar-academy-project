import React from "react";
import "./style/admindashboard.css";
import { Button, ButtonGroup } from "reactstrap";
import { useNavigate } from "react-router-dom";

function AdminDashboard(props) {
  const navigate = useNavigate();
  const toForm = (key, data) => {
    data["uuid"] = key;
    navigate("/edit", { state: data });
  };
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>USERNAME</th>
            <th>EMAIL</th>
            <th>PASSWORD</th>
            <th>SCORE</th>
            <th>BIO</th>
            <th>CITY</th>
            <th>SOCIAL MEDIA</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(props.data).map((key) => (
            <tr key={key}>
              <td>{props.data[key].username}</td>
              <td>{props.data[key].email}</td>
              <td>{props.data[key].password}</td>
              <td>{props.data[key].total_score}</td>
              <td>{props.data[key].bio}</td>
              <td>{props.data[key].city}</td>
              <td>{props.data[key].sosmed}</td>
              <td>
                <ButtonGroup>
                  <Button outline color="warning" size="sm" onClick={() => toForm(key, props.data[key])}>
                    EDIT
                  </Button>

                  <Button outline color="danger" size="sm" onClick={() => props.onDelete(key)}>
                    DELETE
                  </Button>
                </ButtonGroup>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDashboard;
