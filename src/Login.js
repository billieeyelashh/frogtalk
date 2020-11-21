import React from 'react';
import './Login.css';
import {Button} from "@material-ui/core";
import {auth, provider } from "./firebase";
import { useStateValue } from './StateProvider';
import { actionTypes, ActionTypes } from "./reducer"

function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = (e) =>{
        auth
        .signInWithPopup(provider).then((result) => {console.log(result);
            dispatch({
                type:actionTypes.SET_USER,
                user: result.user,
            })
        })
        .catch((error) => {
            alert(error.message);
        });
    };


    return  <div className="login">
            <div className="login__container">
        <img src="https://i.pinimg.com/originals/34/80/e8/3480e8ff1d56f9222a91a2c45efc8930.png" 
             alt=""
             />
             <h1>Sign in to FrogTalk</h1>
                <p>Warning it's getting froggy</p>
                <Button onClick={signIn}>Sign in with google</Button>
            </div>

        </div>;
    
}

export default Login;
