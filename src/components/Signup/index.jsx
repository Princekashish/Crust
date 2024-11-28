import { ArrowRight } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ScrollTop from "../../utils/Scrolltop";

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const validateInput = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "firstName":
        if (value.trim() === "") {
          setFirstNameError(true);
        } else {
          setFirstNameError(false);
        }
        setFirstName(value);
        break;
      case "lastName":
        if (value.trim() === "") {
          setLastNameError(true);
        } else {
          setLastNameError(false);
        }
        setLastName(value);
        break;
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          setEmailError(true);
        } else {
          setEmailError(false);
        }
        setEmail(value);
        break;
      case "password":
        const passwordRegex =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).{8,}$/;
        if (!passwordRegex.test(value)) {
          setPasswordError(true);
        } else {
          setPasswordError(false);
        }
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleLogin = () => {
    if (!firstName) {
      setFirstNameError(true);
    }
    if (!lastName) {
      setLastNameError(true);
    }
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
      <div className="flex xl:p-10 xl:justify-center xl:items-center xl:h-screen  flex-col p-5">
        <div className="mt-20 xl:w-full xl:flex xl:justify-center  xl:items-center xl:mt-10 flex flex-col gap-6 xl:flex-row xl:p-10">
          <div className="flex flex-col gap-5 bg-[#F2F2F2] justify-center items-center p-10 rounded-3xl ">
            <div className="flex flex-col gap-2 w-3/4">
              <h1 className="font-bold xl:text-4xl tracking-wide">Sign Up</h1>
            </div>
            <div className="flex flex-col gap-2 w-3/4">
              <h1>Your Name</h1>
             <div className="flex gap-6">
             <input
                type="text"
                placeholder="First Name"
                name="firstName"
                value={firstName}
                onChange={validateInput}
                className={`py-2 px-3 rounded-xl bg-transparent border ${
                  firstNameError ? "border-red-500" : "border-black"
                } xl:w-full`}
              />
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={lastName}
                onChange={validateInput}
                className={`py-2 px-3 rounded-xl bg-transparent border ${
                  lastNameError ? "border-red-500" : "border-black"
                } xl:w-full`}
              />
             </div>
            </div>
            <div className="flex flex-col gap-2  w-3/4  ">
              <h1>Login Details</h1>
             <div className="flex gap-6">
             <input
                type="text"
                placeholder="Email"
                name="email"
                value={email}
                onChange={validateInput}
                className={`py-2 px-3 rounded-xl bg-transparent border ${
                  emailError ? "border-red-500" : "border-black"
                } xl:w-full`}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={validateInput}
                className={`py-2 px-3 rounded-xl bg-transparent border ${
                  passwordError ? "border-red-500" : "border-black"
                } xl:w-full`}
              />
             </div>
              <p className="text-[11px] pl-2">
                Minimum 8 characters with at least one uppercase, one lowercase,
                one special character and a number
              </p>

              <label className="flex items-center gap-2 font-Poppins ">
                <input type="checkbox" className="form-checkbox border-none" />
                <span className="ml-3 block text-sm font-medium text-gray-700">
                  By clicking 'Log In' you agree to our website CrustClub Terms
                  & Conditions, Crust Privacy Notice and Terms & Conditions.
                  info
                </span>
              </label>
              <label className="flex items-center gap-2 font-Poppins ">
                <input type="checkbox" className="form-checkbox border-none" />
                <span className="ml-3 block text-sm font-medium text-gray-700">
                  Keep me logged in - applies to all log in options below. More
                  info info
                </span>
              </label>
            </div>
            <button
              onClick={handleLogin}
              className="w-3/4 bg-black text-white py-3 px-4 rounded-lg flex justify-between items-center"
            >
              {" "}
              Register <ArrowRight size={20} />
            </button>
            <Link className="text-blue-600  w-3/4 " to={"/login"}>
              <p className="text-sm underline ">Login </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
