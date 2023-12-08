import "./Description.css"

export const Description = () => {

    const elem_1 = [
        { title: "Our Mission", text: "It is to contribute to the growth of the useage of licensed software, as well as to be a training center providing a new educational quality in Armenia, introducing the successful European experience in the field of architectural and engineering education." },
        { title: "Our Values", text: "ArDesk is your partner in the new possible We don’t believe in waiting for progress, we believe in making it. We bring new experiences, new ideas, and new value to our customers, to help them advance their capabilities and create new opportunities." },
        { title: "Our Vission", text: "We are intended to empower innovators with the knowledge and software to create the  technology that will help  people conquer new possibilities" },
    ]
    const elem_2 = [
        { title: "About Autodesk", text: "Find out more about Autodesk news, initiatives, and career opportunities, or contact our public relations office." },
        { title: "Corporate and office locations", text: "ArDesk is your partner in the new possible We don’t believe in waiting for progress, we believe in making it. We bring new experiences, new ideas, and new value to our customers, to help them advance their capabilities and create new opportunities." },
        { title: "Authorized Autodesk Partner", text: "We are intended to empower innovators with the knowledge and software to create the  technology that will help  people conquer new possibilities" },
    ]
    return (
        <div className="operations">
            <p className="text1">Autodesk makes software for people who make things. If you’ve ever driven a high-performance car, admired a towering skyscraper, used a smartphone, or watched a great film, chances are you’ve experienced what millions of Autodesk customers are doing with this software.</p>
            <div className="elem_1_description">
                {elem_1.map((item, i) => (
                    <div className="elem__items" key={i}>
                        <h3>{item.title}</h3>
                        <span className="line"></span>
                        <p>{item.text}</p>
                    </div>

                ))}
            </div>
            <div className="elem_2_description">
            {elem_2.map((item, i) => (
                    <div className="elem__items" key={i}>
                        <h3>{item.title}</h3>
                        <span className="line_2"></span>
                        <p>{item.text}</p>
                    </div>

                ))}
   </div>
        </div>

    )
}