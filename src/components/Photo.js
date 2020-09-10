import React from 'react'

export default function Photo({photoLocation}) {

    return (
        <div className='photo-container'>
            <img src={photoLocation} alt='hello'></img>
            <h4>This is the photo container.</h4>
        </div>
    )
}