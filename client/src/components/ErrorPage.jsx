import React from 'react';
import './styles/ErrorPage.css'

function ErrorPage(props) {
    return (
        <div>
            <div className='container'>
                <div className='errors' style={{margin: '30px 0'}}>
                    <h1>Oops!</h1>
                    <h2>Page not found!</h2>
                    <p>You could either go back or go to homepage</p>
                    <alert className='btnGo'>Go Back</alert>
                    <a href='/' className='btnHomePage'>HomePage</a>
                </div>
            </div>
        </div>
    );
}

export default ErrorPage;