import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import Test from './Test';

const Login = () => {
    const [login, setLogin] = useState(false);
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const handalSubmit = (e) => {
        e.preventDefault();
        if ((userId === "test" && password === "test") || (userId === "admin" && password === "pass")) {
            setLogin(true)
        } else {
            setLogin(false)
            alert("UserId or Password is wrong")
        }
    }

    return (
        <div className='login'>
            <Form className='w-50 m-auto ' style={login ? { display: "none" } : { display: "Block" }} onSubmit={handalSubmit}>
                <Form.Group className="" controlId="formBasicEmail">
                    <Form.Label>User-ID</Form.Label>
                    <Form.Control type="text" required className='shadow-none' onChange={(e) => setUserId(e.target.value)} placeholder="Enter User ID" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" required className='shadow-none' onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <span className='loginBtn' onClick={() => setLogin(false)} style={login ? { display: "block" } : { display: "none" }}>{login ? "LogOut" : null}</span>
            {
                login ? <Test /> : ""
            }
        </div>
    )
}

export default Login;
