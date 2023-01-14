export default function Card (props) {
    console.log(props);
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img className="card-img" src={`images/${props.coverImg}`} />
            <div className="card-stats">
            <img className="card-star-img" src="images/star.svg" />
            <span className="card-rating">{props.stats.rating}</span>
            <span className="card-rating-qty grey">({props.stats.reviewCount}) • </span>
            <span className="card-country">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span>/ person</p>
            {/* <img className="card-img" src="images/wedding.png" />
            <img className="card-img" src="images/bike.png" /> */}
        </div>
    )
}