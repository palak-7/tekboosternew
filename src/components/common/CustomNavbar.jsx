"use client";
import React, { useState } from "react";
import { useContext } from "react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import Image from "next/image";
import { RiLoginBoxLine } from "react-icons/ri";
import { SiGnuprivacyguard } from "react-icons/si";
import UserContext from "../../context/UserContext";
const CustomNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const context = useContext(UserContext);
  const doLogout = async () => {
    try {
      localStorage.removeItem("authToken");
      // await logout();
      context.setUser(undefined);
    } catch (error) {
      console.log(error);
      toast.error("Logout error");
    }
  };
  return (
    <div
      className={`bg-gradient-to-t from-blue/80 w-full h-32 lg:h-32 border-b-[1px] border-white text-white lg:flex lg:justify-between lg:mx-auto px-4 fixed z-50`}
    >
      <div className="max-w-screen-2xl h-full mx-auto flex px-4 items-center justify-between lg:mx-0">
        <Link href={"/"} className="">
          <Image
            src="/logos/logowhite.png"
            priority
            className="lg:w-[300px] lg:h-[100px] w-[200px] h-[70px] items-center"
            alt="Tek Booster Logo"
            width={2000}
            height={2000}
          />
        </Link>

        <div
          className="inline-flex lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FiMenu className="text-3xl" />
        </div>
      </div>
      <ul
        className={`font-bold bg-white bg-opacity-100 mt-1 rounded-lg lg:bg-transparent items-center gap-10 uppercase text-sm w-full lg:flex lg:items-center lg:w-auto p-3 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <Link href="/">
          <li className="  text-lg pb-1 text-black lg:text-white hover:scale-105">
            Home
          </li>
        </Link>
        <Link href="/about-us">
          <li className="text-lg pb-1 text-black lg:text-white hover:scale-105">
            About Us
          </li>
        </Link>
        <Link href="/services">
          <li className="text-lg pb-1 text-black lg:text-white hover:scale-105">
            Services
          </li>
        </Link>
        <Link href="/blogs">
          <li className="text-lg pb-1 text-black lg:text-white hover:scale-105">
            Blog
          </li>
        </Link>
        <Link href="/contact-us">
          <li className="text-lg pb-1 text-black lg:text-white hover:scale-105">
            Contact Us
          </li>
        </Link>
        {!context.user ? (
          <>
            <Link className="lg:hidden" href="/login">
              <li className="pb-1 text-black">Login</li>
            </Link>
            <Link className="lg:hidden" href="/signup">
              <li className="pb-1 text-black">SignUp</li>
            </Link>
          </>
        ) : (
          <>
            <Link className="lg:hidden" onClick={doLogout} href="/login">
              <li className="pb-1 text-black">Log Out</li>
            </Link>
          </>
        )}
      </ul>
      <div className="hidden lg:inline-flex gap-8 items-center">
        {!context.user ? (
          <>
            <button className="w-[120px] hover:scale-105 h-14 bg-white flex items-center justify-center text-black uppercase text-lg font-semibold rounded-md hover:bg-darkRed duration-300">
              <Link href="/login">
                <div className="flex">
                  <RiLoginBoxLine className="mr-2 mt-1" />
                  Login
                </div>
              </Link>
            </button>
          </>
        ) : (
          <>
            <p className="text-white">Welcome {context?.user.name}</p>
            <button className="w-[100px] h-14 bg-white flex items-center justify-center text-black uppercase text-sm font-semibold rounded-md hover:bg-darkRed duration-300">
              <Link onClick={doLogout} href="/login">
                <div className="flex">
                  <SiGnuprivacyguard className="mr-2 mt-1" />
                  Log Out
                </div>
              </Link>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CustomNavbar;
