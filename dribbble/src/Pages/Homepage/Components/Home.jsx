import Footer from "./Footer";
import FooterCarousel from "./FooterCarousel";
import Header from "./Header";
import ProfileCarousel from "./ProfileCarousel";
import HomeFeed from "./HomeFeed";
import Navbar from "../../../CommonComponents/Navbar/Navbar";
import FooterLinks from "../../../CommonComponents/Footer/FooterLinks";

function Home() {
    return ( 
        <div>
            <Navbar />

            <Header />
            <ProfileCarousel />

            <HomeFeed />

            <Footer />
            <FooterCarousel />

            <FooterLinks />
        </div> 
     );
}

export default Home;