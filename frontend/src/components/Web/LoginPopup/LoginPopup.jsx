import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../../assets/assets";
const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");
  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} />
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your name" />
          )}
          <input type="email" placeholder="Your email" required />
          <input type="password" placeholder="Your password" required />
        </div>
        <button>{currState === "Sign Up" ? "Create accout" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>chấp nhận điều khoản</p>
        </div>
        {currState === "Login" ? (
          <p>
            Tạo tài khoản mới ? <span onClick={()=>setCurrState("Sign Up")}>tại đây</span>
          </p>
        ) : (
          <p>
            Bạn đã có tài khoản? <span onClick={()=>setCurrState("Login")}>Đăng nhập tại đây</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
