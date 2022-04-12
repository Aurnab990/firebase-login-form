import React from 'react';
import useFirebase from '../../Hooks/firebase';

const Login = () => {

        const {signInWithGoogle} = useFirebase();
    return (
        <div>
            <h1>Please Login</h1>
            <div>
                <button onClick={signInWithGoogle}>Google Sign in</button>
                
            </div>
            <br></br>
            <form>
                 <input type="text" placeholder='e-mail' />
                 <br></br>
                 <br></br>
                 <input type="password" placeholder='password' />
                 <br></br>
                 <button >Login</button>
            </form>
        </div>
    );
};

export default Login;