import React from 'react'
import Title from '../Title'
import aboutBcg from '../../images/aboutBcg.jpeg'

export default function Info() {
  return (
    <section className="py-5">
        <div className="container">
            <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                    <img src={aboutBcg} 
                    className="img-fluid img-thumbnail"
                    alt="about company"
                    style={{background: "var(--darkGrey)"}}
                    />
                </div>
                <div className="col-10 mx-auto col-md-6 my-3">
                    <Title title="about page"></Title>
                    <p className="text-lead text-muted my-3">Lorem ipsum dolor sit, Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste at ipsam assumenda quae, dolore reiciendis hic, aut exercitationem perferendis doloribus obcaecati. amet consectetur adipisicing elit. Modi necessitatibus excepturi eveniet, ad corporis expedita autem commodi quisquam! Cumque, quam!
                    </p>
                    <button className="main-link" type="button" style={{margin:"2rem"}}>
                        more info
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}
