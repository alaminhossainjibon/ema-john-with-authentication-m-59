import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [card, setCard] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            //setProduct add
            .then(data => setProducts(data))
    }, [])

    // card click handle
    const handleAddToCard = (product) => {
        // console.log(product);
        const newCard = [...card, product]
        setCard(newCard)
    }
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCard={handleAddToCard}
                    ></Product>)
                }
            </div>
            <div className='card-container'>
                <h1>Order Summary</h1>
                <p>Selected Items: {card.length}</p>
            </div>

        </div>
    );
};

export default Shop;