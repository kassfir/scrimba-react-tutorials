import logo from '../assets/react.png'

export default function Navbar() {
    return (
        <nav className='navbar'>
            {/* Not to self – React loads stuff from the public folder instead of the assets folder. For me, at least. */}
            <img src="react.svg"  className="navbar-item"></img>
            <h3 className="navbar-item project-name">ReactFacts</h3> 
            <h4 className="navbar-item project-info">React Course - Project 1</h4>
        </nav>
    )
}