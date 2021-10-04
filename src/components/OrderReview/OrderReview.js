import React from 'react';
import UseProducts from '../../Hooks/UseProducts';
import useCart from '../../Hooks/UseCart';
import Cart from './../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import { useHistory } from 'react-router';





const OrderReview = () => {
    const [products, setProducts] = UseProducts()
    const [cart, setCart] = useCart(products)
    const history = useHistory()


    const handleRemove = (key) => {
        const newcart = cart.filter(product => product.key !== key)
        setCart(newcart)
        removeFromDb(key)
    }

    const handlePlaceOrder = () => {
        history.push('/PlaceOrder')
        setCart([])
        clearTheCart()
    }

    return (
        <div className="shop-container">
            {/* <h1>{products.length}</h1>
            <h2>{cart.length}</h2>
            <Cart cart = {cart}></Cart> */}

            <div className="product-container">
                {
                    cart.map(product=> <ReviewItem
                    key = {product.key}
                    product = {product}
                    handleRemove = {handleRemove}
                    ></ReviewItem>)
                }
            </div>

            <div className="cart-container">
                <Cart cart={cart}>
                        <button onClick={handlePlaceOrder} className="btn-regular">Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default OrderReview;