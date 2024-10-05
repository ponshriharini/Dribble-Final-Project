import React from 'react';
import { useEffect, useRef } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function FeedCard({ feed }) {

    const videoRef = useRef(null);

    const [isLiked, setIsLiked] = useState(false);
    const [isSaved, setIsSaved] = useState(false);

    const { isLoggedIn, Likes, setLikes, Saved, setSaved } = useContext(AuthContext);

    const Navigate = useNavigate();

    // Play video for 1 second and then pause
    useEffect(() => {
        if (feed.source_url.includes(".mp4") && videoRef.current) {
            const videoElement = videoRef.current;
            videoElement.play();
            
            const timeoutId = setTimeout(() => {
                videoElement.pause();
            }, 1000); 

            return () => clearTimeout(timeoutId);
        }
    }, [feed.source_url]);

    useEffect(() => {
        checkIfLiked();
        CheckIfSaved();
    }, []);

    const checkIfLiked = () => {
        if (Likes.includes(feed.id)) {
            setIsLiked(true);
        }
    };

    const handleLikeClick = () => {
        if (!isLoggedIn) {
            Navigate("/Login");
        } else {
            setIsLiked(!isLiked);
            if (!isLiked) {
                console.log("hello");
                setLikes((prevLikes) => [...prevLikes, feed.id]);
            } else {
                console.log("bye");
                setLikes((prevLikes) => prevLikes.filter((id) => id !== feed.id));
            }
        }
    };

    const CheckIfSaved = () => {
        if (Saved.includes(feed.id)) {
            setIsSaved(true);
        }
    };

    const handleSaveClick = () => {
        if (!isLoggedIn) {
            Navigate("/Login");
        } else {
            setIsSaved(!isSaved);
            if (!isSaved) {
                setSaved((prevSaved) => [...prevSaved, feed.id]);
            } else {
                setSaved((prevSaved) => prevSaved.filter((id) => id !== feed.id));
            }
        }
    };


    return (
        <div className="feed-card-container">
            <div className="feed-card-image">
                {feed.source_url.includes(".mp4") ? (
                    <video
                    width="300"
                    height="200"
                    muted
                    loop
                    onMouseEnter={e => e.target.play()}
                    onMouseLeave={e => e.target.pause()}
                >
                        <source src={feed.source_url} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <img src={feed.source_url} alt="feed content" />
                )}

                <div className="image-overlay"></div>

                <div className='overlay-icons'>
                    <div className="overlay-text">
                        {feed.caption}
                    </div>
                        
                    <div className="action-buttons">
                        <button className="save-button" onClick={() => handleSaveClick()}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" className={`icon  ${isSaved && "hover-fill"}`}>
                                <path d="M3.33337 5.2C3.33337 4.0799 3.33337 3.51984 3.55136 3.09202C3.74311 2.71569 4.04907 2.40973 4.42539 2.21799C4.85322 2 5.41327 2 6.53337 2H9.46671C10.5868 2 11.1469 2 11.5747 2.21799C11.951 2.40973 12.257 2.71569 12.4487 3.09202C12.6667 3.51984 12.6667 4.0799 12.6667 5.2V14L8.00004 11.3333L3.33337 14V5.2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>                    
                        </button>
                        <button className="like-button" onClick={() => handleLikeClick()}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" className={`icon ${isLiked && "hover-fill"} `} >
                                <path d="M10.7408 2C13.0889 2 14.6667 4.235 14.6667 6.32C14.6667 10.5425 8.11856 14 8.00004 14C7.88152 14 1.33337 10.5425 1.33337 6.32C1.33337 4.235 2.91115 2 5.2593 2C6.60745 2 7.48893 2.6825 8.00004 3.2825C8.51115 2.6825 9.39263 2 10.7408 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>                    
                        </button>
                    </div>
                </div>
            </div>

            <div className="feed-card-details">
                <img className="avatar" src={feed.profile_url} alt={`${feed.name}'s profile`} />
                <span className="name">{feed.name}</span>
                <span className="pro-badge">{feed.pro_or_team}</span>
                <span className="likes">
                <svg onClick={() => handleLikeClick()} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="rgb(159,159,167)" role="img" className={`icon fill-current shot-tools-icon ${isLiked && "hover-svg-fill"}`}>
                    <path d="M10.7408 2C13.0889 2 14.6667 4.235 14.6667 6.32C14.6667 10.5425 8.11856 14 8.00004 14C7.88152 14 1.33337 10.5425 1.33337 6.32C1.33337 4.235 2.91115 2 5.2593 2C6.60745 2 7.48893 2.6825 8.00004 3.2825C8.51115 2.6825 9.39263 2 10.7408 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                    {feed.like_count}
                </span>
                <span className="views">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" className="icon fill-current shot-tools-icon">
                    <path d="M8 3C4.36992 3 1.98789 6.21774 1.18763 7.49059C1.09079 7.64462 1.04237 7.72163 1.01527 7.84042C0.99491 7.92964 0.99491 8.07036 1.01527 8.15958C1.04237 8.27837 1.09079 8.35539 1.18763 8.50941C1.98789 9.78226 4.36992 13 8 13C11.6301 13 14.0121 9.78226 14.8124 8.50941L14.8124 8.50939C14.9092 8.35538 14.9576 8.27837 14.9847 8.15958C15.0051 8.07036 15.0051 7.92964 14.9847 7.84042C14.9576 7.72163 14.9092 7.64462 14.8124 7.4906L14.8124 7.49059C14.0121 6.21774 11.6301 3 8 3Z" fill="currentColor"></path>
                    <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" fill="white"></path>
                </svg>
                    {feed.view_count}
                </span>
            </div>
        </div>
    );
}

export default FeedCard;
