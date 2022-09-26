function StartScreen(props) {
    return (
        <>
            <h1>Quizzical</h1>
            <h4>Some description if needed</h4>
            <button onClick={props.onClick}>Start quiz</button>
        </>
    )
}

export default StartScreen;