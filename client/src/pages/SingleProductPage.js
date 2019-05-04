import React from 'react'
import {Link} from 'react-router-dom'
import Hero from '../components/Hero'
import singleProductImage from '../images/singleProductBcg.jpeg'
import {ProductConsumer} from '../context'

export default function SingleProductPage() {
  return (
    <>
    {/* <Hero img={singleProductImage} title="single Product"/> */}
      <ProductConsumer>
        {value => {
          const {singleProduct, addToCart, loading} = value;

          if(loading) {
            
            return <h1>loading product...</h1>
          }
          const {company,description,id,price,title,image} = singleProduct;
          return (
            <>
              <Hero img={singleProductImage} title={title}/>
              <section className="py-5">
                <div className="container">
                  <div className="row">
                    <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
          <img src={`../${image}`} alt={title} className="image-fluid"/>
                    </div>
                      <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
                      <h5 className="text-title text-capitalize mb-4">model: {title}</h5>
                      <h5 className="text-capitalize text-muted mb-4">company: {company}</h5>
                      <h5 className="text-main text-capitalize mb-4">price: ${price}</h5>
                      <p className="text-title text-capitalize mb-3">some info about product</p>
                      <p >{description}</p>
                      <button 
                        className="main-link" 
                        type="button" 
                        style = {{margin: "0.75rem"}}
                        onClick={() => addToCart(id)}
                      >add to cart
                      </button>
                      <Link 
                        className="main-link" 
                        style = {{margin: "0.75rem"}}
                        to="/products"
                        >
                        back to products
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            </>
          );
        }}
      </ProductConsumer>
    </>
  )
}
