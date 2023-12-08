import "./Trainings.css"
import man from "../../img/manZ_index.png"
import mdbx from "../../img/mdbx.png"
export const Trainings = ()=>{
    return(
        <div className="trainings">
          <div className="bg">
            <div className="informacia">
                 <div className="logo"> 
                    <img src={mdbx} alt='trainings'/>
                    <div className="titles">
                        <span className="trainings_title_1"> Autodesk</span>
                        <h4>Mudbox</h4>
                    </div>
                 </div>
                 <div className="context"> 
                 <p>Sclupt detailed characters  and models </p>
                 <span className="context_span">Autodesk industry partnerships open new possibilities for artists everywhere</span>
                 </div>
                 <div className="circle">
                    <div className="circle_1"></div>
                    <div className="circle_2"></div>
                    <div className="circle_3"></div>
                 </div>
            </div>
            <img src={man} className="z-index" alt='man'/>
          </div>
        </div>
    )
}