// import { faEnvelope, FaLinkedin, FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaTwitterSquare  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faTwitterSquare, faFacebookSquare, faInstagramSquare, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
// import { FaLinkedin } from '@fortawesome/free-solid-svg-icons'

{/* <FontAwesomeIcon icon="fa-brands fa-linkedin" /> */}
function App() {
  return ( 
    <div className='main-container'>
      <div className='info-container'>
        <img src='kass.jpg'className='info--pic'></img>
        <h1 className='info--name info--text'>Kaspars Eglitis</h1>
        <h4 className='info--role info--text'>Innovation Expert</h4>
        <h5 className='info--site info--text'>kartejais.lv</h5>

        <div className='info--button-container'>
          <button className='info--contact-button info--email-button' > <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> <p>Email</p></button>
          <button className='info--contact-button info--linkedin-button'> <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon> <p>LinkedIn</p></button>  
        </div>
      </div>

      <div class='main--section-container'>
        <h2 className='main--section-header'>About</h2>
        <p className='main--paragraph'>Projects sometimes look a lot tasks in school: they demonstrate the scholar's skill but ignore the infinite variables reality carries. Kaspars uses design thinking as a tool to hold on to reality, to systemize knowledge and to learn from mistakes lest one becomes a speaker for Fuckup Nights.</p>
      </div>
      
      <div class='main--section-container'>
        <h2 className='main--section-header'>Interests</h2>
        <p className='main--paragraph'>Design thinking and prototyping. Cognitive science. Jazz guitar, voiceovers, and sound engineering. My blood flows thanks to caffeine.</p>
      </div>

      <footer>
        <div className='footer--icon-container'><FontAwesomeIcon className='footer--icon ' icon={faTwitterSquare}></FontAwesomeIcon></div>
        <div className='footer--icon-container'><FontAwesomeIcon className='footer--icon ' icon={faFacebookSquare}></FontAwesomeIcon></div>
        <div className='footer--icon-container'><FontAwesomeIcon className='footer--icon ' icon={faInstagramSquare}></FontAwesomeIcon></div>
        <div className='footer--icon-container'><FontAwesomeIcon className='footer--icon ' icon={faGithubSquare}></FontAwesomeIcon></div>
      </footer>
      
    </div>
    
  )
}

export default App
