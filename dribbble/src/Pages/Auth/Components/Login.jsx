import React, { useState } from "react";
import AdContainer from "./AdContainer";
import AuthButton from "./AuthButton";
import "../Styles/AuthStyles.css";
import InputBox from "./InputBox";

const users = [
  { email: "Admin", password: "root" }
];

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if(response.status === 200){
        toast.success('Log Updated Successfully');
    }
    setTimeout(() => {
        Navigate('/DashBoard'); 
    }, 4000);

    if (user) {
        toast.success('Log Updated Successfully');
    }
    setTimeout(() => {
        Navigate('/DashBoard'); 
    }, 4000);
    } else {
      console.log("Login failed");
    }
  };

  return (
    <div className="login-main-container">
      <AdContainer />

      <div className="signup-container">
        <div className="signup-content">
          <h1 className="login-title">Sign in to Dribbble</h1>

          <AuthButton text="Sign in with Google" src="/Assets/Images/google-icon.png" isLight={true} />

          <div className="separator">or sign in with email</div>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="login-input-section">
              <h1 className="login-input-title">Username or Email</h1>
              <InputBox value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="password">
              <div><h1 className="login-input-title">Password</h1></div>
              <div className="forgot-password"><a href="#">Forgot?</a></div>
            </div>
            <InputBox value={password} onChange={(e) => setPassword(e.target.value)} type="password" />

            <AuthButton text="Sign In" src="" isLight={false} />
          </form>

          <div className="login-footer">
            Don't have an account? <a href="/signup">Sign up</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
