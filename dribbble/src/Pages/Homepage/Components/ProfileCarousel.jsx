import React, { useState, useEffect, useRef } from "react";
import ProfileCard from "./ProfileCard";
import "../Styles/ProfileCarouselStyles.css";
import { getProfileData } from "../../../Axios/axios";

function ProfileCarousel() {
    const [profiles, setProfiles] = useState([]);
    const carouselRef = useRef(null);

    useEffect(() => {

        getProfileData()
        .then((response) => {
            setProfiles(response.data); 
        })
        .catch((error) => {
            console.error('Error fetching Profile data:', error);
        });


        const scrollAmount = 1; // Scroll step (increase to scroll faster)
        const intervalTime = 20; // Scroll interval (reduce to make it smoother) in ms
        
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
