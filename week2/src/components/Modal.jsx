import React from 'react';
import './Modal.css'

function Modal({ isOpen, onClose }) {
    if (!isOpen) return null;


    return (
        <>
        <div className="modal-overlay" onClick={onClose}></div>
        <div className='modal-container'>
            <div className="modal">
                <h2>안녕하세요</h2>
                <h4>모달 내용은 어쩌고 저쩌고..</h4>
                <button onClick={ onClose }>닫기</button>
        </div>
        </div>
        </>
    )
}

export default Modal