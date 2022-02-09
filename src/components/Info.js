import headShot from "../image/profile.jpg"
import emailLogo from "../image/Icon.png"
import linkedInLogo from "../image/Vector.png"
function Info() {
    return (
        <div className="header">
            <img src={headShot} alt="Picture of Ololade" />
            <h2 className="name">Ololade Otemade</h2>
            <p className="title">MERN Stack Engineer</p>
            <div className="contact-buttons">
                <a href="mailto:adeniyiotemade@gmail.com"><button type="submit"><img src={emailLogo} alt="Email-logo"/>Email</button></a>
                <a href="https://www.linkedin.com/in/ololade-otemade-72959613a/" target="_blank"><button type="submit" className="button2"><img src={linkedInLogo} alt="LinkenIn-logo"/>LinkenIn</button></a>
            </div>
        </div>
    )
}

export default Info;