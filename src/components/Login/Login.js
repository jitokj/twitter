import React from 'react';
import "./Login.css";
import TwitterIcon from '@material-ui/icons/Twitter';
import firebase from "firebase";
import { useStateValue } from '../../provider/StateProvider';

const Login = () => {

    const [{photoUrl,token,displayName},dispatch] = useStateValue();

    var provider = new firebase.auth.TwitterAuthProvider();
    return (
        <div className="login">
            <TwitterIcon className="login__icon" />
             <input onClick={()=>{firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
    // You can use these server side with your app's credentials to access the Twitter API.
    var token = result.credential.accessToken;
    var secret = result.credential.secret;
    // The signed-in user info.
    var user = result.user;
    console.log("👿>>",user.photoURL);
    console.log("token",token);
    dispatch({
        type: "ADD_USER",
        photoURL: user.photoURL,
        token: token,
        displayName: user.displayName
    })
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });}}
              type="image" alt="twitter_image"
              src="https://cdn.cms-twdigitalassets.com/content/dam/developer-twitter/auth-docs/sign-in-with-twitter-gray.png.img.fullhd.medium.png" />
        <h5>Made with ❤️ jito</h5> 
        </div>
    );
};

export default Login;