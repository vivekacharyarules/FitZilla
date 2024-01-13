import React from "react";
import aboutimage from './images/about.png'

function Contact(){
    return (
        <div id='contact'>
            <h1>CONTACT US</h1>
            <form>
                <input type='text' placeholder='Full Name' required/>
                <input type='email' placeholder='Email : raZer' required/>
                <textarea placeholder='Write here.... ' name='message'></textarea>
                <input type='submit' value='send' />
            </form>
        </div>
    )
}

export default Contact;