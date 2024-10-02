import "../Styles/FooterCarouselStyles.css";

function FooterCarouselCard({
    name, 
    ImageSrc}) 
    {
        return ( 
            <div className="footer-carousel-card">
                <div className="footer-carousel-card-image">
                    <img src={ImageSrc} alt={name} />
                </div>
                <div className="footer-carousel-card-text">
                    <p>{name}</p>
                </div>
            </div>
        );
    }

export default FooterCarouselCard;