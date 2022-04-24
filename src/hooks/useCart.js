import { useEffect, useState } from "react"
import { getStoredCard } from "../utilities/fakedb"

const useCart = () => {
    const [card, setCard] = useState([])
    useEffect(() => {
        const storedCard = getStoredCard();
        const savedCard = [];
        const keys = Object.keys(getStoredCard);
        console.log(keys);
        fetch('http://localhost:5000/productByKeys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(keys)
        })
            .then(res => res.json())
            .then(products => {
                console.log(products);
                for (const id in storedCard) {
                    const addedProduct = products.find(product => product._id === id);
                    if (addedProduct) {
                        const quantity = storedCard[id];
                        addedProduct.quantity = quantity;
                        savedCard.push(addedProduct);
                    }
                }
                setCard(savedCard);
            });
    }, []);
    return [card, setCard];
}
export default useCart;