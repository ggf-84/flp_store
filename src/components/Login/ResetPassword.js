import React from 'react'
import Title from '../Title'
import {ProductConsumer} from '../../context'

export default function ResetPassword() {
    return <ProductConsumer>
        {value => {
            const {resetPassword, email, handleChange, resetPasswordInfo} = value;
            return (
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 my-3">
                        <Title title="Reset your password"/>
                            {/**email */}
                            <div className="form-group">
                                <label>Email</label><span className="text-danger"> *</span>   
                                <input type="email" name="email" onChange={handleChange} value={email}
                                className="form-control"/>
                            </div>
                            {/**submit */}
                            <div className="form-group mt-3">
                            <input 
                                type="submit" 
                                value="Reset Password" 
                                className="form-control bg-primary text-white"
                                onClick={() => resetPassword()}
                            />
                            </div>
                            <div className="form-group">
                                <span className="text-info">{resetPasswordInfo}</span> 
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            );
        }}
    </ProductConsumer>
}