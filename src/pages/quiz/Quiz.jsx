import { getDatabase, ref, set } from "firebase/database";
import _ from "lodash";
import React, { Fragment, useEffect, useReducer, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Answers from '../../components/quiz/Answers';
import MiniPlayer from '../../components/quiz/MiniPlayer';
import ProgressBar from '../../components/quiz/ProgressBar';
import { useAuth } from "../../contexts/AuthContext";
import useQuestionsList from '../../hooks/useQuestionsList';

const initialState = null;

const reducer = (state, action) => {
    switch (action.type) {
        case "questions":
            action.value.forEach(question => {
                question.options.forEach((option) => {
                    option.checked = false;
                })
            });
            return action.value;
        case "answers":
            const questions = _.cloneDeep(state);
            questions[action.questionID].options[action.optionID].checked = action.value;

            return questions;

        default:
            return state;
    }
}

const Quiz = () => {

    const { id } = useParams();
    const { loading, error, questions } = useQuestionsList(id);
    const [currentQuestion, setCurrentQuestion] = useState(0)

    const [qna, dispatch] = useReducer(reducer, initialState);

    const { currentUser } = useAuth()

    const history = useHistory()



    useEffect(() => {
        dispatch({
            type: "questions",
            value: questions,



        })
    }, [questions]);

    const handleAnswerChange = (e, index) => {
        dispatch({
            type: "answers",
            questionID: currentQuestion,
            optionID: index,
            value: e.target.checked
        })

    }

    const nextQuestion = () => {
        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion((prevCurrentQuestion) => prevCurrentQuestion + 1)
        }
    }

    const prevQuestion = () => {
        if (currentQuestion >= 1 && currentQuestion <= questions.length) {
            setCurrentQuestion(prevQuestion => prevQuestion - 1)
        }
    }

    const percentage = questions.length > 0 ? ((currentQuestion + 1) / questions.length) * 100 : 0;


    const submit = async () => {

        const { uid } = currentUser;

        const db = getDatabase();

        const resultRef = ref(db, `result/${uid}`);

        await set(resultRef, {
            [id]: qna

        });

        history.push({
            pathname: `/result/${id}`,
            state: {
                qna
            }

        })



    }

    return (
        <Fragment>

            {loading && <div> Loading.....</div>}
            {error && <div> An error has occured</div>}
            {!loading && !error && qna && qna.length > 0 && (


                <Fragment>

                    <h1>{qna[currentQuestion].title}</h1>
                    <h4>Question can have multiple answers</h4>

                    <Answers
                        options={qna[currentQuestion].options}
                        handleChange={handleAnswerChange} />
                    <ProgressBar
                        next={nextQuestion}
                        submit={submit}
                        prev={prevQuestion}
                        progress={percentage} />
                    <MiniPlayer />
                </Fragment>
            )}


        </Fragment>
    )
}

export default Quiz