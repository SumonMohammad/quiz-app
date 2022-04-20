import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import Button from './Button';
import Checkbox from './Checkbox';
import Form from './Form';
import InputText from './InputText';


const SignUpForm = () => {

    const { signup } = useAuth()


    const [username, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [agree, setAgree] = useState("");
    const [loading, setLoading] = useState();
    const [error, setError] = useState('')

    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            return setError("Password didn't match")
        }

        try {
            setError("")
            setLoading(true)
            await signup(email, password, username)
            history.push("/")

        } catch (error) {
            console.log(error);
            setLoading(false);
            setError("Failed to create an account")

        }

    }


    return (
        <Form style={{ height: "500px" }} onSubmit={handleSubmit}>
            <InputText
                type="text"
                placeholder="Enter Name"
                icon="person"
                required
                value={username}
                onChange={(e) => setUserName(e.target.value)}

            />
            <InputText
                type="text"
                placeholder="Enter Email"
                icon="alternate_email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}

            />
            <InputText
                type="password"
                placeholder="Enter Password"
                icon="lock"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <InputText
                type="password"
                placeholder="Confirm Password"
                icon="lock_clock"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Checkbox
                text="I agree to the Terms & Conditions"
                required
                value={agree}
                onChange={(e) => setAgree(e.target.value)}


            />
            <Button type="submit" disabled={loading}><span>Submit Now</span></Button>

            {error && <p className='error'>{error}</p>}
            <div className="info">
                Already have an account? <Link to="/login">Login</Link> instead.
            </div>
        </Form>
    )
}

export default SignUpForm