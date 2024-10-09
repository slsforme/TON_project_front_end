import React from 'react'
import '../styles/auth.css'
import { NavLink } from 'react-router-dom';


const AuthorizationPage = () => {
    return <>
        <main className="w-100 h-100 d-flex justify-content-center align-items-center">
            <div className="auth-container">
                <h1>login.</h1> 
                <div className="inputs-container">
                    <input className='custom-import' type="text" id="" placeholder='ваш логин'/>
                    <label ><p>login</p></label>
                    <input className='custom-import' type="password" id="" placeholder='ваш пароль'/>
                    <label><p>password</p></label>
                    <button id='black-btn'>authorize</button>
                    
                    <p id='reg-link'><NavLink to='/register'>Нет аккаунта? Зарегистрируйтесь</NavLink></p>
                </div>
            </div>
        </main>
    </>
}

export default AuthorizationPage