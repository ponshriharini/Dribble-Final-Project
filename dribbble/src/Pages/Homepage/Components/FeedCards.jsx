import "../Styles/HomeFeedStyles.css";
import FeedCard from "./FeedCard";
import { useState, useEffect } from "react";
import { getFeedData } from "../../../Axios/axios";

function FeedCards() {
    const [feed, setFeeds] = useState([]);

    useEffect(() => {

        getFeedData()
        .then((response) => {
            setFeeds(response.data); 
        })
        .catch((error) => {
            console.error('Error fetching feed data:', error);
        });

    }, []);

    return ( 
        <div className="home-feed-main-container">
            <div className="feed-cards">
                <div className="feed-cards-container">
                    {feed.map((feed, index) => (
                        <FeedCard key={index} feed={feed} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FeedCards;