import "../Styles/FeedStyles.module.css";
import "../Styles/FeedStyles.css";
import { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { faLessThan } from "@fortawesome/free-solid-svg-icons";

function UserFeedNav() {
  const navCenterRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scrollRight = () => {
    if (navCenterRef.current) {
      navCenterRef.current.scrollBy({
        left: 200, 
        behavior: "smooth",
      });
    }
  };

  const scrollLeft = () => {
    if (navCenterRef.current) {
      navCenterRef.current.scrollBy({
        left: -200,
        behavior: "smooth",
      });
    }
  };

  const checkScroll = () => {
    if (navCenterRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = navCenterRef.current;

      // If scrollLeft is greater than 0, we can scroll left - user already scrolled or bar already scrolled
      setCanScrollLeft(scrollLeft > 0); 

      // If scrolled to the right edge, hide the right arrow
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth); 
    }
  };

  useEffect(() => {
    const navCenter = navCenterRef.current;
    if (navCenter) {
      navCenter.addEventListener("scroll", checkScroll);
      checkScroll(); 
    }

    return () => {
      if (navCenter) {
        navCenter.removeEventListener("scroll", checkScroll);
      }
    };
  }, []);

  return (
    <div className="user-feed-nav">
      <div className="nav-left">
        <button className="dropdown-btn">Following <FontAwesomeIcon icon={faAngleDown} className="dropdown-arrow ms-2"/></button>
      </div>

      <div className="nav-center-container">
        {canScrollLeft && (
          <div className="nav-arrow-left" onClick={scrollLeft}>
            <FontAwesomeIcon icon={faLessThan} />
          </div>
        )}

        <div className="nav-center" ref={navCenterRef}>
          <a href="#" className="active nav-link">Discover</a>
          <a href="#" className="nav-link">Animation</a>
          <a href="#" className="nav-link">Branding</a>
          <a href="#" className="nav-link">Illustration</a>
          <a href="#" className="nav-link">Mobile</a>
          <a href="#" className="nav-link">Print</a>
          <a href="#" className="nav-link">Product Design</a>
          <a href="#" className="nav-link">Typography</a>
          <a href="#" className="nav-link">Web Design</a>
        </div>

        {canScrollRight && (
          <div className="nav-arrow-right" onClick={scrollRight}>
            <FontAwesomeIcon icon={faGreaterThan} />
          </div>
        )}
      </div>

      <div className="nav-right">
        <button className="filter-btn">
            <img src="/Assets/Images/BurgerIcon.png" alt="Filter icon" className="filter-icon me-2" height="15px" width="15px" />
          Filters
        </button>
      </div>

    </div>
  );
}

export default UserFeedNav;
