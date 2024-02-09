import React, { useRef } from 'react';
import "./Register.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordConfirmation = useRef();

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        //パスワードと確認用のパスワードがあっているかどうか確認
        if (password.current.value !== passwordConfirmation.current.value) {
            passwordConfirmation.current.setCustomValidity("パスワードが違います。")
        } else {
            try {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            };
                //registerApiを叩く
            await axios.post("/auth/register", user);
            navigate("/login");
        } catch (err) {
            console.log(err);
        }
    }
    };

  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className='loginLogo'>Try SNS</h3>
                <span className="loginDesc">Authentic SNS, By your self</span>
            </div>
            <div className="loginRight">
                <form className="loginBox" onSubmit={(e) => handleSubmit(e)} >
                    <p className="loginMsg">Register Here</p>
                    <input type="text" className="loginInput" placeholder='User Name' required ref={username}/>
                    <input type="email" className="loginInput" placeholder='E-mail' required ref={email} />
                    <input type="password" className="loginInput" placeholder='Password' required minLength="8" ref={password} />
                    <input type="password" className="loginInput" placeholder='Password Check' required minLength="8" ref={passwordConfirmation} />
                    <button className="loginButton" type='submit'>Sign Up</button>
                    <button className="loginRegisterButton">Login</button>
                </form>
            </div>
        </div>
    </div>
  )
}
