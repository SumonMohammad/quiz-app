import React, { Fragment } from 'react';
import loginImage from "../../assets/images/login.svg";
import Button from '../signup/Button';
import Form from '../signup/Form';
import Illustration from '../signup/Illustration';
import InputText from '../signup/InputText';
import styles from "./Login.module.css";

const Login = () => {
    return (
        <Fragment>
            <h1> Login To your account</h1>
            <div className="column">
                <Illustration imageSrc={loginImage} alt="login" />
                <Form className={`${styles.login}`}>
                    <InputText type="text" placeholder="Enter Email" icon="alternate_email" />
                    <InputText type="password" placeholder="Enter Password" icon="lock" />
                    <Button><span>Submit Now</span>></Button>
                    <div className="info">
                        Don't have an account? <a href="login.html">Sign Up</a> instead.
                    </div>
                </Form>
            </div>
        </Fragment>
    )
}

export default Login