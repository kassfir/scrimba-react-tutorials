export function Die(props){

    const dieClass = props.isHeld ? 
        "die-face is-held" : 
        "die-face is-not-held";

    return (
        <div className={dieClass} onClick={props.clickHandler}>
            <h2 className="die-num">
                {props.number}
            </h2>
        </div>
    )
}