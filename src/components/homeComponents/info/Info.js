import React from 'react'
import './Info.css'
import infoPic from '../images/infoPic.png'

function Info() {
    return (
        <div className='Info' id='Info'>
            <div>
                <h1>Experience:</h1>
                <p>just some thing that I've used in the past</p>
                <p>Java/C#</p>
                <p>php/Laravel</p>
                <p>HTML/CSS/Javascript</p>
                <p>Flutter</p>
                <p>Kotlin</p>
            </div>
            <img src={infoPic} />
        </div>
    )
}

export default Info
