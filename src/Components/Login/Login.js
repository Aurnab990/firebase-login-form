import React from 'react';

const Login = () => {
    return (
        <div>
            <h1>Please Login</h1>
            <div>
                <button>Google Sign in</button>
                
            </div>
            <br></br>
            <form>
                 <input type="text" placeholder='e-mail' />
                 <br></br>
                 <br></br>
                 <input type="password" placeholder='password' />
            </form>
        </div>
    );
};

export default Login;