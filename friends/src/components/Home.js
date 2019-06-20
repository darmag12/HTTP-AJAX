import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

const Home = () => {
    
    return(
        <div className='home-page'>
            <h1>Wanna be on my friends list?</h1>
            <Link to='/friends-list' className='home-btn'>Get Started</Link>

        </div>
    )
}

export default Home 