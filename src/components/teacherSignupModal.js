import React from 'react';
import { ReactComponent as SignupOkay } from "../static/teacherSignupModal.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50">
      <div className="relative w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <button
          className="absolute top-6 bg-white right-6 p-1 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <FontAwesomeIcon icon={faTimes} size="2x"/>
        </button>
        <div className="flex flex-col items-center justify-center">
          <div>
            <SignupOkay />
          </div>
          <h1 className="mb-0 text-4xl text-gray-800">가입신청 완료!</h1>
          <p className="mb-6 text-xl text-gray-600">
            승인 후 메일을 통해 계정 정보를 전달해드릴게요!
          </p>
          <button
            onClick={onClose}
            className="px-8 py-3 text-2xl text-white font-bold bg-purple-500 rounded hover:bg-purple-600"
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
