import React from 'react'
import styled, { keyframes } from 'styled-components'

const kfLR = keyframes`
    from {
        margin-left: -100%;
    }
    to {
        margin-left: 0;
    }
`
const kfRL = keyframes`
    from {
        margin-left: 100%;
    }
    to {
        margin-left: 0
    }
`

const StyledInfo = styled.div`

    h3 {
        color: ${pr => pr.theme.funColor};
        animation: ${kfLR} 2s ease;
    }

    h2 {
        animation: ${kfRL} 2s ease;
    }
`

export default function Info({ date, title }) {
    return (
        <StyledInfo className='info-container'> 
            <h3>Date: {date}</h3>
            <h2>{title}</h2>
        </StyledInfo>
    )
}