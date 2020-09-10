import React from 'react'
import Photo from './Photo'

export default function Content({url, explanation, copyright}) {
  return (
      <div className='content-container'>
          {
              <Photo photoLocation={url}/>
          }
          <h3>This is the content container.</h3>
          <h3>{explanation}</h3>
          <h5>{copyright}</h5>
      </div>
  )
}