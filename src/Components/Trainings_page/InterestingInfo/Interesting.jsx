import "./Interesting.css"
import mini_blok from "../../../img/miniblock.png"
export const Interesting  = () =>{
return(
    <div className="interesting">
        <div className="text">
        <p className="inform">
        If you want to become a licensed professional then apply for software trainings. The aim of our training centers is to give our students fundamental knowledge and practical skills in the field of construction and engineering. Our trainings are held in small groups and in private formats, conducted by highly qualified instructors.
        </p>
        </div>
        <div className="mini_bg">
            <img src={mini_blok} alt='mini-block'/>
        </div>
    </div>
)
}