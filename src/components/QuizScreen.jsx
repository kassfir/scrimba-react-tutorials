import { nanoid } from 'nanoid';
import React, {useEffect, useState} from 'react';
import Question from './Question';


function QuizScreen () {

    const [quizQuestions, setQuizQuestions] = React.useState([]);
    const [isLoaded, setIsLoaded] = React.useState(false);

    React.useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=5')
            .then(responseData => responseData.json())
            .then(responseJson => {
                const quiz = [];

                responseJson.results.forEach(question => {
                    const incorrectAnswers = [];

                    for (let i = 0; i < question.incorrect_answers.length; i++){
                        incorrectAnswers.push(
                            {
                                answerText: question.incorrect_answers[i],
                                isCorrect: false,
                                isSelected: false,
                                id: nanoid(),
                            }
                        );
                    }

                    const correctAnswer = {
                        answerText: question.correct_answer,
                        isCorrect: true,
                        isSelected: false,
                        id: nanoid(),
                    }

                    quiz.push({
                        id: nanoid(),
                        question: question.question,
                        answers: [
                            correctAnswer,
                            ...incorrectAnswers
                        ],
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
                    const isSelected = prevAnswer.id === answerId ? true : false;

                    return ({
                        ...prevAnswer, 
                        isSelected: isSelected,
                    })
                })

                console.log(prevStateQuestion);

                return ({
                    ...prevStateQuestion, 
                    answers: updatedAnswers,
                });
            })

        });

        console.log(quizQuestions);
    }

    

    


    return (
        isLoaded ? 
        <Question 
            key={quizQuestions[0].id} 
            question={quizQuestions[0]} 
            handleAnswerSelect={handleAnswerSelect} 
        /> :
        <h1>...loading!</h1>
    );
}

export default QuizScreen;