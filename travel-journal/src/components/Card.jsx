export default function Card (props) {
    return (
        <div className="card">
            <img className="card-main-img" src={props.imageUrl} /> 
            <div className="card-content-wrapper">
                <div className="card-content-top">
                    <img className="card-location-icon" src='images/location-pointer.svg' />
                    <h5 className="card-location-title">{props.location}</h5>
                    <a className="card-location-link" href={props.googleMapsUrl}>View on google maps</a>
                </div>
                <h1 className="card-main-title">{props.title}</h1>
                <span className="card-date">{props.startDate}{props.endDate}</span>
                <p className="card-description">{props.description}</p>
            </div>
           
        </div>
    )
}