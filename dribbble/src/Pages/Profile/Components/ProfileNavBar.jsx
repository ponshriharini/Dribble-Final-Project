import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../Styles/ProfileNavStyles.css";

function ProfileNavBar() {
    const navigate = useNavigate(); 
    const [activeLink, setActiveLink] = useState("LikedShots"); 

    const goToLikesShots = () => {
        setActiveLink("LikedShots"); 
        navigate("/Profile/LikedShots");
    };

    const handleNavClick = (linkName, path) => {
        setActiveLink(linkName); 
        navigate(path); 
    };

    return ( 
        <div className="profile-nav-bar">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a 
                                    className={`nav-link ${activeLink === "Work" ? "active" : ""}`} 
                                    onClick={() => handleNavClick("Work", "/Profile/Work")}
                                    href="#"
                                >
                                    Work
                                </a>
                            </li>
                            <li className="nav-item">
                                <a 
                                    className={`nav-link ${activeLink === "BoostedShots" ? "active" : ""}`} 
                                    onClick={() => handleNavClick("BoostedShots", "/Profile/BoostedShots")}
                                    href="#"
                                >
                                    Boosted Shots
                                </a>
                            </li>
                            <li className="nav-item">
                                <a 
                                    className={`nav-link ${activeLink === "Collections" ? "active" : ""}`} 
                                    onClick={() => handleNavClick("Collections", "/Profile/Collections")}
                                    href="#"
                                >
                                    Collections
                                </a>
                            </li>
                            <li className="nav-item">
                                <a 
                                    className={`nav-link ${activeLink === "LikedShots" ? "active" : ""}`} 
                                    onClick={() => handleNavClick("LikedShots", "/Profile/LikedShots")}
                                    href="#"
                                >
                                    Liked Shots
                                </a>
                            </li>
                            <li className="nav-item">
                                <a 
                                    className={`nav-link ${activeLink === "About" ? "active" : ""}`} 
                                    onClick={() => handleNavClick("About", "/Profile/About")}
                                    href="#"
                                >
                                    About
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
     );
}

export default ProfileNavBar;
