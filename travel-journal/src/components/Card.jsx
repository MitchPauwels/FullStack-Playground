export default function Card (props) {
    return (
        <div className="card">
        {/* {props.imageUrl} */}
            <img className="card-main-img" src='/' /> 
            <div className="card-content-wrapper">
                <div className="card-content-top">
                    <img className="card-location-icon" src='images/location-pointer.svg' />
                    <h5 className="card-location-title">Japan</h5>
                    <a className="card-location-link" href="/">View on google maps</a>
                </div>
                <h1 className="card-main-title">Mount Fuji</h1>
                <span className="card-date">12 Jan, 2021 - 24 Jan, 2021</span>
                <p className="card-description">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
           
        </div>
    )
}