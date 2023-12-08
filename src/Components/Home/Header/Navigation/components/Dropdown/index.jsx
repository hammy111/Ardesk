import React, { useMemo } from "react";
import architectureIcon from "../../../../../../img/architectureIcon.png";
import productDesignIcon from "../../../../../../img/productDesignIcon.png";
import mediaEntertainment from "../../../../../../img/mediaEntertainment.png";
import "./Dropdown.css";

export const Dropdown = ({ open }) => {
  const cards = [
      {
        title: "Architecture, Engineering & Construction",
        description: "AutoCAD Revit Civil 3D AutoCAD LT BIM Collaborate Pro",
        child: {
          imageSrc: architectureIcon,
          title: "Architecture, Engineering & Construction collection",
          description:
            "Integrated BIM tools, including Revit, AutoCAD, and Civil 3D",
        },
      },
      {
        title: "Product Design & manufacturing",
        description: "Inventor AutoCAD Fusion 360 Navisworks",
        child: {
          imageSrc: productDesignIcon,
          title: "Product Design & manufacturing collection",
          description:
            "Professional CAD/CAM tools built on Inventor and AutoCAD",
        },
      },
      {
        title: "Media & Entertainment",
        description: "3ds Max Maya Arnold Mudbox ShotGrid",
        child: {
          imageSrc: mediaEntertainment,
          title: "Media & Entertainment collection",
          description:
            "Integrated BIM tools, including Revit, AutoCAD, and Civil 3D",
        },
      },
    ];
  
  return (
    <div className={`dropdown ${open ? "open" : ""}`}>
      <div className="cards_container">
        {cards.map((item, i) => (
          <div key={i} className="card">
            <h3 className="card_title">{item.title}</h3>
            <div className="card_child_container">
              <div className="card_child">
                <div className="card_child_header">
                  <img src={item.child.imageSrc} alt="card" />
                  <span>{item.child.title}</span>
                </div>
                <span className="divider" />
                <span>{item.child.description}</span>
              </div>
              <span className="card_divider" />
              <span className="card_description">{item.description}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
        }