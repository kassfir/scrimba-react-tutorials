import './QuizScreen.css';
import { nanoid } from 'nanoid';
import React from 'react';
import Question from './Question';
import { decode } from 'he';


function QuizScreen () {

    const [quizQuestions, setQuizQuestions] = React.useState([]);
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [isQuizChecked, setIsQuizChecked] = React.useState(false);
    const [correctAnswerCount, setCorrectAnswerCount] = React.useState(0);
    const [hasError, setHasError] = React.useState(false);

        //There's a glitch with useEffectOnce
    React.useEffect(() => {

        if (isLoaded) {
            return;
        }
        loadQuiz();
    }, []);

    function loadQuiz () {
        fetch('https://opentdb.com/api.php?amount=5')
        .then(responseData => responseData.json())
        .then(responseJson => {
            
            const quiz = [];
            console.log(responseJson);
            
            responseJson.results.forEach(question => {
                const answers = [];

                for (let i = 0; i < question.incorrect_answers.length; i++){
                    answers.push(
                        {
                            answerText: decode(question.incorrect_answers[i]),
                            isCorrect: false,
                            isSelected: false,
                            id: nanoid(),
                        }
                    );
                }

                answers.push({
                    answerText: decode(question.correct_answer),
                    isCorrect: true,
                    isSelected: false,
                    id: nanoid(),
                });

                quiz.push({
                    id: nanoid(),
                    question: decode(question.question),
                    answers: answers,
                });

                setQuizQuestions(quiz);
                setIsLoaded(true);
            })
        })
        .catch(error => console.error(error));
    }

    function restartGame (event){
        event.preventDefault();
        setIsLoaded (false);
        setIsQuizChecked(false);
        loadQuiz();
    }

    function handleAnswerSelect (event, questionId, answerId){
        event.preventDefault();

        setHasError(false);

        if (isQuizChecked){
            return
        }

        setQuizQuestions(prevState => {
            return prevState.map(prevStateQuestion => {
                if (questionId !== prevStateQuestion.id) {
                    return prevStateQuestion;
                }

                const updatedAnswers = prevStateQuestion.answers.map(prevAnswer => {

                    return ({
                        ...prevAnswer, 
                        isSelected: prevAnswer.id === answerId ? 
                            !prevAnswer.isSelected : 
                            false,
                    })
                })

                console.log(prevStateQuestion);

                return ({
                    ...prevStateQuestion, 
                    answers: updatedAnswers,
                });
            })

        });

    }

    function checkResults (event) {
        event.preventDefault();

        let count = 0;
        let isAllSelected = true;
        
        quizQuestions.forEach(question => {
            let isAnySelected = false;
            question.answers.forEach(answer => {
                  if (answer.isSelected){
                    isAnySelected = true;

                    if (answer.isSelected === answer.isCorrect){
                        count++;
                    }
                }
            })

            if (!isAnySelected) {
                isAllSelected = false;
                setHasError(true);
            }
        })

        setCorrectAnswerCount(count);

        if (isAllSelected) {
            setIsQuizChecked(true);
        }
    }

    const questionComponents = quizQuestions.map(quizQuestion => {
        return  (
            <Question 
                key={quizQuestion.id} 
                question={quizQuestion} 
                handleAnswerSelect={handleAnswerSelect} 
                isQuizChecked={isQuizChecked}
            />
        );
    })

    const endQuizStats = ( 
        <div className='quiz-bottom-items'>
            <h2>You scored {correctAnswerCount}/{quizQuestions.length} correct answers</h2>
            <button 
                className='action-button'
                onClick={restartGame}
            >
                Play again
            </button>
        </div>
    );

    const checkAnswerButton = ( 
        <div className='quiz-bottom-items'>
            { hasError && <p className='error-message'>Make sure you answer all quiz questions!</p>}
            <button 
                className='action-button'
                onClick={checkResults}
            >
                Check answers
            </button>
        </div>

    );

    const loadingSpinner =( 
        <div className='center-content'>
            <h1>...loading!</h1>
        </div>
    );

    return (
    <>
        {
            isLoaded ? 
            questionComponents :
            loadingSpinner
        }

       
        
        { isLoaded && (isQuizChecked ? endQuizStats : checkAnswerButton) }
    </>
    );
}

export default QuizScreen;