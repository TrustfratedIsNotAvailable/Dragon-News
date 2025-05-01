import { GoogleAuthProvider } from "firebase/auth";
import React, { use } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";

const SocialLogin = () => {
  const { signInWithProvider } = use(AuthContext);

  const handleGoogleSignIn = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithProvider(googleProvider)
      .then(() => {
        toast.success("Login with Google Successful!");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleGithubSignIn=()=>{
    console.log("Container for => Github sign in ")
  }

  return (
    <div>
      <p className="text-primary font-semibold mb-4">Login With</p>
      <button
        onClick={handleGoogleSignIn}
        className="btn btn-secondary btn-outline w-full mb-2"
      >
        <FcGoogle size={24} />
        Login With Google
      </button>
      <button
        onClick={handleGithubSignIn}
        className="btn btn-primary btn-outline w-full"
      >
        <FaGithub size={24} />
        Login With Github
      </button>
    </div>
  );
};

export default SocialLogin;
