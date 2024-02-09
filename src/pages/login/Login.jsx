import React, { useContext, useRef } from 'react';
import "./Login.css";
import { loginCall } from '../../actionCalls';
import { AuthContext } from "../../state/AuthContext";

export default function Login() {
    const email = useRef();
    const password = useRef();
    const { user, isFetching, error, dispatch } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        loginCall({
            email: email.current.value,
            password: password.current.value,
        },
        dispatch
        );
    };

    console.log(user);

  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className='loginLogo'>Try SNS</h3>
                <span className="loginDesc">Authentic SNS, By your self</span>
            </div>
            <div className="loginRight">
                <form className="loginBox" onSubmit={(e) => handleSubmit(e) } >
                    <p className="loginMsg">Login Here</p>
                    <input type="email" className="loginInput" placeholder='E-mail' required ref={email}/>
                    <input type="password" className="loginInput" placeholder='Password' minLength="8" required ref={password} />
                    <button className="loginButton">Login</button>
                    <span className="loginForgot">Don't remenbar Pass</span>
                    <button className="loginRegisterButton">Sign Up</button>
                </form>
            </div>
        </div>
    </div>
  )
}
