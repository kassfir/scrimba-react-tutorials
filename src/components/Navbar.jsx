import logo from '../assets/react.png'

export default function Navbar() {
    return (
        <nav>
            {/* Not to self – React loads stuff from the public folder instead of the assets folder. For me, at least. */}
            <img src="react.svg" className='nav--logo' ></img>
            <h3 className='nav--logo_text'>ReactFacts</h3> 
            <h4 className='nav--title'>React Course - Project 1</h4>
        </nav>
    )
}