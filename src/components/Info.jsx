import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const openInNewTab = (url, isNewWindow = true) => {
    if (isNewWindow) {
        const newWindow = window.open(url, '_blank', 'noopener,noreferred')
    } 
    else {
        const newWindow = window.open(url, 'noopener,noreferred')
    }

    if (newWindow) newWindow.opener = null
}

export default function Info() {
    return (
        <div className='info-container'>
            <img src='../kass.jpg'className='info--pic'></img>
            <h1 className='info--name info--text'>Kaspars Eglitis</h1>
            <h4 className='info--role info--text'>Innovation Expert</h4>
            <h5 className='info--site info--text'>kartejais.lv</h5>

            <div className='info--button-container'>
                <a onClick={() => openInNewTab('mailto:kasparseglitisriga@gmail.com', false)}>
                    <button className='info--contact-button info--email-button' > <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> <p>Email</p></button>
                </a>

                <a onClick={() => openInNewTab('https://www.linkedin.com/in/kaspars-egl%C4%ABtis-1225b88a/')}>
                    <button className='info--contact-button info--linkedin-button'> <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon> <p>LinkedIn</p></button>  
                </a>

            </div>
        </div>
    )

}