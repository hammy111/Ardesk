import { Footer } from "../Footer/Footer"
import { ArdeskAutodeskNews } from "../Home/Header/News/ArdeskAutodeskNews"
import { Certificate } from "./Certificate/Certificate"
import { Interesting } from "./InterestingInfo/Interesting"
import {ProductTrainings} from "./Product_trainings/Product_trainings"
import { Trainings } from "./Trainings"


export const TrainingsPage = ()=>{
    return(
      <>
      <Trainings/>
      <Interesting/>
      <ProductTrainings/>
      <Certificate/>
      <ArdeskAutodeskNews/>
      <Footer/>
      </>
    )
}