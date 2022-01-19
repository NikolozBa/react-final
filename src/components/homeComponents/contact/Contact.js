import React from 'react'
import './Contact.css'
import contactPic from '../images/EUD.png'

function Contact() {
    return (
        <div className='Contact' id='Contact'>
            <img src={contactPic}/>
            <form>
                <input type="text" placeholder='example@email.com'/>
                <textarea placeholder='write your message here'/>
                <button type='submit'>Send</button>
            </form>
        </div>
    )
}

export default Contact
