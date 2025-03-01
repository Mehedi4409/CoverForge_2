import React from 'react';
const Modal = ({ missingFields, onClose, onProceedAnyway }) => {
    return (
        <dialog id="missing_fields_modal" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-red-600 text-lg"><span><div className="badge badge-error badge-sm animate-ping"></div></span> Warning!!!</h3>
                <p className="py-4 text-black dark:text-white ">You forgot to fill in the following fields:</p>
                <div className="flex flex-col gap-2 text-black dark:text-white ">
                    {missingFields.map((field) => (
                        <p className="text-sm font-medium" key={field}>{field}</p>
                    ))}
                </div>
                <div className="modal-action">
                    <button className="btn" onClick={onClose}>Close</button>
                    <button className="btn" onClick={onProceedAnyway}>Proceed Anyway</button>
                </div>
            </div>
        </dialog>

    );
};

export default Modal;