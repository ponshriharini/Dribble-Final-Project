import NameIcon from "../../../Components/Icons/NameIcon";
import "../Styles/ProfileStyles.css";
import { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthContext";    
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

function Profile() {
    const { user } = useContext(AuthContext);

    return ( 
        <div className="profile-container">
            <div className="profile-header">
                { user && user.email && <NameIcon user={user.email[0]} /> }
            </div>

            <div className="profile-content">
                <p className="profile-name">{user?.email ?? "Unknown User"}</p>
                <p className="profile-country">{user?.country ?? "Unknown Country"}</p>
                <button className="Action-Button-Light">Edit Profile</button>
                <button className="Action-Button-Light round-button">
                    <FontAwesomeIcon icon={faEllipsis} />
                </button>
                <button className="account-type">{user?.AccountType ?? "Free Account"}</button>
            </div>
        </div>
    );
}

export default Profile;
