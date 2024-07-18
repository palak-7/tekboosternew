"use client";
import React, { useRef, useEffect, useState } from "react";
import "animate.css";
// import Content from "./Content";
import Image from "next/image";
import ScrollTrigger from "react-scroll-trigger";

const HomeBanner = () => {
  const videoRef = useRef(null);
  const [animate, setAnimate] = useState(false);
  const [width, setWidth] = useState(0);
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    handleWindowSizeChange();
    if (videoRef.current && isClient) {
      videoRef.current.play().catch((error) => {
        // Handle play() promise rejection here
        console.error("Error playing video:", error);
      });
    }
  }, [isClient]);
  return (
    <div className="container min-w-full">
      {/* home banner */}
      <div className="absolute top-0 h-[550px] w-full max-w-screen-2xl mx-auto flex flex-col justify-center items-center z-10">
        {isClient && (
          <div className="relative">
            {width > 768 ? (
              <div className="relative">
                <video
                  ref={videoRef}
                  autoPlay
                  muted
                  loop
                  className=" inset-0 w-full h-full object-cover z-10"
                >
                  <source src="/banner/work-vid.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ) : (
              <div>
                <Image
                  src="/banner/homeBanner.jpg"
                  width={200}
                  height={200}
                  className="w-screen"
                  alt="best digital marketing company in delhi"
                />
              </div>
            )}

            <div className="lg:w-1/2  w-full z-30 bg-opacity-60 p-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <ScrollTrigger
                onEnter={() => setAnimate(true)}
                onExit={() => setAnimate(false)}
              >
                <div className="flex w-full">
                  <Image
                    src="/banner/heading.png"
                    height={1000}
                    width={1000}
                    alt="heading"
                    className={`h-[400px] w-[700px] ${
                      animate && "animate__animated animate__slideInDown"
                    }`}
                  />
                </div>
              </ScrollTrigger>
            </div>
          </div>
        )}
      </div>

      {/*content */}
      {/* <div className="relative z-20">
        <div className="grid grid-cols-12 w-full"><Content /></div>
      </div> */}
    </div>
  );
};

export default HomeBanner;
