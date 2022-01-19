import React from 'react'
import Banner from './banner/Banner'
import Contact from './contact/Contact'
import Info from './info/Info'
import Projects from './projects/Projects'
import './Home.css'
import TopBar from './topBar/TopBar'

function Home() {
    return (
        <div className='Home'>
            <TopBar />
            <Banner />
            <Info />
            <Projects />
            <Contact />
        </div>
    )
}

export default Home
