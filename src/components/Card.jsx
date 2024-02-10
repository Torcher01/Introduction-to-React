import React from 'react';

export function Card({item, isVisible, isFinished, onCardClick}) {
    const {id, url, description} = item;
    const className = `${
        isVisible ? 'card-show' : ''
    } ${
        isFinished ? 'card-finished' : ''
    }`;

    const handleClick = () => {
        onCardClick(id);
    };

    return (
        <li onClick={handleClick} className={`card ${className}`}>
            <img
                width="204" height="144"
                src={url}
                alt={description}
            />
        </li>
    );
}