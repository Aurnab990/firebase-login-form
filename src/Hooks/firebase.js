import {getAuth,  GoogleAuthProvider, onAuthStateChanged, signInWithPopup} from 'firebase/auth';
import {  useEffect, useState } from "react";
import app from '../firebase.init';


const auth = getAuth(app);
const googleAuthprovider = new GoogleAuthProvider();


const useFirebase = () =>{
    const [user, setUser] = useState([]);

    const signInWithGoogle  = () =>{
        signInWithPopup(auth, googleAuthprovider)
        .then (result =>{
            const user = result.user;
            setUser(user);
            console.log(user);
        })
    }

    useEffect( () =>{
        onAuthStateChanged(auth, user =>{
            setUser(user);
        })
    },[])

    return {
        user,
        signInWithGoogle
    };
}
export default useFirebase;