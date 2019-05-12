import React from 'react'
import styled from 'styled-components'

export default function Title({title, center}) {
  return (
    <TitleWrapper className="row" center={center}>
        <div className="col">
            <h2 className="text-title">{title}</h2>
            <div className="title-underline"></div>
        </div>
    </TitleWrapper>
  )
}

const TitleWrapper = styled.nav`
    text-align:${props => props.center ? "center" : "left"};
    
    .text-title{
        padding-top:2rem;
        text-transform:uppercase;
        letter-spacing:var(--mainSpacing)
    }
    .title-underline{
        height:0.25rem;
        width:7rem;
        background:var(--primaryColor);
        margin: ${props => props.center ? "0 auto" : "0"};
        margin-bottom:2rem;
    }
`;