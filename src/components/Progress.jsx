import React from 'react';

export function Progress({value, max}) {
    return (
        <>
            <div className="progress-wrapper">
                <div className="progress" style={{width: `${value / max * 100}%`}}></div>
            </div>
            <p className="progress-description">Открыто {value} / {max}</p>
        </>
    );
}