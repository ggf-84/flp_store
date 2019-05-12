import React from 'react'
import {ProductConsumer} from '../../context'
import Title from '../Title'
import CartColumns from './CartColumns'
import CartList from './CartList'
import CartTotals from './CartTotals'
import {Link} from 'react-router-dom'

export default function Cart() {
    return (
    <section className="py-5">
        <ProductConsumer>
                    {value => {
                        const {
                            cart, increment, decrement, removeItem,
                            clearCart, cartSubTotal, cartTax, cartTotal
                        } = value;

                        if(cart.length === 0) {
                            return (
                                <>
                                    <h1 className="text-title text-center my-4">your cart is empty</h1>
                                    <div className="col text-center mt-5">
                                        <Link to={`/products`} className="main-link">
                                            go to products page
                                        </Link>
                                    </div>
                                </>
                            )
                        }
                        else {
                            return (
                                <>
                                    <div className="container">
                                        <Title title="your cart items" center/>
                                    </div>
                                    <CartColumns/>
                                    <CartList
                                        cart={cart} 
                                        increment={increment} 
                                        decrement={decrement} 
                                        removeItem={removeItem}
                                    />
                                    <CartTotals
                                        clearCart={clearCart} 
                                        cartSubTotal={cartSubTotal} 
                                        cartTax={cartTax} 
                                        cartTotal={cartTotal}
                                    />
                                </>
                            )
                        }
                        
                    }}
                </ProductConsumer>
    </section>
    )
}
