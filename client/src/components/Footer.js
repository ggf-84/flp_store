import React from 'react'
import styled from 'styled-components'
import * as FontAwesome from 'react-icons/fa'
import {ProductConsumer} from '../context' 

export default function Footer() {
  return (
    <ProductConsumer>
    {
      value => {
        return (
          <Footerrapper >
            <div className="container py-3">
              <div className="row">
                <div className="col-md-6">
                  <p className="text-capitalize">copiright &copy; tech store {new Date().getFullYear()}. all rights reserved{" "}</p>
                </div>
                <div className="col-md-6 d-flex justify-content-around">
                  {value.socialIcons.map(item => {
                    const icon = React.createElement(FontAwesome[item.icon]);
                    return (
                      <a href={item.url} key={item.id}>
                        <div className="icon">{icon}</div>  
                      </a>
                  )})}
                </div>
              </div>
            </div>
          </Footerrapper>
        );
      }
    }
  </ProductConsumer>
  )
}

const Footerrapper = styled.nav`
  background: var(--darkGrey);
  color: var(--mainWhite);
  .icon{
    font-size:1.5rem;
    color:var(--mainWhite);
    transition: var(--mainTransition);
  }
  .icon:hover{
    color:var(--primaryColor);
    cursor: pointer;
  }
`;