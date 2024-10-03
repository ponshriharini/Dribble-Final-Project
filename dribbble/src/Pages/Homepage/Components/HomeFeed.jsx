import "../Styles/HomeFeedStyles.css";
import FeedCard from "./FeedCard";
import { useState, useEffect } from "react";

function HomeFeed() {
    const [feed, setFeeds] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/feed")
            .then((response) => response.json())
            .then((data) => {
                setFeeds([...data]); 
            });
    }, []);

    return ( 
        <div className="home-feed-main-container">
            <h2 className="home-feed-title">Explore inspiring designs</h2>
            <div className="feed-cards">
                <div className="feed-cards-container">
                    {feed.map((feed, index) => (
                        <FeedCard key={index} feed={feed} />
                    ))}
                </div>
            </div>
            <div className="feed-browse-more">
                <a href="#" className="feed-browse-button">Browse more inspiration</a>
            </div>
        </div>
    );
}

export default HomeFeed;