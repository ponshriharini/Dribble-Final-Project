import Footer from "./Footer";
import FooterCarousel from "./FooterCarousel";
import Header from "./Header";
import ProfileCarousel from "./ProfileCarousel";
import Navbar from "../../../Components/Navbar/Navbar";
import FooterLinks from "../../../Components/Footer/FooterLinks";
import DesignFeed from "./DesignFeed";
import { useEffect, useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function Home() {

    const { isLoggedIn } = useContext(AuthContext);
    const Navigate = useNavigate();

    useEffect(() => {
        if(isLoggedIn) {
            Navigate("/UserFeed");
        }
    }, []);

    return (  
        <div>
            <Navbar className={"peach-bg-nav"} />
            <Header />
            <ProfileCarousel />
            <DesignFeed />
            <Footer />
            <FooterCarousel />
            <FooterLinks />
        </div> 
     );
}

export default Home;