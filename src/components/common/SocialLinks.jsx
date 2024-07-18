import React from "react";
import Link from "next/link";

const SocialLinks = () => {
  return (
    <div className="gap-4 fixed top-0 mt-[200px] right-0 flex flex-col justify-center items-center p-4 bg-gray-200 z-40 rounded-l-xl">
      {/* facebook */}
      <div className="group relative w-max">
        <Link
          href="https://www.facebook.com/profile.php?id=61557224162661&is_tour_dismissed=true"
          role="button"
        >
          <span className="[&>svg]:h-6 [&>svg]:w-6 [&>svg]:fill-[#1877f2]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
            </svg>
          </span>
          <span className="bg-black bg-opacity-80 text-white p-1 rounded-lg pointer-events-none absolute -top-10 -left-14 w-max opacity-0 transition-opacity group-hover:opacity-100">
            Facebook
          </span>
        </Link>
      </div>
      {/* Instagram */}
      <div className="group relative w-max">
        <Link href="https://www.instagram.com/tek_booster/" role="button">
          <span className="[&>svg]:h-6 [&>svg]:w-6 [&>svg]:fill-[#c13584]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </svg>
          </span>
          <span className="bg-black bg-opacity-80 text-white p-1 rounded-lg pointer-events-none absolute -top-10 -left-14 w-max opacity-0 transition-opacity group-hover:opacity-100">
            Instagram
          </span>
        </Link>
      </div>
      {/* whatsapp */}
      <div className="group relative w-max">
        <Link target="__blank" href="https://t.ly/l4XXl" role="button">
          <span className="[&>svg]:h-6 [&>svg]:w-6 [&>svg]:fill-[#25D366]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 448 512"
            >
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
            </svg>
          </span>
          <span className="bg-black bg-opacity-80 text-white p-1 rounded-lg pointer-events-none absolute -top-10 -left-14 w-max opacity-0 transition-opacity group-hover:opacity-100">
            Whatsapp
          </span>
        </Link>
      </div>
      {/* LinkedIn */}
      <div className="group relative w-max">
        <Link
          href="https://www.linkedin.com/in/tek-booster-7739092b8/"
          role="button"
        >
          <span className="[&>svg]:h-6 [&>svg]:w-6 [&>svg]:fill-[#0C359E]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
            </svg>
          </span>
          <span className="bg-black bg-opacity-80 text-white p-1 rounded-lg pointer-events-none absolute -top-10 -left-14 w-max opacity-0 transition-opacity group-hover:opacity-100">
            LinkedIn
          </span>
        </Link>
      </div>
      {/* <!-- Pinterest --> */}
      <div className="group relative w-max">
        <Link href="https://in.pinterest.com/tekbooster/" role="button">
          <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#e60023]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
              {/*     <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. --> */}
              <path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3 .8-3.4 5-20.3 6.9-28.1 .6-2.5 .3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z" />
            </svg>
          </span>
          <span className="bg-black bg-opacity-80 text-white p-1 rounded-lg pointer-events-none absolute -top-10 -left-14 w-max opacity-0 transition-opacity group-hover:opacity-100">
            Pinterest
          </span>
        </Link>
      </div>
      {/* <!-- Youtube --> */}
      <div className="group relative w-max">
        <Link
          href="https://www.youtube.com/channel/UCdI4zxcUrKryZd__uQysiNg"
          role="button"
        >
          <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#ff0000]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              {/*     <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. --> */}
              <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
            </svg>
          </span>
          <span className="bg-black bg-opacity-80 text-white p-1 rounded-lg pointer-events-none absolute -top-10 -left-14 w-max opacity-0 transition-opacity group-hover:opacity-100">
            Youtube
          </span>
        </Link>
      </div>
      {/* twitter */}
      <div className="group relative w-max">
        <Link href="https://twitter.com/Tek_booster" role="button">
          <span className="[&>svg]:h-4 [&>svg]:w-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 512 512"
            >
              {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. --> */}
              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
            </svg>
          </span>
          <span className="bg-black bg-opacity-80 text-white p-1 rounded-lg pointer-events-none absolute -top-10 -left-14 w-max opacity-0 transition-opacity group-hover:opacity-100">
            Twitter
          </span>
        </Link>
      </div>
      {/* Quora */}
      <div className="group relative w-max">
        <Link href="https://www.quora.com/profile/Tekbooster" role="button">
          <svg
            className="text-red"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              d="M8.73 12.476c-.554-1.091-1.204-2.193-2.473-2.193-.242 0-.484.04-.707.142l-.43-.863c.525-.45 1.373-.808 2.464-.808 1.697 0 2.568.818 3.26 1.86.41-.89.605-2.093.605-3.584 0-3.724-1.165-5.636-3.885-5.636-2.68 0-3.839 1.912-3.839 5.636 0 3.704 1.159 5.596 3.84 5.596.425 0 .811-.046 1.166-.15Zm.665 1.3a7.127 7.127 0 0 1-1.83.244C3.994 14.02.5 11.172.5 7.03.5 2.849 3.995 0 7.564 0c3.63 0 7.09 2.828 7.09 7.03 0 2.337-1.09 4.236-2.675 5.464.512.767 1.04 1.277 1.773 1.277.802 0 1.125-.62 1.179-1.105h1.043c.061.647-.262 3.334-3.178 3.334-1.767 0-2.7-1.024-3.4-2.224Z"
              fill="red"
            ></path>
          </svg>
          <span className="bg-black bg-opacity-80 text-white p-1 rounded-lg pointer-events-none absolute -top-10 -left-14 w-max opacity-0 transition-opacity group-hover:opacity-100">
            Quora
          </span>
        </Link>
      </div>
    </div>
  );
};

export default SocialLinks;
