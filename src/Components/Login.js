import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import Button from "@material-ui/core/Button";
import { auth } from "./../firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
    //login with firebase
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((err) => alert(err.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //successfull register
        //redirect to home page if successfull
        if (auth) {
          history.push("/");
        }
      })
      .catch((err) => alert(err.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG21.png"
          alt=""
          className="login__image"
        />
      </Link>
      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>Email</h5>
          <input
            type="email"
            name="login__email"
            id=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            name="login__password"
            id=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            variant="contained"
            className="login__signInButton"
            type="submit"
            onClick={signIn}
          >
            Sign in
          </Button>
        </form>
        <p>By signing in you agree to our terms and conditions</p>
        <Button
          variant="contained"
          color="primary"
          className="login__registerButton"
          onClick={register}
        >
          Create an Account
        </Button>
      </div>
    </div>
  );
}

export default Login;
