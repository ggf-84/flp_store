import React from 'react'
import Title from '../Title'
import {ProductConsumer} from '../../context'
import {Link} from 'react-router-dom'

export default function Login() {
    return <ProductConsumer>
        {value => {
            const {resetPassword, logIn, email, password, handleChange} = value;
            return (
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 my-3">
                        <Title title="Login Page"/>
                            {/**email */}
                            <div className="form-group">
                                <label>Email</label><span className="text-danger"> *</span>
                                <input type="email" name="email" onChange={handleChange} value={email}
                                className="form-control"/>
                            </div>
                            {/**password */}
                            <div className="form-group">
                            <label>Password</label><span className="text-danger"> *</span>
                                <input type="password" name="password" onChange={handleChange} value={password}
                                className="form-control"/>
                            </div>
                            {/**submit */}
                            <div className="form-group mt-3">
                            <input 
                                type="submit" 
                                value="Login" 
                                className="form-control bg-primary text-white"
                                onClick={() => logIn()}
                            />
                            </div>
                            {/**forgot password */}
                            <div className="form-group">
                            <span onClick={() => resetPassword()} ></span>
                                <Link to={`/reset-password`} >Forgot password?</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            );
        }}
    </ProductConsumer>
}