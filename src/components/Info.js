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
                <button><img src={emailLogo}/>Email</button>
                <button className="button2"><img src={linkedInLogo}/>LinkenIn</button>
            </div>
        </div>
    )
}

export default Info;