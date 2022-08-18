import Moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationPin } from '@fortawesome/free-solid-svg-icons'

export default function TravelBlogEntry (props) {
    return (
        <div className='blog-entry'>
            <img src={`images/${props.item.imgName}`} className='blog-entry--image'/>
            <div className='blog-entry--description'>
                <div className='blog-entry--country-container'>
                    <FontAwesomeIcon icon={ faLocationPin } className='blog-entry--pin' />
                    <span className='blog-entry--country'>{props.item.country}</span>
                    <span ><a href={props.item.googleMapsLink} className='blog-entry--google-maps-link'>View in Google Maps</a></span>
                </div>

                <h2 className='blog-entry--location'>{props.item.location}</h2>

                <span className='blog-entry--dates'>{`${ Moment(props.item.startDate).format('DD/MM/YYYY')} – ${Moment(props.item.endDate).format('DD/MM/YYYY')}`}</span>

                <p className='blog-entry--about'> {props.item.description} </p>
            </div> 
        </div>
    )
}