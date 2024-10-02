import "../Styles/FooterCarouselStyles.css";
import FooterCarouselCard from "./FooterCarouselCard";
import React, { useState, useEffect, useRef } from "react";

function FooterCarousel() {
    const [designs, setDesigns] = useState([]);
    const carouselRef = useRef(null);
    const scrollIntervalRef = useRef(null);

    useEffect(() => {
        fetch("http://localhost:8000/designs")
            .then((response) => response.json())
            .then((data) => {
                setDesigns([...data, ...data]); 
            });

        // Function to start the auto-scroll
        const startAutoScroll = () => {
            const scrollAmount = 1.3;
            const intervalTime = 20;
            
            scrollIntervalRef.current = setInterval(() => {
                if (carouselRef.current) {
                    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;

                    if (scrollLeft + clientWidth >= scrollWidth - 1) {
                        carouselRef.current.scrollTo({ left: 0, behavior: "auto" });
                    } else {
                        carouselRef.current.scrollBy({ left: scrollAmount, behavior: "auto" });
                    }
                }
            }, intervalTime);
        };

        // Function to stop the auto-scroll
        const stopAutoScroll = () => {
            clearInterval(scrollIntervalRef.current);
        };

        // Start scrolling on component mount
        startAutoScroll();

        // Listeners - to stop/resume scrolling
        const carouselEl = carouselRef.current;
        if (carouselEl) {
            carouselEl.addEventListener("mouseenter", stopAutoScroll);
            carouselEl.addEventListener("mouseleave", startAutoScroll);
        }

        // Cleanup function - to remove event listeners and intervals
        return () => {
            stopAutoScroll();
            if (carouselEl) {
                carouselEl.removeEventListener("mouseenter", stopAutoScroll);
                carouselEl.removeEventListener("mouseleave", startAutoScroll);
            }
        };
    }, []);

    return (
        <div className="footer-carousel-container">
            <div className="footer-carousel-items" ref={carouselRef}>
                {designs.map((design, index) => {

                        return (
                            <FooterCarouselCard
                                key={index}
                                name={design.name}
                                ImageSrc={design.ImageSrc}
                            />
                        );
                    })}
            </div>
        </div>
    );
}

export default FooterCarousel;
