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
    <div className="xl:font-Playfair font-Poppins min-h-screen relative">
      <ScrollTop />
      <div className="flex xl:p-10 xl:justify-start xl:items-start flex-col p-5">
        <div className="mt-20 xl:w-full xl:flex xl:justify-between xl:mt-10 flex flex-col gap-6 xl:flex-row xl:p-10 ">
          <div className="flex flex-col gap-5 xl:w-3/4">
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-xl tracking-wide">Login</h1>
              <p className="text-xs underline">Forgot your password?</p>
            </div>
            <div className="flex flex-col gap-2">
              <input
                type="text"
                placeholder="Email*"
                className={`py-2 px-3 rounded-xl bg-transparent border ${emailError ? 'border-red-500' : 'border-black'} xl:w-full`}
                value={email}
                onChange={handleEmailChange}
              />
              <input
                type="text"
                placeholder="password*"
                className={`py-2 px-3 rounded-xl bg-transparent border ${passwordError ? 'border-red-500' : 'border-black'} xl:w-full`}
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
            <button className="w-full bg-black text-white py-3 px-4 rounded-lg flex justify-between items-center" onClick={handleLogin}>
              {" "}
              Email Login <ArrowRight size={20} />
            </button>
            <Link to={"/singup"}>
              <p className="text-xs underline">Don't have an account </p>
            </Link>
            <h1 className="text-xs font-medium">
              By clicking 'Log In' you agree to our website CrustClub Terms &
              Conditions, Crust Privacy Notice and Terms & Conditions.
            </h1>
          </div>
          <div>
            <div className="flex flex-col gap-5 bg-white p-5 mt-5 rounded-2xl">
              <h1 className="font-semibold text-xl ">
                Join Crust Club Get Rewarded Today.
              </h1>
              <p className="text-sm ">
                As Crust club member you get rewarded with what you love for
                doing what you love. Sign up today and receive immediate access
                to these Level 1 benefits:
              </p>
              <ul className="list-disc pl-5 text-sm">
                <li>Free shipping</li>
                <li>A 15% off voucher for your next purchase</li>
                <li>Access to Members Only products and sales</li>
                <li>Access to adidas Running and Training apps</li>
                <li>Special offers and promotions</li>
              </ul>
              <p className="text-sm ">
                Join now to start earning points, reach new levels and unlock
                more rewards and benefits from adiClub.​
              </p>
              <button className="w-full bg-black text-white py-3 px-4 rounded-lg flex justify-between items-center">
                {" "}
                Join Club <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
