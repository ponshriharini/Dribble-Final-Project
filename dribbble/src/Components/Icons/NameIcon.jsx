import "./NameIconStyles.css";

function NameIcon({user}) {

    const goToProfile = () => {
        window.location.href = "/profile";
    }

    return ( 
        <div className="name-icon-dropdown" onClick={() => goToProfile()}>{user[0]}</div>
     );
}

export default NameIcon;