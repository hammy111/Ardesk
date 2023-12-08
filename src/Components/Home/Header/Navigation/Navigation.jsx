import React, { useState, useEffect } from "react";
import {Link, useLocation} from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import "./Navigation.css";
import { Dropdown } from "./components/Dropdown";
import { useTranslation } from "react-i18next";

export const Navigation = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isAboutPage = location.pathname === '/about-us';
  const onProductLinkClick = (ev) => {
    ev.preventDefault();
    setOpen(!open);
  };
  const { t } = useTranslation()
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <div className="header-container">
      <div className="links-container">
        <Link className="link" to={isAboutPage? '/' : "/about-us"}>
          {isAboutPage ? 'Home' :` ${t('about')}`}
        </Link>
        <Link
          className="link flex-center"
          to="/products"
          onClick={onProductLinkClick}
        >
          <span>{t("Products_title")}</span>
          <IoIosArrowDown
            className={`arrow_down ${open && "arrow_down_active"}`}
          />
        </Link>
        <span className="link">
          {t("news")}
        </span>
        <Link className="link" to="/trainings">
          {t("Train")}
        </Link>
      </div>
      <Dropdown open={open} />
    </div>
  );
};
