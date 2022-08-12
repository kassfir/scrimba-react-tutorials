import React from "react"
import Contact from './components/Contact'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

/* Challenge:

- Create a Contact.js component in another file
- Move one of the contact card divs below into that file
- import and render 4 instances of that contact card
    - Think ahead: what's the problem with doing it this way?
*/

function App() {
    return (
        <div className="contacts">

            <Contact img='./cats/mr-whiskerson.jpg' name='Mr. Whiskerson' phone='(212) 555-1234' email='mr.whiskaz@catnap.meow'  />
        
            <div className="contact-card">
                <img src="./cats/mr-whiskerson.jpg"/>
                <h3>Mr. Whiskerson</h3>
                <div className="info-group">
                    <FontAwesomeIcon icon={faPhone} className='info--icon'></FontAwesomeIcon>
                    <p>(212) 555-1234</p>
                </div>
                <div className="info-group">
                    <FontAwesomeIcon icon={faEnvelope} className='info--icon'></FontAwesomeIcon>
                    <p>mr.whiskaz@catnap.meow</p>
                </div>
            </div>
            
            <div className="contact-card">
                <img src="./cats/fluffykins.jpg"/>
                <h3>Fluffykins</h3>
                <div className="info-group">
                    <FontAwesomeIcon icon={faPhone} className='info--icon'></FontAwesomeIcon>
                    <p>(212) 555-2345</p>
                </div>
                <div className="info-group">
                    <FontAwesomeIcon icon={faEnvelope} className='info--icon'></FontAwesomeIcon>
                    <p>fluff@me.com</p>
                </div>
            </div>
            
            <div className="contact-card">
                <img src="./cats/felix.jpg"/>
                <h3>Felix</h3>
                <div className="info-group">
                    <FontAwesomeIcon icon={faPhone} className='info--icon'></FontAwesomeIcon>
                    <p>(212) 555-4567</p>
                </div>
                <div className="info-group">
                    <FontAwesomeIcon icon={faEnvelope} className='info--icon'></FontAwesomeIcon>
                    <p>thecat@hotmail.com</p>
                </div>
            </div>
            
            <div className="contact-card">
                <img src="./cats/pumpkin.jpg"/>
                <h3>Pumpkin</h3>
                <div className="info-group">
                    <FontAwesomeIcon icon={faPhone} className='info--icon'></FontAwesomeIcon>
                    <p>(0800) CAT KING</p>
                </div>
                <div className="info-group">
                    <FontAwesomeIcon icon={faEnvelope} className='info--icon'></FontAwesomeIcon>
                    <p>pumpkin@scrimba.com</p>
                </div>
            </div>
            
        </div>
    )
}

export default App