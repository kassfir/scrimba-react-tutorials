export default function Question (props) {
    
    const {question} = props;

    const answerButtons = question.answers.map(answer => {
        return (
            <button 
                className={ answer.isSelected ? "answer-button selected" :  "answer-button unselected"}
                
            >                    
                {answer.answerText}
            </button>
        )
    });
    

    return (
        <>
            <h2>{question.question}</h2>
            { answerButtons }
        </>
        
    )
}