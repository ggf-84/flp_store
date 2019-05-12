import React from 'react'
import Title from '../Title'
import {ProductConsumer} from '../../context/context'
import { Redirect } from 'react-router'

export default function SignUp() {
    return <ProductConsumer>
        {value => {
            const {signUp,handleChange,email,password,repeatPassword,firstname,lastname,fireRedirect} = value;
            return (
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 my-3">
                        <Title title="Login Page"/>
                            {/**firstname */}
                            <div className="form-group">
                                <label>Firstname</label><span className="text-danger"> *</span>
                                <input type="text" name="firstname" onChange={handleChange} value={firstname}
                                className="form-control" />
                            </div>
                            {/**lastname */}
                            <div className="form-group">
                                <label>Lastname</label><span className="text-danger"> *</span>
                                <input type="text" name="lastname" onChange={handleChange} value={lastname}
                                className="form-control" />
                            </div>
                            {/**email */}
                            <div className="form-group">
                                <label>Email</label><span className="text-danger"> *</span>
                                <input type="email" name="email" onChange={handleChange} value={email}
                                className="form-control" />
                            </div>
                            {/**password */}
                            <div className="form-group">
                            <label>Password</label><span className="text-danger"> *</span>
                                <input type="password" name="password" onChange={handleChange} value={password}
                                className="form-control"/>
                            </div>
                            {/**password */}
                            <div className="form-group">
                            <label>Repeat Password</label><span className="text-danger"> *</span>
                                <input type="password" name="repeatPassword" onChange={handleChange} value={repeatPassword}
                                className="form-control"/>
                            </div>
                            {/**submit */}
                            <div className="form-group mt-3">
                            <input 
                                type="submit" 
                                value="Sign up" 
                                className="form-control bg-primary text-white"
                                onClick={() => signUp()}
                            />
                            {fireRedirect && (<Redirect to={'/'}/>)}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            );
        }}
    </ProductConsumer>
}