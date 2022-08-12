import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Contact (props) {

    return (
        <div className="contact-card">
            <img src={props.img}/>
            <h3>{props.name}</h3>
            <div className="info-group">
                <FontAwesomeIcon icon={faPhone} className='info--icon'></FontAwesomeIcon>
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <FontAwesomeIcon icon={faEnvelope} className='info--icon'></FontAwesomeIcon>
                <p>{props.email}</p>
            </div>
        </div>
    )
}