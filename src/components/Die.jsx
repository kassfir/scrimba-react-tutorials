import "./die.css"

//Formatting and die layout grabbed from this codepen
// codesandbox.io/s/react-css-grid-dice-cly4v?from-embed=&file=/src/components/die.css:159-187

const Pip = () => <span className="pip" />;

export function Die(props){

    const dieClass = props.isHeld ? 
        "face is-held" : 
        "face is-not-held";

    let pips = Number.isInteger(props.number)
		? Array(props.number)
				.fill(0)
				.map((_, i) => <Pip key={i} />)
		: null;
	return (
        <div className={dieClass} onClick={props.clickHandler}>
            {pips}
        </div>
    );
}