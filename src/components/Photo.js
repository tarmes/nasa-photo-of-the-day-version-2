import React from 'react'
import styled, { keyframes } from 'styled-components'

const kf = keyframes`
    100% {
        opacity: 1;
    }
`

const StyledPhoto = styled.div`
    /* border: 10px solid red; */
    opacity: 0;
    animation: ${kf} 2.5s forwards;
    background-color: lightgrey;

    transition: all .5s ease-in-out;
    &:hover {
        transition: all .5s ease-in-out;
        transform: scale(1.15);
    }
`

export default function Photo({photoLocation}) {

    return (
        <StyledPhoto className='photo-container'>
            <img src={photoLocation} alt='hello'></img>
        </StyledPhoto>
    )
}