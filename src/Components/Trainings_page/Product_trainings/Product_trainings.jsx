import "./Product_trainings.css"
import autodesk from "../../../img/Autocad.png"
import Revit from "../../../img/revit1.png"
import Inventor from "../../../img/inventor.png"
import max from "../../../img/3dsmax.png"
import star from "../../../img/star.png"
import star2 from "../../../img/star_2.png"
import {useMemo, useState} from "react"

export const ProductTrainings = () => {
    const [isBackgroundActive, setIsBackgroundActive] = useState(false)
    const Toggle = () => {
        setIsBackgroundActive(!isBackgroundActive)
    };
    const blocks =  [
        {url: autodesk, autodesk: "AUTODESK", subtitl: "AUTOCAD", price: `$300`, img: star, btn: "Register"},
        {url: Revit, autodesk: "AUTODESK", subtitl: "Revit", price: `$300`, img: star, btn: "Register"},
        {url: Inventor, autodesk: "AUTODESK", subtitl: "INVENTOR", price: `$300`, img: star, btn: "Register"},
        {url: max, autodesk: "AUTODESK", subtitl: "3DS MAX", price: `$300`, img: star2, btn: "Register"},
    ]

    return (
        <section className={`trainings_container ${isBackgroundActive ? 'trainings_container_active' : ''}`}>
            <div>
                <div className="toggle_btn_container">
                    <button className={`toggle_btn`} onClick={Toggle}/>
                </div>
                <div className="title-product">
                    <i>Autodesk product trainings</i>
                    <h4>Trainings</h4>
                    <p>Use the opportunities given by our training center and become even more successful. The aim of
                        our Training Centers in Yerevan and Vanadzor are to increase your skills level and knowledge of
                        3D CAD, engineering and construction. Register online for effective trainings in small groups,
                        conducted by highly professional and engaged instructors.</p>
                </div>
                <div className="trainings_block">
                    {
                        blocks.map((item, i) => (
                            <div className="trainings_blokItem" key={i}>
                                <div className={i === 1 ? "blokItem-image_active" : "blockItem-image"}>
                                    <img src={item.url} alt='block'/>
                                    <div className="blockItem-title">
                                        <span className="autodesk">{item.autodesk}</span>
                                        <h4>{item.subtitl}</h4>
                                    </div>

                                </div>
                                <div className={i === 1 ? "shadow_block" : "star_product"}>
                                    <b>{item.price}</b>
                                    <img src={item.img} alt='product' />
                                    <button className={i === 1 ? "star_btn" : "star_button"}>{item.btn}</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}