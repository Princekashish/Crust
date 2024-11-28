import { ArrowRight } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ScrollTop from "../../utils/Scrolltop";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(false);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError(false);
  };

  const handleLogin = () => {
    if (!email) {
      setEmailError(true);
    }
    if (!password) {
      setPasswordError(true);
    }
  };

  return (
    <div className=" font-Poppins h-screen relative">
      <ScrollTop />
      <div className="flex xl:p-10 xl:justify-center xl:h-[100vh] xl:items-center flex-col p-5">
        <div className="mt-20 xl:flex xl:justify-center   items-center xl:mt-10 flex flex-col gap-6 xl:flex-row xl:p-10 ">
          <div className="flex flex-col gap-5  xl:justify-center xl:items-center bg-[#F2F2F2] xl:h-[470px] p-5 rounded-3xl">
            <div className="flex flex-col gap-2  xl:w-[480px]">
              <h1 className="font-bold text-xl xl:text-4xl tracking-wide">
                Login
              </h1>
            </div>
            <div className="flex flex-col gap-2 xl:gap-6 ">
              <input
                type="text"
                placeholder="Email*"
                className={`py-2 px-3 rounded-xl bg-transparent border outline-none ${
                  emailError ? "border-red-500" : "border-black"
                } xl:w-full`}
                value={email}
                onChange={handleEmailChange}
              />
              <input
                type="text"
                placeholder="password*"
                className={`py-2 px-3 rounded-xl bg-transparent border outline-none ${
                  passwordError ? "border-red-500" : "border-black"
                } xl:w-full`}
                value={password}
                onChange={handlePasswordChange}
              />
              <label className="flex items-center gap-2 font-Poppins ">
                <input type="checkbox" className="form-checkbox border-none" />
                <span className="ml-3 block text-sm font-medium text-gray-700">
                  Keep me logged in - applies to all log in options below. More
                  info
                </span>
              </label>
            </div>
            <button
              className="xl:w-[480px] bg-black text-white py-3 px-4 rounded-lg flex justify-between items-center"
              onClick={handleLogin}
            >
              {" "}
              Email Login <ArrowRight size={20} />
            </button>
            <Link to={"/singup"}>
              <p className="text-sm text-blue-600  underline">
                Don't have an account{" "}
              </p>
            </Link>
            <h1 className="text-xs font-medium">
              By clicking 'Log In' you agree to our website CrustClub Terms &
              Conditions, Crust Privacy Notice and Terms & Conditions.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
