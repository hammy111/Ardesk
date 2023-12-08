import "./Certificate.css"
import shadow from "../../../img/certificate_shadow.png"
export const Certificate = () => {
return(
    <div className="certificate">
        <div className="certificate_bg">
        <div className="white"></div>
             <div className="black"></div>
        </div>
        <img src={shadow} alt='shadow'/>
    </div>
)
}