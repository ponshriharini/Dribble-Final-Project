import "../Styles/ProfileCardStyles.css";

function ProfileCard({ name, designation, tags, backgroundImage }) {
    const isVideo = backgroundImage.includes(".mp4");

    return (
        <div className="profile-card">
            {isVideo ? (
                <video className="background-video" autoPlay muted loop>
                    <source src={backgroundImage} type="video/mp4" />
                </video>
            ) : (
                <div
                    className="profile-background"
                    style={{ backgroundImage: `url(${backgroundImage})` }}
                />
            )}
            <div className="profile-card-content">
                <div className="name">{name}</div>
                <div className="designation">{designation}</div>
                <div className="tags">
                    {tags.map((tag, index) => (
                        <div key={index} className="tag">
                            {tag}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;
