import React from 'react'
import './Projects.css'

function Projects() {
    return (
        <div className='Projects' id='Projects'>
            <h1>My Projects</h1>
            <div>
                <a href="/movies"><h1>MOVIES<span>app</span></h1></a>
                <a href='/pokemon'><h1>Pokemon Evolution</h1></a>
            </div>
        </div>
    )
}

export default Projects
