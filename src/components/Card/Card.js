import React from 'react';

const Card = ({ card }) => {
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Selected Items: {card.length}</p>
        </div>
    );
};

export default Card;