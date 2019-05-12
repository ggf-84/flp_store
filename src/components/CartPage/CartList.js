import React from 'react'
import CartItem from './CartItem'

export default function CartList({cart, increment, decrement, removeItem}) {
    
    if(cart.length === 0) {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <h1 className="text-title text-center my-4">
                        your cart is empty
                        </h1>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        {cart.map(item => (
                            <CartItem
                            key={item.id}
                            cartItem={item}
                            increment={increment}
                            decrement={decrement}
                            removeItem={removeItem}
                            />
                        ))}
                    </div>
                </div>
            </div>
        )
    }

            
}
