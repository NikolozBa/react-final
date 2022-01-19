import React from 'react'
import './Banner.css'
import bannerPic from '../images/bannerPic.png'

function Banner() {
    return (
        <div className='Banner' id='Banner'>
            <img src={bannerPic} ></img>
            <div>
                <h1>Hi,<br />I am<br />Nika Baidoshvili</h1>
                <p>bulding value through design</p>
                <a href='#Contact'>
                    Contact
                </a>
            </div>
        </div>
    )
}

export default Banner
