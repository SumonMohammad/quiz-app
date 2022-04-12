import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import signupImage from "../../assets/images/signup.svg";
import Button from './Button';
import Checkbox from './Checkbox';
import Form from "./Form";
import Illustration from "./Illustration";
import InputText from "./InputText";
import styles from "./SignUp.module.css";

const SignUp = () => {
    return (
        <Fragment>
            <h1> Create an Account</h1>
            <div className="column">
                <Illustration imageSrc={signupImage} />
                <Form className={`${styles.signup}`}>
                    <InputText type="text" placeholder="Enter Name" icon="person" />
                    <InputText type="text" placeholder="Enter Email" icon="alternate_email" />
                    <InputText type="password" placeholder="Enter Password" icon="lock" />
                    <InputText type="password" placeholder="Confirm Password" icon="lock_clock" />
                    <Checkbox text="I agree to the Terms & Conditions" />
                    <Button><span>Submit Now</span></Button>
                    <div className="info">
                        Already have an account? <Link to="/login">Login</Link> instead.
                    </div>
                </Form>
            </div>


        </Fragment>

    )
}

export default SignUp