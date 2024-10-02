import Footer from "./Footer";
import FooterCarousel from "./FooterCarousel";
import FooterLinks from "./FooterLinks";
import Header from "./Header";
import ProfileCarousel from "./ProfileCarousel";

function Home() {
    return ( 
        <div>
            <Header />
            <ProfileCarousel />

            <Footer />
            <FooterCarousel />
            <FooterLinks />
        </div> 
     );
}

export default Home;