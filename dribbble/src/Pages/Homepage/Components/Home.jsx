import Footer from "./Footer";
import FooterCarousel from "./FooterCarousel";
import Header from "./Header";
import ProfileCarousel from "./ProfileCarousel";
import HomeFeed from "./HomeFeed";

function Home() {
    return ( 
        <div>
            <Header />
            <ProfileCarousel />

            <HomeFeed />

            <Footer />
            <FooterCarousel />
        </div> 
     );
}

export default Home;