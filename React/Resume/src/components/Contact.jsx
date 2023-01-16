import React from "react";

const Contact = () => {
	return (
		<div className="contact-container">
        <div className="contact-head">
        <img
				src="../images/profile-pic.jpeg"
				alt="Profile"
				className="profile-img"
			/>
            <div className="contact-head-side">
            <h2 className="contact-title">Mitch Pauwels</h2>
            <p>Full-Stack Software Engineer</p>
            </div>

        </div>

			<div className="contact-info">
				<p>Country: United Kingdom</p>
				<p>Nationality: Belgian</p>
				<p>Phone: +44 7555 05 76 74</p>
				<p>Email: mitch.pauwels@hotmail.com</p>
				<div className="social-icons">
					<div className="linkedin-container">
						<img src="./images/linkedin.svg" />
						<a href="https://linkedin.com/in/mitchpauwels" className="linkedin">
							linkedin.com/in/mitchpauwels
						</a>
					</div>
					<div className="github-container">
						<img src="./images/github.svg" />
						<a href="http://github.com/MitchPauwels" className="github">github.com/MitchPauwels</a>
					</div>
					<div className="twitter-container">
						<img src="./images/twitter.svg" />
						<a href="https://twitter.com/mitchpauwels" className="twitter">twitter.com/mitchpauwels</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
