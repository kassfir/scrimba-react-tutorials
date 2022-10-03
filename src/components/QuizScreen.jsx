import { nanoid } from 'nanoid';
import React from 'react';
import Question from './Question';
import { decode } from 'he';


function QuizScreen () {

    const [quizQuestions, setQuizQuestions] = React.useState([]);
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [isQuizChecked, setIsQuizChecked] = React.useState(false);
    const [correctAnswerCount, setCorrectAnswerCount] = React.useState(0);

    React.useEffect(() => {

        if (isLoaded) {
            return;
        }

        fetch('https://opentdb.com/api.php?amount=5')
            .then(responseData => responseData.json())
            .then(responseJson => {
                const quiz = [];
                const answers = [];

                responseJson.results.forEach(question => {

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
            .catch(error => console.error(error))
        }, 
    []);

    function handleAnswerSelect (event, questionId, answerId){
        event.preventDefault();

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

    const correctAnswerCounter = <h2>You scored {correctAnswerCount}/{quizQuestions.length} correct answers</h2>

    const loadingSpinner = <h1>...loading!</h1>;
    return (
    <>
        {
            isLoaded ? 
            questionComponents :
            loadingSpinner
        }

        <button 
            className='action-button'
            onClick={checkResults}
        >
            Check answers
        </button>

        { isQuizChecked && correctAnswerCounter}
    </>
    );
}

export default QuizScreen;