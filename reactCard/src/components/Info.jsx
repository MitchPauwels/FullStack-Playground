export default function Info () {
    return(
        <div className="info-container container">
            <img src='images/Profile.jpg' className="profile-img" alt='/'/>
            <h1 className="info-title">Mitch Pauwels</h1>
            <h3 className="info-subtitle">FullStack Software Engineer</h3>
            <p className="info-website">MitchPauwels@netlify.com</p>
            <div className="info-socials-container">
            <div className="email-container">
                <img className="icon-email" src="images/email.svg"/>
                <a className="btn btn-email" href="/">Email</a>
            </div>
            <div className="linkedin-container">
                <img className="icon-linkedin" src="images/linkedin.svg"/>
                <a className="btn btn-linkedin" href="/">Linkedin</a>
            </div>
            </div>


        </div>
    )
}