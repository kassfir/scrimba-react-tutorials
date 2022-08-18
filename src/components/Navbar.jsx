import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAfrica } from '@fortawesome/free-solid-svg-icons'

export default function Navbar () {
    return <nav>
        <FontAwesomeIcon icon={faEarthAfrica} className='nav--icon'/>
        <h3 className='nav--header'>my travel journal</h3>
    </nav>
}