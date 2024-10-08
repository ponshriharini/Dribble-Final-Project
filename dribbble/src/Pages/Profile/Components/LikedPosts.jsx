import { useEffect, useContext, useState } from "react";
import { AuthContext } from "../../../Contexts/AuthContext";
import FeedCard from "../../Homepage/Components/FeedCard";
import Styles from "../Styles/LikedPosts.module.css";
import { getFeedData } from "../../../Axios/axios";

function LikedPosts() {
    const { Likes } = useContext(AuthContext);
    const [FeedPosts, setFeedPosts] = useState([]);
    const [LikedPosts, setLikedPosts] = useState([]);

    useEffect(() => {
        fetchFeedPosts();
    }, []);

    useEffect(() => {
        filterLikedPosts();
    }, [FeedPosts, Likes]);

    const fetchFeedPosts = async () => {

        getFeedData()
        .then((response) => {
            setFeedPosts(response.data); 
        })
        .catch((error) => {
            console.error('Error fetching feed data:', error);
        });
    };


    const filterLikedPosts = () => {
        const likedPosts = FeedPosts.filter((post) => Likes.includes(post.id));
        setLikedPosts(likedPosts); 
    };

    return (
        <div className={Styles.likedFeedContainer}>
            {LikedPosts.map((post, index) => (
                <FeedCard key={index} feed={post} />
            ))}
        </div>
    );
}

export default LikedPosts;
