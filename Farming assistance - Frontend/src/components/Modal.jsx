// Modal.jsx
import React from "react";

const Modal = ({ show, onClose, onConfirm, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
      <div className="border border-gray-300 bg-white rounded-lg shadow-lg p-6" style={{ width: "500px", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.7), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" }}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-black">Add Item</h2>
        </div>
        <div>
          {children}
          <div className="flex justify-end mt-4">
            <button onClick={onClose} className="mr-2 px-4 py-2 bg-red-800 text-white rounded-md">Cancel</button>
            <button onClick={onConfirm} className="px-4 py-2 bg-[#63B6BD] text-white rounded-md">Confirm</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
