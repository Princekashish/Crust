import {
  Facebook,
  Instagram,
  Linkedin,
  Twitch,
  Twitter,
  Youtube,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="xl:font-Playfair font-Poppins p-5">
      <div className="flex xl:p-10  xl:items-start flex-col xl:flex-row xl:justify-between p-5 gap-4 bg-zinc-100 rounded-t-3xl">
        <h1 className="text-[3em] font-bold tracking-wider">Crust</h1>
        <div className="flex flex-col justify-start items-start gap-5 xl:gap-10 xl:flex-row ">
          <div className=" xl:w-[220px] flex flex-col gap-3">
            <h1 className="font-semibold xl:font-bold xl:text-xl">About us</h1>
            <p className="font-light text-sm xl:font-Poppins  ">
              Each plate at Aldenaire Kitchen tells a story of culinary mastery
              and passionate craftsmanship, creating an unforgettable dining
              experience.
            </p>
          </div>
          <div className="  flex flex-col gap-3">
            <h1 className="font-semibold xl:font-bold xl:text-xl">Main menu</h1>
            <div className="font-light text-sm xl:font-Poppins">
              <h1>Home</h1>
              <h1>Offer</h1>
              <h1>Menu</h1>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="font-semibold xl:font-bold xl:text-xl">Follow us</h1>
            <div className="flex justify-start items-center gap-2">
              <Instagram />
              <Twitter />
              <Facebook />
              <Youtube />
              <Link to={'https://www.linkedin.com/in/princekashish/'} target="_black">
              <Linkedin />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-xs font- pt-3 text-center">Copyright © 2024 Prince kashish | All rights reserved</h1>
    </div>
  );
}
