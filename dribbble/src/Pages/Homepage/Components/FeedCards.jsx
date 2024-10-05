import { BASE_URL } from "../../../Config";
import "../Styles/HomeFeedStyles.css";
import FeedCard from "./FeedCard";
import { useState, useEffect } from "react";

function FeedCards() {
    const [feed, setFeeds] = useState([]);

    useEffect(() => {
        fetch(BASE_URL + "/feed")
            .then((response) => response.json())
            .then((data) => {
                setFeeds([...data]); 
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