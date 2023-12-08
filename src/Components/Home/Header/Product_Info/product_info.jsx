import { useState } from "react";
import "./product_info.css";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import { Scroll } from "../../../Scroll/Scroll"
import { useTranslation } from "react-i18next";
export const ProductInfo = () => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation()

  const product_elements = [
    { title: "AUTOCAD/ LT", img: "Autocad.png", id: 1 },
    { title: "REVIT", img: "Revit.png", id: 2 },
    { title: "CIVIL 3D", img: "Civil3d.png", id: 3 },
    { title: "INVENTOR", img: "inventor.png", id: 4 },
    { title: "NAVIWORK MANAGE", img: "Naviswork_manage.png", id: 5 },
    { title: "MUDBOX", img: "mdbx.png", id: 6 },
    { title: "MAYA", img: "Maya.png", id: 7 },
    { title: "FUSION 360", img: "Fusion360.png", id: 8 },
    { title: "3DS MAX", img: "3dsmax.png", id: 9 },
    { title: "ARNOLD", img: "arnold.png", id: 10 },
    { img: "dots.png", title: "All products", id: 11 },
  ];
  return (
    <div className={`product_info ${!open ? "" : "open"}`}>
      <h2 className="title">
        {t('productInfoTitle')}
      </h2>
      <p className="text">
        {t('productInfoDescription')}
      </p>
      <div className="wrapper">
        <div className={!open ? "what_we_have_wrapper_big" : "what_we_have_wrapper_big-active"} >
          <div className="what_we_have_wrapper">
            <div className="what_we_have_header">
              <h3 className="what_we_have_title">{t("What_we_have_title")}</h3>
              <IoIosArrowDown
                className={open ? "arrow_down" : "arrow_down_active"}
                onClick={() => {
                  setOpen(!open);
                }}
              />
            </div>
            <div className="what_we_have_contanier">


              <div className="what_we_have_product">
                <h3 className="product_title">{t("products")}</h3>
                <p className="product_description">
                  {t("weHave")}
                </p>
              </div>


              <span className="what_we_have_line"></span>


              <div className="what_we_have_product">
                <h3 className="product_title">{t("Train")}</h3>
                <p className="product_description">
                 {t( "certificate")}
                </p>
              </div>

            </div>



            <div className={`open_product_element_items ${!open ? "" : "opacity"}`} >

              <div className="product_element_items">
                {product_elements.map((item, i) => {
                  return (
                    <div className="product_element_items_item" key={i}>
                      <img src={require(`../../../../img/${item.img}`)} alt='product-element' />

                      <span className="item_title">{item.title}</span>
                    </div>
                  );
                })}
              </div>

              <div className="apply_for_software_trainings">
                <p>
                  If you want to become a licensed professional then apply for
                  software trainings.
                </p>
                <i>Register now  <IoIosArrowForward /></i>
                <span>
                  * The aim of our training centers is to give our students
                  fundamental knowledge and practical skills in the field of
                  construction and engineering.
                </span>
                <span>
                  Our trainings are held in small groups and in private formats,
                  conducted by highly qualified instructors.
                </span>
              </div>
            </div>
          </div>
       
        </div>
        <Scroll nextSectionName={'.programs'}/>
      </div>

    </div>)
}