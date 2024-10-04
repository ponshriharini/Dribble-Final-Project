import React, { useEffect, useState } from "react";
import AdContainer from "./AdContainer";
import AuthButton from "./AuthButton";
import "../Styles/AuthStyles.css";
import InputBox from "./InputBox";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);

  const Navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8000/Users")
            .then((response) => response.json())
            .then((data) => {
            setUsers(data); 
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
        toast.success('Login success');
        setTimeout(() => {
            Navigate("/"); 
        }, 4000);
    } else {
      toast.error("Invalid credentials");
    }
  };

  return (
    <div>
        <ToastContainer />
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
    </div>
  );
}

export default Login;
