import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import Button from '../signup/Button';
import Form from '../signup/Form';
import InputText from '../signup/InputText';

const LoginForm = () => {

    const { login } = useAuth();


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const [loading, setLoading] = useState();
    const [error, setError] = useState('')

    const navigate = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            setError("");
            setLoading(true)
            await login(email, password);
            navigate.push("/")



        } catch (error) {
            console.log(error);
            setLoading(false)
            setError("Failed to login")


        }

    }
    return (
        <Form style={{ height: "330px" }} onClick={handleSubmit}>
            <InputText
                type="text"
                placeholder="Enter Email"
                icon="alternate_email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <InputText required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Enter Password"
                icon="lock" />
            <Button disabled={loading} type="submit"><span>Submit Now</span>></Button>
            {error && <span className='error'>{error}</span>}
            <div className="info">
                Don't have an account? <Link to="/signup">Sign Up</Link> instead.
            </div>
        </Form>
    )
}

export default LoginForm