import MainPage from "./Home/Header/MainPage";
import {Header} from "./Home/Header/header";
import {Routes, Route, useSearchParams} from "react-router-dom";
import {AboutPage} from "./AboutPage/About_page";
import {TrainingsPage} from "./Trainings_page/Trainings_page";
import {Modal} from "./Modal/Modal";
import {useState} from "react";
import './App.css'

export default function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchParms, setSearchParams] = useSearchParams()
    const handleOpenModal = () => {
        setIsModalOpen(true)
        document.body.style.overflow = "hidden";
    }
    const handleCloseModal = () => {
        setIsModalOpen(false)
        document.body.style.overflow = "";
        setSearchParams({
            continueAnimation: "1"
        })
    }
    return (
        <div className="app">
            <Header />
            <Routes>
                <Route path="/" element={<MainPage  handleOpenModal={handleOpenModal} />} />
                <Route path="/about-us" element={<AboutPage />}/>
                <Route path="/trainings" element={<TrainingsPage/>}/>
            </Routes>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal}/>
        </div>
    );
}
