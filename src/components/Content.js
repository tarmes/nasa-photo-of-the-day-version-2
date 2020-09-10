import React from 'react'
import Photo from './Photo'
import styled, { keyframes } from 'styled-components'

const StyledContent = styled.div`
    h3 {
        color: ${pr => pr.theme.funColor};
    }
`

export default function Content({url, explanation, copyright}) {
  return (
      <StyledContent className='content-container'>
          {
              <Photo photoLocation={url}/>
          }
          <h3>{explanation}</h3>
          <h5>{copyright}</h5>
      </StyledContent>
  )
}