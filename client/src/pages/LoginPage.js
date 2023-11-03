import React from 'react'
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signOut,
  } from "firebase/auth";
import { googleLogo, githubLogo } from '../assets/index.js';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../redux/slices/CartSlice.js';
import { useNavigate } from 'react-router-dom';
function LoginPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const handleGoogleLogin = (e) => {
        e.preventDefault();
        signInWithPopup(auth , provider)
        .then((result) => {
            const user = result.user ;
            dispatch(addUser({
                _id : user.uid , 
                name : user.displayName , 
                email : user.email , 
                image : user.photoURL ,
            })) && navigate("/");
            //console.log(user);
        })
        .catch((error) => {
            console.log(error);
        })
    }
    const handleSignout = (e) => {
        e.preventDefault();
        signOut(auth)
        .then(()=>{
            dispatch(removeUser())
            toast.success("Logged Out Successfully");
        })
        .catch((error) => {
            console.log(error);
        })
    }
  return (
    <div className="w-full flex flex-col items-center justify-center gap-10 py-20">
        <div className="w-full flex items-center justify-center gap-10">
            <div className="text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2
            hover:border-blue-600 cursor-pointer duration-300"
            onClick={ handleGoogleLogin }>
                <img className="w-8" src={googleLogo} alt="googleLogo" />
                <span className="text-sm text-gray-900"> 
                Sign in with Google</span>
            </div>
            <button 
            className="bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300"
            onClick={ handleSignout }>
                Sign Out
            </button>
        </div>
        <div className="w-full flex items-center justify-center gap-10">
            <div className="text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2
            hover:border-blue-600 cursor-pointer duration-300">
                <img className="w-8" src={githubLogo} alt="googleLogo" />
                <span className="text-sm text-gray-900"> Sign in with Github</span>
            </div>
            <button 
            className="bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300">
                Sign Out
            </button>
        </div>
    </div>
  )
}

export default LoginPage