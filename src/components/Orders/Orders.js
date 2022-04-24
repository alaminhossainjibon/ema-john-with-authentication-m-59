import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import { removeFromDb } from '../../utilities/fakedb';
import Card from '../Card/Card';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'

const Orders = () => {
    const [card, setCard] = useCart()
    const handleRemoveProduct = product => {
        const rest = card.filter(pd => pd._id !== product._id);
        setCard(rest);
        removeFromDb(product._id)
    }

    return (
        <div className='shop-container'>
            <div className='review-item-container'>
                {
                    card.map(product => <ReviewItem
                        key={product._id}
                        product={product}
                        handleRemoveProduct={handleRemoveProduct}
                    ></ReviewItem>)
                }
            </div>
            <div className='card-container'>
                <Card card={card}>
                    <Link to="/shipment">
                        <button>Proceed Shipping</button>
                    </Link>
                </Card>
            </div>

        </div>
    );
};

export default Orders;