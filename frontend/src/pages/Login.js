import React from "react";
import { Link, useNavigate } from "react-router-dom";
import googleIcon from "../assets/google.svg";
import { useGoogleLogin } from "@react-oauth/google";
import { googleAuth } from "../api/login";
const Login = () => {
  // console.log(process.env.OAUTH_CLIENT_ID);
  const navigate = useNavigate();

  // const handleGoogleLogin = (e) => {
  //   e.preventDefault();
  //   window.open("http://localhost:5000/auth/google", "_self");
  // };

  const googleResponse = async (authResult) => {
    try {
      console.log(authResult);
      if (authResult.code) {
        const res = await googleAuth(authResult.code);
        const { token } = res?.data;
        const { email, name, profileImg } = res?.data?.data;
        const userData = { name, email, profileImg, token };
        localStorage.setItem("authToken", token);
        localStorage.setItem("userData", JSON.stringify(userData));
        navigate("/dashboard");
        console.log(res);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handlerGoogleLogin = useGoogleLogin({
    onSuccess: googleResponse,
    onError: googleResponse,
    flow: "auth-code",
  });

  return (
    <div className="bg-[#121212] text-white">
      <div className="max-w-6xl h-screen mx-auto">
        <form
          className="w-full h-full flex justify-center items-center"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="p-5 ring-2 ring-white/20 rounded-lg max-w-[90%] bg-[#272727]/60 shadow-md">
            <h1 className="text-3xl font-medium">Login</h1>
            <p className="mt-2 text-sm sm:text-base text-slate-400">
              Enter your email and password below to login to your account
            </p>
            <div className="my-3 flex flex-col gap-1">
              <label className="text-lg" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-black/50 rounded-lg ring-0 focus:outline-none"
              />
              <label className="text-lg" htmlFor="pass">
                Password
              </label>
              <input
                id="pass"
                type="password"
                placeholder="***********"
                className="px-4 py-2 bg-black/50 rounded-lg ring-0 focus:outline-none"
              />
              <div className="w-full inline-flex items-center gap-1">
                <hr className="w-full" />
                <p>OR</p>
                <hr className="w-full" />
              </div>
              <button
                onClick={handlerGoogleLogin}
                className="py-2 bg-black/50 rounded-lg inline-flex justify-center items-center gap-2 shadow-md"
              >
                <img src={googleIcon} className="size-7" />
                Login With Google
              </button>
            </div>
            <button className="mt-2 w-full bg-white text-black py-1 text-lg font-semibold rounded-lg">
              Login
            </button>
            <p className="mt-4 text-center">
              Don't have an account?{" "}
              <Link to={"/"} className="text-indigo-600">
                Register here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
