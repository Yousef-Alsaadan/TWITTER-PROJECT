import React from "react";

function Alirt({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;
  return (
    <div>
      <div className="text-[#e7e9ea] fixed inset-0 flex items-center justify-center bg-[#242D34] bg-opacity-50 z-20">
        <div className="bg-black p-5 rounded-2xl">
          <h2 className="text-lg font-bold">Confirm Deletion</h2>
          <p>Are you sure you want to delete this Twitte?</p>
          <div className="flex justify-end mt-10">
            <button className="btn bg-[#1D9BF0] hover:bg-[#1A8CD8] text-white border-none rounded-full mr-2" onClick={onClose}>
              Cancel
            </button>
            <button className="btn bg-[#f4212e] hover:bg-[#dc1d2a] border-none text-white rounded-full" onClick={onConfirm}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Alirt;
