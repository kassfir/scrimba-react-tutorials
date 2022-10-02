export default function Question (props) {
    
    const {question, handleAnswerSelect} = props;

    const answerButtons = question.answers.map(answer => {
        return (
            <button 
                className={ answer.isSelected ? "answer-button selected" :  "answer-button unselected"}
                onClick={(event) => handleAnswerSelect(event, question.id, answer.id)}
            >                    
                {answer.answerText}
            </button>
        )
    });
    

    return (
        <>
            <h2>{question.question}</h2>
            <div className="answer-container">
                { answerButtons }
            </div>
            <hr />
        </>
        
    )
}