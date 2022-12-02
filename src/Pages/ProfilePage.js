import React, { useState, useEffect, useContext } from "react";
import "./style/profile.css";
import { getDatabase, ref, child, get } from "firebase/database";
import { UserContext } from "../contexts/userContext";

function ProfilePage() {
  const { currentUser } = useContext(UserContext);
  const [name, SetName] = useState("Your Program");
  const [email, SetEmail] = useState("Your Program");
  const [score, SetScore] = useState("Your Score");
  const [city, setCity] = useState("");
  const [sosmed, setSosmed] = useState("");
  const [bio, setBio] = useState("");
  const [pp, setPp] = useState("");

  useEffect(() => {
    if (currentUser) fetchUser();
  }, [currentUser]);

  const fetchUser = () => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `/users/${currentUser.uid}`))
      .then((snapshot) => {
        console.log(snapshot.val());
        SetName(snapshot.val().username);
        SetEmail(snapshot.val().email);
        SetScore(snapshot.val().total_score);
        setPp(snapshot.val().photo_profile);
        setCity(snapshot.val().city);
        setSosmed(snapshot.val().sosmed);
        setBio(snapshot.val().bio);
      })
      .catch((error) => {
        console.error(error);
        console.log("gagal");
      });
  };
  const nameEdit = () => {
    console.log("ini edit nama");
  };
  const changePicture = () => {
    console.log("change picture");
  };

  return (
    <div className="head">
      <div className="Card">
        <div className="upper-container">
          <div className="image-container">
            <img src={pp} alt="picture" />
            <i onClick={changePicture} class="bi bi-images"></i>
          </div>
        </div>
        <div className="lower-container">
          <h3> {name}</h3>
          <h5>Score: {score} </h5>
        </div>
      </div>
      <div className="side-head">
        <div>
          <div>Username:</div>
          <div>{name}</div>
          <i onClick={nameEdit} class="bi bi-stickies"></i>
        </div>
        <div>
          <div>Email:</div>
          <div>{email}</div>
          <i class="bi bi-stickies"></i>
        </div>
        <div>
          <div>Password:</div>
          <div>********</div>
          <i class="bi bi-stickies"></i>
        </div>
        <div>
          <div>City:</div>
          <div>{city}</div>
          <i class="bi bi-stickies"></i>
        </div>
        <div>
          <div>Sosial Media:</div>
          <div>{sosmed}</div>
          <i class="bi bi-stickies"></i>
        </div>
        <div>
          <div>Biografi:</div>
          <div>{bio}</div>
          <i class="bi bi-stickies"></i>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
