import React from 'react'

export default function Info({ date, title }) {
    return (
        <div className='info-container'>
            <h4>this is the info container</h4> 
            <h5>{date}</h5>
            <h3>{title}</h3>
        </div>
    )
}