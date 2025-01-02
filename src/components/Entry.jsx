export default function Entry(props) {
    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <img 
                    className="main-image"
                    src={props.details.img.src}
                    alt={props.details.img.alt}
                />
            </div>
            <div className="info-container">
                <img 
                    className="marker"
                    src="../images/marker.png" 
                    alt="map marker icon"
                />
                <span className="country">{props.details.country}</span>
                <a href={props.details.googleMapsLink} target="_blank">View on Google Maps</a>
                <h2 className="entry-title">{props.details.title}</h2>
                <p className="trip-dates">{props.details.dates}</p>
                <p className="entry-text">{props.details.text}</p>
            </div>
            
        </article>
    )
}