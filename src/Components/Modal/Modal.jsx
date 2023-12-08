import { createPortal } from 'react-dom'
import "./Modal.css"
import { useTranslation } from "react-i18next";
import { SubmitBtn } from "./SubmitBtn";
import { useState } from "react";
import { CloseButton } from './CloseButton';

export const Modal = ({ isOpen, onClose }) => {
    const { t } = useTranslation()

    const [info, setInfo] = useState({
        name: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        products: [],
    })

    const handleChange = (ev) => {
        setInfo({ ...info, [ev.target.name]: ev.target.value })
    }

    const ModalContent = (
        <div className={`order_call_modal_container ${isOpen ? 'open' : ''}`}>
            <div className='order_call_modal_content'>
                <div className='order_call_modal_form'>
                    <div className="close_wrapper"  onClick={onClose}>
                        <CloseButton />
                    </div>
                    <div className="names_container">
                        <label>
                            {t('orderCallModal.name')}
                            <input name="name" value={info.name} onChange={handleChange} />
                        </label>
                        <label>
                            {t('orderCallModal.lastName')}
                            <input name="lastName" value={info.lastName} onChange={handleChange} />
                        </label>
                    </div>
                    <label>
                        {t('orderCallModal.email')}
                        <input name="email" value={info.email} onChange={handleChange} />
                    </label>

                    <label>
                        {t('orderCallModal.phone')}
                        <input name="phoneNumber" value={info.phoneNumber} onChange={handleChange} />
                    </label>

                    <label>
                        {t('orderCallModal.chooseTheProduct')}
                        <select>
                            <option>
                                None
                            </option>
                        </select>
                    </label>
                    <div className='add_product_btn_wrapper'>
                        <button className='add_product_btn'>
                            {t('orderCallModal.addProduct')}
                        </button>
                    </div>


                    <div className='submit_btn_wrapper' onClick={onClose}>
                        <SubmitBtn />
                        <button className='submit_btn'>
                            {t('orderCallModal.submit')}
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )

    return createPortal(
        ModalContent,
        document.getElementById('order_call_modal_root')
    );
}