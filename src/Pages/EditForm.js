import React, {useState } from "react";
import "./style/editform.css";

import { useLocation } from "react-router-dom";
import { getDatabase, ref, child,update } from "firebase/database";
import {useNavigate} from "react-router-dom"

function EditForm(props) {
  const location = useLocation();
  const [username, setUsername] = useState(location.state.username);
  const [email, setEmail] = useState(location.state.email);
  const [bio, setBio] = useState(location.state.bio);
  const [city, setCity] = useState(location.state.city);
  const [score, setScore] = useState(location.state.total_score);
  const [sosmed, setSosmed] = useState(location.state.sosmed);

  const usernameOnChangeHandle = (event) => setUsername(event.target.value);
  const emailOnChangeHandle = (event) => setEmail(event.target.value);
  const bioOnChangeHandle = (event) => setBio(event.target.value);
  const cityOnChangeHandle = (event) => setCity(event.target.value);
  const scoreOnChangeHandle = (event) => setScore(event.target.value);
  const sosmedOnChangeHandle = (event) => setSosmed(event.target.value);
  const navigate=useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("propseditData", props.editData);
    navigate("/")
    const data = {
      username: username,
      email: email,
      bio: bio,
      city: city,
      total_score: score,
      sosmed: sosmed,
    };
    const dbRef = ref(getDatabase());

    update(child(dbRef, `users/${location.state.uuid}`), data);

    
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="username">Username : </label>
      <input
        type="text"
        id="username"
        name="username"
        placeholder="username"
        onChange={usernameOnChangeHandle}
        value={username}
      />
      <label htmlFor="bio">Bio :</label>
      <input
        type="text"
        id="bio"
        name="bio"
        placeholder="bio"
        onChange={bioOnChangeHandle}
        value={bio}
      />
      <br />

      <label htmlFor="email">Email : </label>
      <input
        type="text"
        id="email"
        name="email"
        placeholder="email"
        onChange={emailOnChangeHandle}
        value={email}
      />
      <label htmlFor="city">City :</label>
      <input
        type="text"
        id="city"
        name="city"
        placeholder="city"
        onChange={cityOnChangeHandle}
        value={city}
      />
      <br />
      <label htmlFor="total_score">Score :</label>
      <input
        type="number"
        id="total_score"
        name="total_score"
        placeholder="total_score"
        onChange={scoreOnChangeHandle}
        value={score}
      />
      <br />
      <label htmlFor="sosmed">Social Media :</label>
      <input
        type="text"
        id="sosmed"
        name="sosmed"
        placeholder="sosmed"
        onChange={sosmedOnChangeHandle}
        value={sosmed}
      />
      <br />

      <input type="submit" value="Submit" />
    </form>
  );
}

export default EditForm;
