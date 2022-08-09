import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare, faFacebookSquare, faInstagramSquare, faGithubSquare } from '@fortawesome/free-brands-svg-icons'

const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferred')
    if (newWindow) newWindow.opener = null
}

export default function Footer () {
    return (
        <footer>        
            {/* Twitter */}
            <div className='footer--icon-container'>
                <a onClick={() => openInNewTab('https://twitter.com/kassfir')}>
                    <FontAwesomeIcon className='footer--icon'  icon={faTwitterSquare}></FontAwesomeIcon>
                </a>
            </div>

            {/* Facebook */}
            <div className='footer--icon-container'>
                <a onClick={() => openInNewTab('https://fb.com/kassfir')}>
                    <FontAwesomeIcon className='footer--icon'  icon={faFacebookSquare}></FontAwesomeIcon>
                </a>
            </div>

            {/* Instagram */}
            <div className='footer--icon-container'>
                <a onClick={() => openInNewTab('https://www.instagram.com/kassfir/')}>
                    <FontAwesomeIcon className='footer--icon'  icon={faInstagramSquare}></FontAwesomeIcon>
                </a>
            </div>

            {/* Github */}
            <div className='footer--icon-container'>
                <a onClick={() => openInNewTab('github.com/kassfir')}>
                    <FontAwesomeIcon className='footer--icon'  icon={faGithubSquare}></FontAwesomeIcon>
                </a>
            </div>

        </footer>
    )
}
