import React from 'react'
import '../styles/auth.css'
import { NavLink } from 'react-router-dom';


const RegistrationPage = () => {
    return <>
        <main className="w-100 h-100 d-flex justify-content-center align-items-center">
            <div className="auth-container" id='register-window'>
                <h1>register.</h1> 
                <div className="inputs-container">
                    <input className='custom-import' type="email" id="" placeholder='ваш email'/>
                    <label><p>email</p></label>
                    <input className='custom-import' type="text" id="" placeholder='ваш логин'/>
                    <label ><p>login</p></label>
                    <input className='custom-import' type="password" id="" placeholder='ваш пароль'/>
                    <label><p>password</p></label>
                    <input className='custom-import' type="password" id="" placeholder='ещё раз ваш пароль'/>
                    <label><p>confirm password</p></label>
                    <button id='black-btn'>register</button>
                    
                    <p id='reg-link'><NavLink to='/auth'>Уже есть аккаунт? Войти</NavLink></p>
                </div>
            </div>
        </main>
    </>
}

export default RegistrationPage