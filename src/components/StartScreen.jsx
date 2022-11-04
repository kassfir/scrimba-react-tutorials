import './StartScreen.css';

function StartScreen(props) {
    return (
        <div className='center-content'>
            <h1 className='landing-page--title'>Quizzical</h1>
            <h4 className='landing-page--subtitle'>Test your (intellectual) might</h4>
            <button 
                onClick={props.onClick}
                className='action-button landing-page--button'
            >
                Start quiz
            </button>
        </div>
    )
}

export default StartScreen;