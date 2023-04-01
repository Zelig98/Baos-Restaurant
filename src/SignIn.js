import { getAuth } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';

const SignIn = () => {
    const auth = getAuth();
    var ui = new firebaseui.auth.AuthUI(auth);
    ui.start('#firebaseui-auth-container', uiConfig);
    var uiConfig = {
        callbacks: {
            signInSuccessWithAuthResult: function(authResult, redirectUrl){
                return true;
            },
            uiShown: function(){
                document.getElementById('loader').style.display = 'none';
            }
        },

        signInFlow: 'popup',
        signInSuccessUrl: '<https://localhost3000>',
        signInOptons: [
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
        ]
    }

    return ( 
        <div>
            <h1>Welcome to My Awesome App</h1>
            <div id="firebaseui-auth-container"></div>
            <div id="loader">Loading...</div>

        </div>
     );
}

export default SignIn;