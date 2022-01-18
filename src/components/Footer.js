import twitterLogo from "../image/Twitter.png"
import instagramLogo from "../image/Instagram.png"
import githubLogo from "../image/GitHub.png"

function Footer() {
    return (
        <div className="footer">
            <a href="https://github.com/iamLolade" target="_blank"><img src={githubLogo} alt="GitHub-ogo" /></a>
            <a href="https://twitter.com/cavemann__" target="_blank"><img src={twitterLogo} alt="Twitter-logo" /></a>
            <a href="https://www.instagram.com/_iamlolade/" target="_blank"><img src={instagramLogo} alt="Instagram-logo" /></a>
        </div>
    )
}

export default Footer;