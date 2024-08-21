import React, { useContext, useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/web/assets";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";


const LoginPopup = ({ setShowLogin }) => {

  const {url,setToken} = useContext(StoreContext);
  const [currState, setCurrState] = useState("Login");
  const [data,setData] = useState({
    name:"",
    email:"",
    password:""
  })

  const onChangeHandler = (e) => {
    const name = e.target.name
    const value = e.target.value
    setData(data=>({...data,[name]:value}))
  }

  const onLogin = async (e) => {
     e.preventDefault()
     let newUrl = url;
     if(currState === "Login"){
      newUrl += "/api/user/login"
     }
     else{
      newUrl += "/api/user/register"
     }

     const res = await axios.post(newUrl,data);
     if(res.data.success){
      setToken(res.data.token);
      localStorage.setItem("token",res.data.token);
      setShowLogin(false)
     }
     else{
        alert(res.data.message)
     }
  }
    return (
    <div className="login-popup">
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} />
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? (
            <></>
          ) : (
            <input type="text" name='name' onChange={onChangeHandler} value={data.name} placeholder="Your name" />
          )}
          <input type="email" name='email' onChange={onChangeHandler} value={data.email} placeholder="Your email" required />
          <input type="password" name='password' onChange={onChangeHandler} value={data.password} placeholder="Your password" required />
        </div>
        <button type="submit" >{currState === "Sign Up" ? "Create accout" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>chấp nhận điều khoản</p>
        </div>
        {currState === "Login" ? (
          <p>
            Tạo tài khoản mới ?{" "}
            <span onClick={() => setCurrState("Sign Up")}>tại đây</span>
          </p>
        ) : (
          <p>
            Bạn đã có tài khoản?{" "}
            <span onClick={() => setCurrState("Login")}>Đăng nhập tại đây</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
