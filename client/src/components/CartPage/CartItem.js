import React from 'react'
import {
    FaTrash, 
    FaChevronCircleUp,
    FaChevronCircleDown
} from 'react-icons/fa'

export default function CartItem({cartItem, increment, decrement, removeItem}) {
    const {id,title,price,count,total,image} = cartItem;
    return (
    <div className="row mt-5 mt-lg-0 text-capitalize text-center aligh-items-center">
        <div className="col-10 mx-auto col-lg-2 pb-2">
            <img width="60" src={`./${image}`} alt="producr" className="img-fluid" />
        </div>
        <div className="col-10 mx-auto col-lg-2 pb-2">
            <span className="d-lg-none">product :</span>
            {title}
        </div>
        <div className="col-10 mx-auto col-lg-2 pb-2">
            <span className="d-lg-none">price : </span>${price}
        </div>
        <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
            <div className="d-flex justify-content-center">
                <div>
                    <FaChevronCircleDown 
                        className="cart-icon text-primary"
                        onClick={() => decrement(id)}
                    />
                    <span className="text-title text-muted mx-3">
                    {count}
                    </span>
                    <FaChevronCircleUp 
                        className="cart-icon text-primary"
                        onClick={() => increment(id)}
                    />
                </div>
            </div>
        </div>
        <div className="col-10 mx-auto col-lg-2">
            <FaTrash 
                className="text-danger cart-icon"
                onClick={() => removeItem(id)}
            />
        </div>
        <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">product total : </span>${total}
        </div>
    </div>
    )
}
