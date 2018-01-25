// import { googleProvider, firebaseAuth } from '../../services/firebaseConfig';

// export default function loginWithGoogle() {
//   return firebaseAuth().signInWithPopup(googleProvider).then((result) => {
//     console.log(result.user);
//   });
// }

// // function authenticate(promise) {
// //   return promise
// //     .then((result) => {
// //       // login with your app with result object to get access token
// //       // localStorage.save(token)
// //       const token = result.credential.accessToken;
// //       const user = result.user;
// //       console.log('login happened with firebase, ', JSON.stringify(user));
// //       localStorage.setItem('firebaseUser', JSON.stringify(result));
// //       return Promise.resolve(result);
// //     })
// //     .catch((error) => {
// //       // const errorCode = error.errorCode;
// //       // const errorMessage = error.message;

// //       // const email = error.email;
// //       // const credential = error.credential;
// //       return Promise.reject(error);
// //     });
// // }
