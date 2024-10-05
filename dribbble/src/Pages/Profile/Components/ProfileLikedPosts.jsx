import FooterLinks from "../../../Components/Footer/FooterLinks";
import Navbar from "../../../Components/Navbar/Navbar";
import LoadButton from "../../UserFeed/Components/LoadButton";
import styles from "../Styles/LikedPosts.module.css";
import Profile from "./Profile";
import LikedPosts from "./LikedPosts";
import ProfileNavBar from "./ProfileNavBar";

function ProfileLikedPosts() {

    return ( 
        <div className={styles.likedPostsContainer}>
            <Navbar className={"white-bg-nav"} />
            <Profile />
            <ProfileNavBar />
            <hr className={styles.navHR}/>
            <LikedPosts />
            <LoadButton />
            <FooterLinks />
        </div>
     );
}

export default ProfileLikedPosts;