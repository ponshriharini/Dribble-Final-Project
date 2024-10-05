import { useNavigate } from "react-router-dom";
import "./NameIconStyles.css";

function NameIcon({user}) {

    const Navigate = useNavigate();

    const goToProfile = () => {
        Navigate("/Profile/LikedShots");
    }

    return ( 
        <div className="name-icon-dropdown" onClick={() => goToProfile()}>{user}</div>
     );
}

export default NameIcon;