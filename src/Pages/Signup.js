import "./style/login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "../components/Navigation";

import React, { useState } from "react";
import { Spinner } from "reactstrap";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  showErrorToast,
  showSuccessAlert,
  setLoading,
  setProfile,
} from "../store/reducer/userSlice";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const isLoading = useSelector((state) => state.user.isLoading);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setLoading(true));

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
      const { email, password, username, userId } = userCredential.user;
      const profile = {
        name: username,
        email: email,
        password: password,
        id: userId,
      };
      dispatch(setProfile(profile));
      dispatch(setLoading(false));
      updateProfile(userCredential.user, {displayName: username})
      dispatch(showSuccessAlert(`Success Login with ${email}`));
      navigate("/");
    })
      .catch((error) => {
        dispatch(setLoading(false));
        dispatch(showErrorToast(error.code));
      });
  };

  const loading = () => {
    return (
      isLoading && (
        <Spinner size="sm" className="me-2">
          Loading....
        </Spinner>
      )
    );
  };

  return (
    <div class="body">
      <Navigation />
      <div class="row">
        <div class="col-lg-6 col-sm-12 m-auto">
          <div class="card p-5">
            <h1 class="mb-5">Sign Up</h1>

            <form onSubmit={handleSubmit} class="row g-3">
              <div class="mb-3 row">
                <label class="col-sm-4 col-form-label">Username</label>

                <div class="col-sm-8">
                  <input type="username" name="username" class="form-control" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
              </div>

              <div class="mb-3 row">
                <label class="col-sm-4 col-form-label"> Email </label>

                <div class="col-sm-8">
                  <input type="email" name="email" class="form-control" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
              </div>

              <div class="mb-3 row">
                <label class="col-sm-4 col-form-label"> Password </label>

                <div class="col-sm-8">
                  <input type="password" name="password" class="form-control" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
              </div>

              <div class="row">
                <button type="submit" class="btn btn-primary text-right float-end mb-3">
                  {loading()}
                  Submit
                </button>
              </div>
              <div class="row m-auto">
                <h6>
                  Sudah Punya Akun? <a href="/login">Login Here</a>
                </h6>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};


