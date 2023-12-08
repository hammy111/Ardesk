import {ArdeskAutodeskNews} from "../Home/Header/News/ArdeskAutodeskNews";
import { AboutSlide} from "./AboutSlide";
import {AboutUs} from "./About_Us/About_Us";
import {Description} from "./About_Us/Description/Description";
import {Social} from "./Social/Social";
import {Footer} from "../Footer/Footer"


export const AboutPage = () => {
    return (
        <>
            <AboutSlide />
            <AboutUs/>
            <Description/>
            <Social/>
            <ArdeskAutodeskNews/>
            <Footer/>
        </>
    )
}