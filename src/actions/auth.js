import { firebase, googleAuthProvider } from '../firebase/firebaseConfig';
import { startLoading, finishLoading } from './ui';
import { types } from "../types/types";
import Swal from 'sweetalert2';
//import { noteLogout } from './notes';

export const startLoginEmailPassword = (email, password) => {

    return (dispatch) => {

        dispatch(startLoading());

        return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(({user}) => {
            dispatch(finishLoading());
            dispatch(login(user.uid, user.displayName));
        }).catch( e => {
            dispatch(finishLoading());
            Swal.fire('Error', e.message,'error');
        })
    }
}

export const startGoogleLogin = () => {

    return (dispatch) => {

        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({user}) => {
                dispatch(
                    login(user.uid, user.displayName)
                )
            })
        }
}

export const login = (uid, displayName) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
}

export const logout = () => {
    return {
        type: types.logout
    }
}

export const startLogout = () => {
    return (dispatch) => {
        firebase.auth().signOut();
        //dispatch(noteLogout());
        dispatch(logout());
    }
}
    
// this action will use the firebase auth method creating a user using its
// input email and password, as the function is sending the respective information 
// on a http request we set the promise resolved from that function as asynchronous,
// which will return the user created information, additional to it we use the returned
// information to request an additional information post including the user name.
// finally we use the dispatch to login the user based on its uid and the
// displayName recently updated
// export const startRegisterWithEmailPasswordName = (email, password, name) => {
//     return (dispatch) => {
//         firebase.auth().createUserWithEmailAndPassword(email, password)
//         .then( async ({user}) => {
//             await user.updateProfile({displayName: name});

//             dispatch(login(user.uid, user.displayName))
//         }).catch( e => {
//             console.log(e);
//             // alert displaying an error message if theres errors on the user input
//             // or if the email exists
//             Swal.fire('Error', e.message,'error');
//         })
//     }
// }

