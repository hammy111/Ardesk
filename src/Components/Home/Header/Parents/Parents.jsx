import "./Parents.css"
import icn from "../../../../img/icn.png"
import autodesk from "../../../../img/autodesk.png"
import { useTranslation } from "react-i18next"
import { Scroll } from "../../../Scroll/Scroll"
export const OurParents = ()=>{
    const images=[
        {url:icn},
        {url:autodesk},
        {url:icn}
    ]
    const { t } = useTranslation()

    return(
        <div className="our_parents">
         <span className="our_parents_line"></span>
         <div className="about_us">
          <span className="about_us_title">{t('about')}</span>
          <h3>{t('our')}</h3>
         </div>
         <p>ArchiDutch is an exclusive architect, trusted consultant and service provider for the building industry with more than 20 years of experience in the Netherlands. We add value to the development of Armenia, its environment, history, people and future.</p>
       <div className="logos_images">
       {images.map((item,i)=>(
        <img key={i} src={item.url}  alt='logo'/>
       ))}
       </div>
       <button className="btn btn_circle">{t('readmore')}</button>
            <div className="scroll_nextsection">
            <Scroll nextSectionName={'.ardesk_autodesk_contanier'}/>

            </div>
        </div>
    )
}