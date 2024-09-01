
import React from 'react';

function Modal({ src, onClose }) {
  return (
    <div  className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div data-aos="fade-up" className="relative bg-white rounded-lg shadow-lg max-w-2xl mx-auto p-4">
        <button
          onClick={onClose}
          className="absolute z-10 top-2 right-1 text-gray-500 hover:text-gray-700"
        
        >
        X
        </button>
        <img
         data-aos="fade-in"
          src={src}
          alt="Selected"
          className="w-full h-auto rounded-lg object-cover"
        />
      </div>
  </div>
  )
}

export default Modal