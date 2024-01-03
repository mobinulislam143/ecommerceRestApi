import React, { useState } from 'react';

function RegisterPage(props) {
    const [showEmailInput, setShowEmailInput] = useState(false);
    const [activeTab, setActiveTab] = useState('Login')

    const showLogin = () => {
        setShowEmailInput(false)
        setActiveTab('login')
    }
    const showRegister = () => {
        setShowEmailInput(true)
        setActiveTab("Register")
    }


    return (
        <div>
             <div className='MainHero' style={{backgroundColor:'#ccd5e2', padding:'100px 0'}}>
                <div className='container'>
                    <div className='HeroSec' style={{ color:'black',textTransform:'capitalize'}}>
                        <div className='title text-center'>
                            <h2 style={{fontWeight:'400', fontSize:'60px',}}>Login</h2>
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize:'18px'}}>
                                <a href='/' style={{textDecoration:'none', marginRight: '5px'}}>Home</a>
                                <span>//</span>
                                <span className='carts'> Login</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container '>
                <div className='login-register-tap-list d-flex justify-content-center text-center my-4' role='tablist'>
                    <a className='active' style={{cursor:'pointer', textDecoration:"none"}} onClick={showLogin}>
                        <h4>Login</h4>
                    </a>
                    <span className='mx-2'>|</span>
                    <a className='active text-center' style={{cursor:'pointer', textDecoration:"none"}} onClick={showRegister}>
                        <h4>Register</h4>
                    </a>
                </div>
                <div className='card shadow p-4 '>
                    <input type='text' placeholder='Username' className='form-control p-2' />
                    <input type='password' placeholder='password' className='form-control p-2 my-2' />
                    {showEmailInput && (
                        <input type='email' placeholder='Email' className='form-control p-2 my-2' />

                    )}

                    <div className='login-toggle-btn d-flex justify-content-between align-items-center my-4'>
                        <label><input type='checkbox' className='mx-2' /> <span>  Remember me </span></label>
                        <a href='#'>Forgot password</a>
                    </div>
                    {
                        activeTab==='login'?(
                        <button style={{background:'gray', width: '100px', border:'none', padding:'8px 15px', borderRadius:'6px', fontWeight:'bold', letterSpacing:'1px'}}>Login</button>):
                        (
                    <button style={{background:'gray', width: '100px', border:'none', padding:'8px 15px', borderRadius:'6px', fontWeight:'bold', letterSpacing:'1px'}}>Register</button>
                        )

                    }
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;