import React, { use } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";
import { sendEmailVerification } from "firebase/auth";
import { auth } from "../../services/firebase";

const Register = () => {
  const { createUser } = use(AuthContext);

  const handleRegistration = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUser(email, password)
      .then(() => {
        console.log("success");
        toast.success("Registration Successful!");

        sendEmailVerification(auth.currentUser).then(() => {
          alert("Verification email send");
        });

        e.target.email.value = "";
        e.target.password.value = "";
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleRegistration}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-3xl font-semibold text-center text-amber-500 mb-6">
          Register
        </h2>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            required
            className="input input-bordered w-full"
          />
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            name="password"
            required
            placeholder="Enter a strong password"
            minLength="8"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must be at least 8 characters, including a number, a lowercase and an uppercase letter"
            className="input input-bordered w-full"
          />
          <p className="text-xs text-gray-500 mt-1">
            Must include: number, uppercase, lowercase, 8+ characters
          </p>
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn w-full bg-amber-400 text-white">
          Register
        </button>

        {/* Login Link */}
        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <NavLink to="/auth/login" className="text-blue-500 underline">
            Login
          </NavLink>
        </p>
      </form>
    </div>
  );
};

export default Register;
