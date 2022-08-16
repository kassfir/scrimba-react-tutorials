import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Contact ({img, name, phone, email}) {

    return (
        <div className="contact-card">
            <img src={img}/>
            <h3>{name}</h3>
            <div className="info-group">
                <FontAwesomeIcon icon={faPhone} className='info--icon'></FontAwesomeIcon>
                <p>{phone}</p>
            </div>
            <div className="info-group">
                <FontAwesomeIcon icon={faEnvelope} className='info--icon'></FontAwesomeIcon>
                <p>{email}</p>
            </div>
        </div>
    )
}