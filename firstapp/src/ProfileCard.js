const ProfileCard = ({ title, handle, color, image }) => {
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-1by1">
                    <img src={image} alt="Profile" />
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-left">
                        <figure className="image is-48x48">
                            <img src={image} alt="Profile" />
                        </figure>
                    </div>
                    <div className="media-content">
                        <div>{title}</div>
                        <div>{handle}</div>
                    </div>
                </div>
                <div class="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec iaculis mauris.
                        <br/>
                            <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                    </div>
            </div>
        </div>
    )
}

export default ProfileCard;