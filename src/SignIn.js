import 'firebaseui/dist/firebaseui.css';
import { firebase, ui } from "./include/Firebase";

const SignIn = () => {
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

    ui.start('#firebaseui-auth-container', uiConfig);

    return ( 
        <div>
            <h1>Welcome to My Awesome App</h1>
            <div id="firebaseui-auth-container"></div>
            <div id="loader">Loading...</div>

        </div>
     );
}

export default SignIn;