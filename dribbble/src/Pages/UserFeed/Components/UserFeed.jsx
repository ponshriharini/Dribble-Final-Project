import FooterLinks from "../../../Components/Footer/FooterLinks";
import Navbar from "../../../Components/Navbar/Navbar";
import HomeFeed from "../../Homepage/Components/FeedCards";
import styles from "../Styles/FeedStyles.module.css";
import UserFeedNav from "./UserFeedNav";
import LoadButton from "./LoadButton";

function UserFeed() {
    return ( 
        <div className={styles.userFeedContainer}>
            <Navbar className={"white-bg-nav"} />
            <UserFeedNav />
            <HomeFeed />
            <LoadButton />
            <FooterLinks />
        </div>
    );
}

export default UserFeed;