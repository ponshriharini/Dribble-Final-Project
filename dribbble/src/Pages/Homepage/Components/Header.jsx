import "../Styles/HeaderStyles.css";

function Header() {
    return ( 
        <div className="Hero-Header-Container">
            <div className="Hero-Badge">
                <a data-track-cta="Get started" href="/signup/new?return_to_after_signup=%2Fget-started">Over 3 million ready-to-work creatives!</a>
            </div>
            <h1 className="Hero-Heading">
                The world's destination for design
            </h1>
            <div className="Hero-Subheading">
                Get inspired by the work of millions of top-rated designers & agencies around the world.
            </div>
            <div className="Button-Container Header-Actions">
                <a href="#" className="Action-Button-Dark">Get started</a>
            </div>
        </div>
     );
}

export default Header;