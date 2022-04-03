import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProduct';
import { addToDb, getStoredCard } from '../../utilities/fakedb'
import Card from '../Card/Card';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useProducts();
    const [card, setCard] = useState([])

    useEffect(() => {
        const storedCart = getStoredCard();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCard(savedCart);
    }, [products]);
    // card click handle
    const handleAddToCard = (selectedProduct) => {
        let newCard = [];
        const exists = card.find(product => product.id === selectedProduct.id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCard = [...card, selectedProduct];
        }
        else {
            const rest = card.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCard = [...rest, exists];
        }
        setCard(newCard)
        addToDb(selectedProduct.id)
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
                <Card card={card}>
                    <Link to="/orders">
                        <button>Review Order</button>
                    </Link>
                </Card>
            </div>

        </div>
    );
};

export default Shop;