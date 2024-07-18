import React from "react";
import Link from "next/link";
import Image from "next/image";
import NewsLetter from "./NewsLetter";

const Footer = () => {
  return (
    <div className=" mx-auto w-full p-4 lg:py-8 bg-gradient-to-t bg-blue">
      {/* <NewsLetter /> */}
      <div className="container px-10 text-white">
        <div className="lg:grid grid-cols-4">
          {/* logo */}
          <div>
            <Link href="/" className="">
              <Image
                src="/logos/logowhite.png"
                alt="logo"
                width={200}
                height={200}
                className="w-[250px] mb-4"
              />
            </Link>
            <p className=" leading-normal">
              At TekBooster, we are passionate about helping businesses thrive
              in the digital world.
            </p>
          </div>
          <div className="lg:flex justify-center mt-6">
            <div className="mb-6">
              <h5 className="mb-2.5 font-bold uppercase">Quick Links</h5>

              <ul className="mb-0 list-none leading-loose">
                <li>
                  <Link
                    href="/"
                    className="hover:text-orange-200 hover:scale-105"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about-us"
                    className="hover:text-orange-200 hover:scale-105"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blogs"
                    className="hover:text-orange-200 hover:scale-105"
                  >
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-us"
                    className="hover:text-orange-200 hover:scale-105"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:flex justify-center mt-6">
            <div className="mb-6">
              <h5 className="mb-2.5 font-bold uppercase">What We Do</h5>

              <ul className="mb-0 list-none leading-loose">
                <li>
                  <Link
                    href="/services/SEO"
                    className="hover:text-orange-200 hover:scale-105"
                  >
                    Search Engine Optimization
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/Web-Development"
                    className="hover:text-orange-200 hover:scale-105"
                  >
                    Website development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/Branding"
                    className="hover:text-orange-200 hover:scale-105"
                  >
                    Branding
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/Content-Marketing"
                    className="hover:text-orange-200 hover:scale-105"
                  >
                    Content Marketing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* address */}
          <div className="lg:flex justify-center mt-6 lg:ml-5">
            <div className="mb-6">
              <ul className="mb-0 list-none leading-loose">
                <li className="leading-normal">
                  <h5 className="mb-2.5 font-bold uppercase">Address</h5>
                  <Link
                    href="https://maps.app.goo.gl/pkNhboZw8MyiRozm6"
                    className="hover:text-orange-200 hover:scale-105"
                    target="__blank"
                  >
                    G-36, First Floor, Outer circle, Connaught place, New Delhi
                    - 110001
                  </Link>
                </li>
                <li className="mt-3 leading-normal">
                  <Link href="tel:+91-958 293 0940">
                    <h5 className="mb-2.5 font-bold uppercase">Phone</h5>
                    <div className="hover:text-orange-200 hover:scale-105">
                      +91-958 293 0940
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-6 border-white sm:mx-auto  lg:my-8" />
      <div className="flex justify-center items-center text-white">
        <span className="text-sm sm:text-center ">
          © 2024{" "}
          <Link href="/" className="hover:underline">
            Tek Booster
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
