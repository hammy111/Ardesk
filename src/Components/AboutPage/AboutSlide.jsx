import "./AboutSlide.css";

import img1 from "../../img/Photo1.png"
import img2 from "../../img/Photo2.png"
import img3 from "../../img/Photo.png"
import { useEffect, useState } from "react"

export const AboutSlide = () => {
    const [indexNow, setIndexNow] = useState(0);

    const images = [
        { url: img1 },
        { url: img2 },
        { url: img3 }
    ];
    const circles = [
        { circle: "" },
        { circle: "" },
        { circle: "" },

    ]

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndexNow((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(intervalId);
    }, []);


    return (
        <div className="about">
            <div className="slide_contanier">
                {images.map((item, i) => (
                    <img src={item.url} className={`imagesElements ${i === indexNow ? "visible" : ""}`} alt="images" />
                ))}
            </div>
            <div className="flex_items">
                <div className="items_slide">
                    {circles.map((item, i) => (
                        <div key={i} className={`circle_item ${i === indexNow ? "active" : ""}`}
                        onClick={()=>setIndexNow(i)}>{item.circle}</div>
                    ))}
                </div>
                <h5>Armenia, Vanadzor,  Shinararner str. 12</h5>
            </div>
        </div>
    );
};

