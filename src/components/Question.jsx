import './Question.css';

export default function Question (props) {
    
    const {question, handleAnswerSelect, isQuizChecked} = props;

    function getButtonClass(isQuizChecked, isSelected, isCorrect) {
        let classNames = ['answer-button'];

        if (isQuizChecked) {
            if (isCorrect) {
                classNames.push ('correct');
            }
            
            if (isSelected && !isCorrect) {
                classNames.push('incorrect');
            }
            
            if (!isSelected && !isCorrect) {
                classNames.push('ignored');
            }
        } else {
            if (isSelected) {
                classNames.push('selected');
            } else {
                classNames.push('unselected');
            }

        }

        return classNames.join(' ');
    }

    const answerButtons = question.answers.map(answer => {

        const className = getButtonClass(isQuizChecked, answer.isSelected, answer.isCorrect);
        
        return (
            <button 
                className={className}
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