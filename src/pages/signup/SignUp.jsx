import React, { Fragment } from 'react';
import signupImage from "../../assets/images/signup.svg";
import Illustration from "./Illustration";
import SignUpForm from './SignUpForm';

const SignUp = () => {
    return (
        <Fragment>
            <h1> Create an Account</h1>
            <div className="column">
                <Illustration imageSrc={signupImage} />
                <SignUpForm />

            </div>


        </Fragment>

    )
}

export default SignUp