import "./Footer.css"
import Group from "../../img/Group_5.png"
export const Footer = ()=>{

    const elem1 = [
        "Trainings",
        "Collection",
        "Software",
        "Hardware",
      ];
      const elem2 = [
        "AboutUs",
        "Products",
        "News",
       
      ];
      const elem3 = [
        "Partners",
        "Learn",
        "Privace Policy",
      ];
      const elem4 =[
        `“Griar" Business Centre- 4/6 Amiryan Str., Yerevan, Armenia.`,
        "VTC-12 Shinararner str., Vanadzor, Armenia.",
        "Info@ardesk.am",
        "+374 95 72 27 20"
      ]


    return(
        <div className="footer">
            <div className="logo_text">
            <div className="logo">
            <img src={Group} alt='group' />
            <h3>Ardesk</h3>
            </div>
            <p>We do believe that education is the guarantee of successful personal and professional life. Therefore we consider it our great mission to support students, teachers and universities in Armenia.</p>
            </div>
            <div className="footer_flex_elem">
            <div className="footer_elements">
            {elem1.map((item, i) => {
              return <p key={i}>{item}</p>;
            })}
            </div> <div className="footer_elements">
            {elem2.map((item, i) => {
              return <p key={i}>{item}</p>;
            })}
            </div>
            <div className="footer_elements">
            {elem3.map((item, i) => {
              return <p key={i}>{item}</p>;
            })}
            </div>
            <div className="footer_elements">
            {elem4.map((item, i) => {
              return <p key={i}>{item}</p>;
            })}
            </div>
            </div>
        </div>
    )
}