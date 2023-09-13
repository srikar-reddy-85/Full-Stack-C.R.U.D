import React from "react";

const ConfirmationDialog = ({ isOpen, onCancel, onConfirm }) => {
    if (!isOpen) return null;

    return (
        <div className="confirmation-dialog">
            <p className="confirmmsg">Do you want to delete this?</p>
            <button className="dialogno" onClick={onCancel}>No</button>
            <button className="dialogyes" onClick={onConfirm}>Yes</button>
        </div>
    );
};

export default ConfirmationDialog;
