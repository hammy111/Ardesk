import "./Social.css"
import insta from "../../../img/inst.png"
import fb from "../../../img/fb.png"
import ink from "../../../img/in.png"


export const Social = () => {
    const media = [
        { url: insta, title: "Instagram", link: "instagram.com/Аrdesk.am" },
        { url: fb, title: "Facebook", link: "facebook.com/ardesk.am" },
        { url: ink, title: "linkedin", link: "linkedin.com/company/ardesk/" },
    ]
    return (
        <div className="social_media">
            <span className="media_span">Social media</span>
            <h4>Other sources</h4>
            <div className="social_icon">
            {media.map((item, i) => {
                return (
                  <div className="icons" key={i}>
                    <img src={item.url} alt='social'/>
                    <div className="icon_title">
                        <h4>{item.title}</h4>
                        <span className="icons_span">{item.link}</span>
                    </div>
                  </div>
                );
              })}
        </div>
        </div>
    )
}