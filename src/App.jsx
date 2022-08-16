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

            <Contact 
              img='./cats/mr-whiskerson.jpg'
              name='Mr. Whiskerson' 
              phone='(212) 555-1234' 
              email='mr.whiskaz@catnap.meow'  
            />

            <Contact 
              img='./cats/fluffykins.jpg' 
              name='Fluffykins' 
              phone='(212) 555-2345' 
              email='fluff@me.com'  
            />

            <Contact 
              img='./cats/felix.jpg' 
              name='Felix' 
              phone='(212) 555-4567' 
              email='thecat@hotmail.com'  
            />

            <Contact 
              img='./cats/pumpkin.jpg' 
              name='Pumpkin' 
              phone='(0800) CAT KING' 
              email='pumpkin@scrimba.com'  
            />

        </div>
    )
}

export default App