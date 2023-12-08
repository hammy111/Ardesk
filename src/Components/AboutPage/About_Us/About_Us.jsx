import "./About_Us.css"
import { Scroll2 } from "./Scroll_2/Scroll_2"

export const AboutUs = () => {
    return (
        <div className="about_us_title">
            <span className="abTitle">It all started from that time.</span>
            <h3>About us</h3>
            <div className="about_context">
                <div className="text">
                    <p> <b>ArDesk is the  official representative, reseller and certified training center of AutoDesk in Vanadzor and Yerevan, Armenia.</b> Our company was founded in 2019, in Vanadzor. We offer licensed software, enabling professionals to create and design in a cyber-secure and high-speed environment. </p>
                </div>
                <div className="scroll_about">
                    <Scroll2  nextSectionName={'.operations'}/>
                </div>
            </div>
        </div>
    )
}