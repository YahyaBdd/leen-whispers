import { auth, db } from '@/firebase';
import { FacebookAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

export default function () {

    function signInWithGmail() {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then(async (result) => {
    
            const data = {
                fullName : result.user.displayName,
                email: result.user.email,
                uid: result.user.uid,
            }
    
            await setDoc(doc(db, "users", result.user.email), data);
        
            localStorage.setItem("userName", result.user.displayName);
            localStorage.setItem("identifier", result.user.email);
    
            window.location.reload();
            }).catch((error) => {
            console.log(error.message);
        });
        }      
        
        function signInWithFacebook() {
        const provider = new FacebookAuthProvider();
        signInWithPopup(auth, provider)
        .then(async (result) => {
    
            const data = {
                fullName : result.user.displayName,
                email: result.user.email,
                uid: result.user.uid,
            }

            await setDoc(doc(db, "users", result.user.email), data);
    
    
            localStorage.setItem("userName", result.user.displayName);
            localStorage.setItem("identifier", result.user.email);
    
            window.location.reload();
            })
            .catch((error) => {
            console.log(error.message);
        });
        }
  return (
    <>
        <style>
            {`
               @media (min-width: 390px) and (max-width: 413.98px){
                    .btn {
                        font-size: .8rem;
                        padding: 1rem 1.8rem;
                    }
                    button {
                        width: 340px !important;
                    }    
                }

            `}
        </style>
        <div className='container' style={{display:'flex',flexDirection:'column', alignItems:'center'}}>
        <button
            className='btn btn--tra-black hover--black nav-link red'
            style={{width:'400px'}}
            onClick={signInWithGmail}
            >
            <svg style={{paddingRight:'10px'}} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 193"><path fill="#4285F4" d="M58.182 192.05V93.14L27.507 65.077L0 49.504v125.091c0 9.658 7.825 17.455 17.455 17.455h40.727Z"/><path fill="#34A853" d="M197.818 192.05h40.727c9.659 0 17.455-7.826 17.455-17.455V49.505l-31.156 17.837l-27.026 25.798v98.91Z"/><path fill="#EA4335" d="m58.182 93.14l-4.174-38.647l4.174-36.989L128 69.868l69.818-52.364l4.669 34.992l-4.669 40.644L128 145.504z"/><path fill="#FBBC04" d="M197.818 17.504V93.14L256 49.504V26.231c0-21.585-24.64-33.89-41.89-20.945l-16.292 12.218Z"/><path fill="#C5221F" d="m0 49.504l26.759 20.07L58.182 93.14V17.504L41.89 5.286C24.61-7.66 0 4.646 0 26.23v23.273Z"/></svg>
            continue with google
        </button>
        <br />
        <button
            className='btn btn--tra-black hover--black nav-link'
            style={{width:'400px'}}
            onClick={signInWithFacebook}
        >
            <svg style={{paddingRight:'10px'}} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 128 128"><rect width="118.35" height="118.35" x="4.83" y="4.83" fill="#3d5a98" rx="6.53" ry="6.53"/><path fill="#fff" d="M86.48 123.17V77.34h15.38l2.3-17.86H86.48v-11.4c0-5.17 1.44-8.7 8.85-8.7h9.46v-16A126.56 126.56 0 0 0 91 22.7c-13.62 0-23 8.3-23 23.61v13.17H52.62v17.86H68v45.83z"/></svg>
            continue with facebook
        </button>
        <br />
        <p>- Or -</p>
        </div>
    </>
  )
}
