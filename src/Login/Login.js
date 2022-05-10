import React from "react";
import "../Login/Login.css";
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import FacebookLogin from "react-facebook-login";

const responseFacebook = (response) => {
  console.log("Login Result", response);
};
const componentClicked = (data) => {
  console.warn(data);
};

export default function Login() {
  return (
    <>
      <form>
        <div className="inputcontainer">
          <div className="container">
            <div className="inputarea">
              <label>Username</label>
              <input type="text" placeholder="Enter Username" required />
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                required
              />
            </div>
            <div className="buttoncontainer">
              <button type="submit">Login</button>
              <label>
                <input
                  type="checkbox"
                  // defaultChecked="checked"
                  name="remember"
                />
                Remember me
              </label>
              <a href="#" className="forgotpassword">
                Forgot Password
              </a>
            </div>
          </div>

          <FacebookLogin
            appId="1171895960289611"
            autoLoad={true}
            fields="name,email,picture"
            onClick={componentClicked}
            callback={responseFacebook}
            className="facebook"
          />
        </div>
      </form>
    </>
  );
}
