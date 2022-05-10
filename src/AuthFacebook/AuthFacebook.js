import React from "react";

import FacebookLogin from "react-facebook-login";

const responseFacebook = (response) => {
  console.log("Login Result", response);
};
const componentClicked = (data) => {
  console.warn(data);
};

export default function AuthFacebook() {
  return (
    <>
      <div>
        {" "}
        <FacebookLogin
          appId="1171895960289611"
          autoLoad={true}
          fields="name,email,picture"
          onClick={componentClicked}
          callback={responseFacebook}
          className="facebook"
        />
      </div>
    </>
  );
}
