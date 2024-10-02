import "../Styles/FooterStyles.css";

function Footer() {
    return ( 
        <div className="Footer-Container">
            <div className="Footer-Content">
                <div className="Footer-Heading">
                    Find your next designer today
                </div>
                <div className="Footer-Text">
                    The world's leading brands use Dribbble to hire creative talent. Browse millions of top-rated portfolios to find your perfect creative match.
                </div>
                <div className="Footer-Actions Button-Container">
                    <button className="Footer-Button Action-Button-Dark">Get started now</button>
                    <button className="Footer-Button Action-Button-Light">Learn about hiring</button>
                </div>
                <div className="Footer-Text mt-3">
                    Are you a designer? <a href="#" className="Link">Join Dribbble</a>
                </div>
            </div>
        </div>
     );
}

export default Footer;