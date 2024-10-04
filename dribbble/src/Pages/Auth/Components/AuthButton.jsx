import "../Styles/AuthButtonStyles.css";

function AuthButton(props) {
    const { text, isLight, src } = props;

    return (
        <button className={`auth-btn ${isLight ? "auth-btn-light" : "auth-btn-dark"}`}>
            {
                src &&
                    <img className="auth-icon" src={src} height="16px" width="16px" />
            }
            {text}
        </button>
    );
}

export default AuthButton;
