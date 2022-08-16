export default function Joke (props) {

    return (
        <div className="joke">
            {props.setup && <h1 className='joke--question'>{props.setup}</h1>}
            <h1 className='joke--punchline'>{props.punchline}</h1>
        </div>
    );
}