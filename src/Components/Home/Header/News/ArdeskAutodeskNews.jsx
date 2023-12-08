import "./ArdeskAutodeskNews.css"
import { LuArrowRightCircle } from "react-icons/lu";
import ardesk1 from '../../../../img/ardesk1.png'
import ardesk2 from '../../../../img/ardesk2.png'
import ardesk3 from '../../../../img/ardesk3.png'

export const ArdeskAutodeskNews = () => {
    const kategories_elem = [
        { kategories: "Education", title: "Are your students ready for Industry 4.0?", context: "New research reveals the core skills needed for modern manufacturing. It’s time to reshape your curriculum to match.", icon: "Get the report", url: ardesk1 },

        { kategories: "News", title: "Discover the latest Autodesk news and views", context: "Read company news, stories from those who design and make, and perspectives on the future of making.", icon: "Visit the newsroom", url: ardesk2 },
        { kategories: "Free trials", title: "Try Autodesk software for free", context: "Explore full-featured versions of Autodesk software, including AutoCAD, Inventor, 3ds Max, and more.", icon: "Download free trial ", url: ardesk3 },
    ]

    return (
        <div className="ardesk_autodesk_contanier">
            <span className="ardesk_autodeskTitle"> Ardesk & autodesk news</span>
            <h4 className="whats_new">what's new with us</h4>
            <div className="kategories_elem">
                {kategories_elem.map((item, i) => {
                    return (
                        <div className="kategories_elem_item" key={i}>
                            <div className="kategories_elem_text">
                                <span>{item.kategories}</span>
                                <h3>{item.title}</h3>
                                <div className="kategories_elem_title">
                                    <p>{item.context}</p>
                                </div>
                                <span className="line"></span>
                                <div className="icon_text">
                                    <LuArrowRightCircle />
                                    <p>{item.icon}</p>
                                </div>

                            </div>
                            <img src={item.url} alt={item.kategories} />
                        </div>
                    )
                })}
                <div className="background">
                   <h4>Today’s disruption, tomorrow’s transformation</h4>
                    <p>Successful digital transformation relies on a foundation of connected people, processes, and data. Autodesk’s cloud-based platform makes that all possible.</p>
                    <div className="arrowicon">
                        <LuArrowRightCircle />
                        <h6>Learn more about the Autodesk Platform</h6>

                    </div>
                </div>
            </div>

        </div>
    )
}