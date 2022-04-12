import React, { Fragment } from 'react';
import Answers from '../../components/quiz/Answers';
import MiniPlayer from '../../components/quiz/MiniPlayer';
import ProgressBar from '../../components/quiz/ProgressBar';

const Quiz = () => {
    return (
        <Fragment>
            <h1>Pick three of your favorite Star Wars Flims</h1>
            <h4>Question can have multiple answers</h4>
            <Answers />
            <ProgressBar />
            <MiniPlayer />

        </Fragment>
    )
}

export default Quiz