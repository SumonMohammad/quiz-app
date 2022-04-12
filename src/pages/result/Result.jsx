import React, { Fragment } from 'react';
import Analysis from "../../components/result/Analysis";
import Summary from '../../components/result/Summary';


const Result = () => {
    return (
        <Fragment>
            <Summary />
            <Analysis />
        </Fragment>

    )
}

export default Result