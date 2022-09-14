import "./style/login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "../components/Navigation";
import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { Spinner } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  showErrorToast,
  showSuccessAlert,
  setLoading,
  setProfile,
} from "../store/reducer/userSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const isLoading = useSelector((state) => state.user.isLoading);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setLoading(true));

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const { email, password, username, userId } = userCredential.user;
        const profile = {
          name: username,
          email: email,
          password: password,
          id: userId,
        };
        dispatch(setProfile(profile));
        dispatch(setLoading(false));
        dispatch(showSuccessAlert(`Success Login with ${email}`));
        console.log(profile);
        // ...
        navigate("/gamelist");
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
            <h1 class="mb-5">Login</h1>

            <form onSubmit={handleSubmit} class="row g-3">
              <div class="mb-3 row">
                <label for="staticEmail" class="col-sm-4 col-form-label">
                  {" "}
                  Email{" "}
                </label>

                <div class="col-sm-8">
                  <input type="email" name="uEmail" class="form-control" placeholder="example@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
              </div>

              <div class="mb-3 row">
                <label for="inputPassword" class="col-sm-4 col-form-label">
                  {" "}
                  Password{" "}
                </label>

                <div class="col-sm-8">
                  <input type="password" name="uPassword" class="form-control" placeholder="12345678" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
              </div>

              <div class="row m-auto">
                <button type="submit" class="btn btn-primary text-right float-end mb-3">
                  {loading()}
                  Login
                </button>
              </div>
              <div class="row m-auto">
                <h6>
                  Belum Punya Akun? <a href="/signup">Daftar Sekarang</a>
                </h6>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
