import { nanoid } from 'nanoid';
import React, {useEffect, useState} from 'react';


function QuizScreen () {

    const [quizQuestions, setQuizQuestions] = React.useState([]);
    const [isLoaded, setIsLoaded] = React.useState(false);

    React.useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=5')
            .then(responseData => responseData.json())
            .then(responseJson => {
                
                const quiz = [];
                responseJson.results.forEach(question => {
                    quiz.push({
                        ...question,
                        id: nanoid(),
                        userSelected: '',
                    });
                })

                setQuizQuestions(quiz);
                console.log(quizQuestions);
            })
            .catch(error => console.error(error))
        }, [])

    return (
        
        <h1>Quiz screen</h1>
    );
}

export default QuizScreen;