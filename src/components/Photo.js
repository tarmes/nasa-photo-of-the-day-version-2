import React from 'react'
import styled, { keyframes } from 'styled-components'

const StyledPhoto = styled.div`
    border: 10px solid red;
`

export default function Photo({photoLocation}) {

    return (
        <StyledPhoto className='photo-container'>
            <img src={photoLocation} alt='hello'></img>
            <h4>This is the photo container.</h4>
        </StyledPhoto>
    )
}