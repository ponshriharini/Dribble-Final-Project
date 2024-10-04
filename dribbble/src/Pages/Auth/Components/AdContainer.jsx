import "../Styles/AdStyles.css";

function AdContainer() {
    return ( 
        <div className="ad-container">
            <a href="https://dribbble.com/" className="ad-logo">
               <img src="/Assets/Images/dribbble-logo.png" alt="dribbble-logo" height="55px" width="120px" />
            </a>
            <video
            playsInline
            className="auth-sidebar-video"
            autoPlay
            loop
            muted
            src="https://cdn.dribbble.com/uploads/48292/original/30fd1f7b63806eff4db0d4276eb1ac45.mp4?1689187515"
            ></video>
            <div className="ad-content">@nguyenhut</div>
        </div>
     );
}

export default AdContainer;