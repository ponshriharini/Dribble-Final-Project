import React, { useState, useEffect, useRef } from "react";
import ProfileCard from "./ProfileCard";
import "../Styles/ProfileCarouselStyles.css";

function ProfileCarousel() {
    const [profiles, setProfiles] = useState([]);
    const carouselRef = useRef(null);

    useEffect(() => {
        fetch("http://localhost:8000/profiles")
            .then((response) => response.json())
            .then((data) => {
                setProfiles([...data, ...data]); // Duplicating profiles to create an infinite effect
            });

        // Create a smooth auto-scroll effect
        const scrollAmount = 1; // Scroll step (increase to scroll faster)
        const intervalTime = 20; // Scroll interval (reduce to make it smoother)
        // Scroll smoothly by a larger step (1px) every 20ms
        
        const scrollInterval = setInterval(() => {
            if (carouselRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;

                if (scrollLeft + clientWidth >= scrollWidth - 5) {
                    carouselRef.current.scrollTo({ left: 0, behavior: "auto" });
                } else {
                    carouselRef.current.scrollBy({ left: scrollAmount, behavior: "auto" });
                }
            }
        }, intervalTime);

        // Cleanup the interval on component unmount
        return () => clearInterval(scrollInterval);
    }, []);

    return (
        <div className="carousel-wrapper">
            <div className="profile-container" ref={carouselRef}>
                {profiles.map((profile, index) => (
                    <ProfileCard
                        key={index}
                        name={profile.name}
                        designation={profile.designation}
                        tags={profile.tags}
                        backgroundImage={profile.backgroundImage}
                    />
                ))}
            </div>
        </div>
    );
}

export default ProfileCarousel;
