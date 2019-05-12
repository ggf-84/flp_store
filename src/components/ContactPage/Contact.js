import React from 'react'
import Title from '../Title'

export default function Contact() {
  return (
    <section className="py-5">
    <div className="container">
        <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
            <Title title="contact us"/>
                <form className="mt-5" action="https://formspree.io/gutughena@yahoo.com" method="POST">
                {/**name */}
                <div className="form-group">
                  <input type="text" name="firstName"
                  className="form-control" placeholder="firstname"/>
                </div>
                {/**email */}
                <div className="form-group">
                  <input type="email" name="email"
                  className="form-control" placeholder="email@mail.com"/>
                </div>
                {/**your message */}
                <div className="form-group">
                  <input type="text" name="subject"
                  className="form-control" placeholder="subject"/>
                </div>
                {/**message */}
                <div className="form">
                  <textarea type="text" name="message"
                  className="form-control" rows="10" placeholder="your message"></textarea>
                </div>
                {/**submit */}
                <div className="form-group mt-3">
                <input type="submit" value="Send" className="form-control bg-primary text-white"/>
                </div>
                </form>
            </div>
        </div>
    </div>
</section>
  )
}
