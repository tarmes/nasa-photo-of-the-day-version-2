import React from 'react'
import styled, { keyframes } from 'styled-components'

const StyledInfo = styled.div`
    border: 5px solid black;
`

export default function Info({ date, title }) {
    return (
        <StyledInfo className='info-container'>
            <h4>this is the info container</h4> 
            <h5>Date: {date}</h5>
            <h3>{title}</h3>
        </StyledInfo>
    )
}