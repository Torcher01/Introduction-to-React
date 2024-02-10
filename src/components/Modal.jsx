import React from 'react';

export function Modal({children}) {
    return (
        <div className="modal">
            <div className="modal-box">
                {children}
            </div>
        </div>
    );
}