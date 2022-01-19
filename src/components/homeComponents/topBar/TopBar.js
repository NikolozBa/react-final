import React from 'react'
import './TopBar.css'

function TopBar() {
    return (
        <div className='TopBar'>
            <div><a href='#Banner'>PORTFOLIO</a></div>
            <div>
                <a href='#Banner'>Home</a>
                <a href='#Info'>About me</a>
                <a href='#Projects'>Projects</a>
                <a href='#Contact'>Contact</a>
            </div>
        </div>
    )
}

export default TopBar
