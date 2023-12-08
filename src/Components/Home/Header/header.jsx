import {CiSearch} from "react-icons/ci";
// import {TfiWorld} from "react-icons/tfi";
import "./header.css"
import {Navigation} from './Navigation/Navigation'
import {Link} from 'react-router-dom';
import {useTranslation} from "react-i18next";
import {useState} from "react";
import ar from "../../../img/Group_5.png"
import group from "../../../img/Group.png"
export const Header = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('en')
    const {i18n} = useTranslation();
    const handleChangeLanguage = (lng) => {
        setSelectedLanguage(lng);
        i18n.changeLanguage(lng)
    }
    // const languages = [{
    //     label: 'US',
    //     key: 'en'
    // }, {
    //     key: 'hy',
    //     label: 'ՀՅ'
    // }]
    return (
        <div>
            <header className="header">
                <div className="header_logo">
                    <img src={ar} alt="ardesk" />
                    <Link to='/'>ARDESK</Link>
                    <span className='header-divider'></span>
                    <CiSearch/>
                </div>
                <div className="header_info">
                    <p>+374 95 722 720</p>
                    <div className="header_language">
                          <img src={group} alt="group" onClick={()=>{handleChangeLanguage('en')}} />
                        <span className={selectedLanguage === 'en' ? 'header-divider' : 'header-divider-none'}></span>
                        <div className="change_language_container">
                          <h3 className={selectedLanguage === 'en' ? "" :"hidden"} >US</h3>
                          <h3 onClick={()=>{handleChangeLanguage('hy')}}>ՀՅ</h3>
                        </div>
                        <button className='modal_btn' >order a call</button>
                    </div>
                </div>

            </header>
            <Navigation/>
        </div>


    )
}