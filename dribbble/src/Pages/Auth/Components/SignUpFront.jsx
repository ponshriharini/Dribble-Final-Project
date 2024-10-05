import React from "react";
import "../Styles/AuthStyles.css";
import AdContainer from "./AdContainer";
import AuthButton from "./AuthButton";

function SignUp() {
  return (
    <div className="signup-main-container">
      <AdContainer />

        <div className="signup-container">
                <div className="signup-content">
                    <h1 className="signup-title">Sign up to Dribbble</h1>

                    <AuthButton src="/Assets/Images/google-icon.png" text="Sign up with Google" isLight={false} />

                    <div className="separator">or</div>

                    <AuthButton text="Continue with email" isLight={true} />

                    <div className="signup-terms">
                        By creating an account you agree with our{" "}
                        <a href="#">Terms of Service</a>, <a href="#">Privacy Policy</a>, and
                        our default <a href="#">Notification Settings</a>.
                    </div>

                    <div className="signup-footer">
                        Already have an account? <a href="/login">Sign In</a>
                    </div>
                </div>
        </div>
    </div>
  );
}

export default SignUp;
