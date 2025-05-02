import React, { use, useRef } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";

const Login = () => {
  const { login, resetPassword } = use(AuthContext);
  const emailRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    login(email, password)
      .then(() => {
        console.log("success");
        toast.success("Login successful!");

        e.target.email.value = "";
        e.target.password.value = "";

        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handlePasswordReset = () => {
    console.log("Password Reset handle ");
    const email = emailRef.current.value;
    if (!email) return alert("Enter your email!");
    resetPassword(email)
      .then(() => {
        alert("Password Reset Successful!");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-md"
      >
        <fieldset className="border border-gray-300 p-4 rounded">
          <legend className="text-lg font-semibold text-blue-600 px-2">
            Login
          </legend>

          <label className="block mt-4 text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            ref={emailRef}
            className="input input-bordered w-full"
            placeholder="Enter your email"
            required
          />

          <label className="block mt-4 text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="input input-bordered w-full"
            placeholder="Enter your password"
            required
          />

          <div className="text-right mt-2">
            <button
              type="button"
              onClick={handlePasswordReset}
              className="text-blue-600 text-sm underline"
            >
              Forgot password?
            </button>
          </div>

          <button type="submit" className="btn btn-neutral mt-4 w-full">
            Login
          </button>

          <p className="text-center mt-4 text-sm">
            Don't have an account?{" "}
            <NavLink to="/auth/register" className="text-blue-500 underline">
              Register
            </NavLink>
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
