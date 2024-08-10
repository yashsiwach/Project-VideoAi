import Header from "./Header";
import { useRef, useState } from "react";
import { validate } from "../utile/Validator";
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utile/Firebase";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const email = useRef(null);
    const password = useRef(null);
    const fullName = useRef(null);
    const navigate = useNavigate();


    const changeIt = () => {
        setIsSignIn(!isSignIn);
    };

    const buttonClick = () => {
        const message = validate(
            email.current?.value, 
            password.current?.value, 
            isSignIn ? null : fullName.current?.value
        );
        setErrorMessage(message);
        
        if (!message) {
            if (!isSignIn) {
                createUserWithEmailAndPassword(auth, email.current?.value, password.current?.value)
                    .then((userCredential) => {
                        const user = userCredential.user;
                        updateProfile(user, {
                            displayName: fullName.current.value, photoURL: "https://avatars.githubusercontent.com/u/112823140?v=4"
                        }).then(() => {
                              
                            navigate("/browse")
                          }).catch((error) => {
                              setErrorMessage(message);
                          });
                       
                    })
                    .catch((error) => {
                        setErrorMessage(error.message);
                        console.log(error.code, error.message);
                        
                    });
            } else {
                signInWithEmailAndPassword(auth, email.current?.value, password.current?.value)
                    .then((userCredential) => {
                        const user = userCredential.user;
                        console.log(user);
                        navigate("/browse");
                    })
                    .catch((error) => {
                        setErrorMessage(error.message);
                        console.log(error.code, error.message);
                    });
            }
        }
    };

    return (
        <div>
             <div className='absolute px-8 py-2 z-10 flex justify-between items-center w-full'>
      <img className="w-44" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt='logo'
                />
                </div>
            <img className="absolute" src="https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/19fc1a4c-82db-4481-ad08-3a1dffbb8c39/IN-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_24a485f6-1820-42be-9b60-1b066f1eb869_large.jpg"
                alt="background"
            />

            <form onSubmit={(e) => { e.preventDefault() }} className="rounded-md absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
                <h1 className="font-bold text-3xl py-4 ">
                    {isSignIn ? "Sign In" : "Sign Up"}
                </h1>
                {!isSignIn && (
                    <input ref={fullName} type="text" placeholder="  Full Name" className=" m-2 w-full h-10 rounded bg-gray-700" />
                )}
                <input ref={email} type="email" placeholder="  Email" className=" m-2 w-full h-10 rounded bg-gray-700" />
                <input ref={password} type="password" placeholder="  Password" className=" m-2 w-full h-10 rounded bg-gray-700" />

                <p className="italic m-2 text-red-500">{errorMessage}</p>

                <button className="h-10 m-2 bg-red-800 text-white w-full rounded" onClick={buttonClick}>
                    {isSignIn ? "Sign In" : "Sign Up"}
                </button>

                <p className="m-2 ">
                    {isSignIn ? "New to Netflix ? " : " Already a User ? "}
                    <span onClick={changeIt} className="text-blue-500 cursor-pointer">
                        {isSignIn ? "Sign Up now." : "Sign In now."}
                    </span> 
                </p>
            </form>
        </div>
    );
};
export default Login;
