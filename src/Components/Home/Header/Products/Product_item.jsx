import {useEffect, useState, useCallback, useRef} from 'react';
import arrow from "../../../../img/Arrow 1.png";
import { data, children } from "../Products/Data.jsx";
import Items from '../Products/Item.jsx';
import './Product_item.css';
import { Scroll2 } from '../../../AboutPage/About_Us/Scroll_2/Scroll_2.jsx';
import {useSearchParams} from "react-router-dom";
import { useTranslation } from "react-i18next";

export const ProductItem = ({handleOpenModal}) => {
  const { t } = useTranslation()

  const [currentIndex, setCurcentIndex] = useState(0);
  const [currentId, setCurrentId] = useState(data[0].id);
  const [queryParams, setQueryParams] = useSearchParams()
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut = useRef(null);

  const handelDots = useCallback(() => {
    setCurcentIndex(currentIndex === data.length - 1 ? 0 : currentIndex + 1);
  }, [currentIndex]);

  useEffect(() => {
    data.forEach(({ id }, idx) => {
      if (idx === currentIndex) setCurrentId(id);
    });
  }, [currentIndex]);

  const startAnimation = () => {
    timeOut.current = autoPlay && setTimeout(() => handelDots(), 2500);
  }
  useEffect(() => {
    startAnimation()
  }, [currentIndex]);

  useEffect(() => {
    if(Number(queryParams.get('continueAnimation'))) {
      startAnimation();
      setQueryParams({})
    }
  }, [queryParams]);
  const handleClickOnBtn = () => {
    clearTimeout(timeOut.current)
    handleOpenModal()
  }

  return (
    <div className="programs">
      <div className="programs-title">
        <span className="programs-sub-title">{t("productcollection")}</span>
        <h1 className="programs-title">{t("Products_title")}</h1>
      </div>
      <div className="programs-container">
        <div
          className="carousel"
          onMouseEnter={() => {
            setAutoPlay(false);
            clearTimeout(timeOut.current);
          }}
          onMouseLeave={() => {
            setAutoPlay(true);
          }}>
          <div className="carousel-wrapper">
            {data.map(({ id, imageBg, text, icon, subtitle, title }, idx) => {
              return (
                <div
                  key={id}
                  className={
                    idx === currentIndex ? 'carousel_card carousel_card-active' : 'carousel_card '
                  }
                  style={{ backgroundImage: `url(${imageBg})` }}>
                  <div className="carousel_details-card">
                    <div className="carousel_card-sub-title">
                      <img src={icon} alt="icon" className="icon" />
                      <h6
                        className="card_sub-title">
                        {subtitle}
                      </h6>
                    </div>
                    <div className="card_content">
                      <h4 className="card-title">{title}</h4>
                      <p className="card-description">{text}</p>
                    </div>
                    <button className="card_button">Shop all products</button>
                  </div>
                </div>
              );
            })}
            <div className="dots-list">
              {data.map((_, idx) => (
                <div
                  key={idx}
                  className={
                    currentIndex === idx
                      ? 'dots-list-item '
                      : ' dots-list-item active'
                  }
                  onClick={() => setCurcentIndex(idx)}></div>
              ))}
            </div>
          </div>
        </div>
        <div className="item-container">
          {children.map(
            (item) =>
              currentId === item.parentId && <Items key={item.id} item={item} />
          )}
          <div className="registerBlock">
            <h3>Do you want to learn how to work with Autodesk software and get a license from Autodesk?</h3>
            <p>Display your Autodesk Certified certificate, use the Autodesk Certified logo, highlight your.</p>
          
            <button className='btn-reg' onClick={handleClickOnBtn}>
              <span><img src={arrow} alt="arrow" /><p>Register now</p> </span>
              Register now
            </button>
          </div>
         
        </div>
      
      </div>
      <div className="scroll_element">
      <Scroll2 nextSectionName={'.our_parents'}/>
      </div>
    </div>
  );
};


