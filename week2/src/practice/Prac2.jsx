import React, { useState } from 'react';
import Modal from '../components/Modal'

function Prac2() {
    const [ isModalOpen, setIsModalOpen ] = useState(false);

    const openModal = () => {
        console.log('모달이 켜짐'); 
        setIsModalOpen(true); 
    };

    const closeModal = () => {
        console.log('모달이 꺼짐');
        setIsModalOpen(false);
    };

    return (
        <>
        <h1>안녕하세요!</h1>
        <h3>내용내용내용</h3>
        <button onClick={openModal}>버튼 열기</button>
        <Modal isOpen={isModalOpen} onClose={closeModal} />
        </>
    )
}

export default Prac2