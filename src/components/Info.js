import headShot from "../image/Headshot.jpg"
import emailLogo from "../image/Icon.png"
import linkedInLogo from "../image/Vector.png"
function Info() {
    return (
        <div className="header">
            <img src={headShot} alt="Picture of Ololade" />
            <h2 className="name">Ololade Otemade</h2>
            <p className="title">Frontend Developer</p>
            <div className="contact-buttons">
                <button type="submit"><a href="mailto:adeniyiotemade@gmail.com"><img src={emailLogo} alt="Email-logo"/>Email</a></button>
                <button type="submit" className="button2"><a href="https://www.linkedin.com/in/ololade-otemade-72959613a/" target="_blank"><img src={linkedInLogo} alt="LinkenIn-logo"/>LinkenIn</a></button>
            </div>
        </div>
    )
}

export default Info;