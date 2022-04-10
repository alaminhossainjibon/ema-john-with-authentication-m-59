import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProduct';
import { removeFromDb } from '../../utilities/fakedb';
import Card from '../Card/Card';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [card, setCard] = useCart(products)

    const handleRemoveProduct = product => {
        const rest = card.filter(pd => pd.id !== product.id);
        setCard(rest);
        removeFromDb(product.id)
    }

    return (
        <div className='shop-container'>
            <div className='review-item-container'>
                {
                    card.map(product => <ReviewItem
                        key={product.id}
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