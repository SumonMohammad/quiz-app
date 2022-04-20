import React, { Fragment } from 'react';
import loginImage from "../../assets/images/login.svg";
import Illustration from '../signup/Illustration';
import LoginForm from './LoginForm';




const Login = () => {
    return (
        <Fragment>
            <h1> Login To your account</h1>
            <div className="column">
                <Illustration imageSrc={loginImage} alt="login" />
                <LoginForm />
            </div>
        </Fragment>
    )
}

export default Login