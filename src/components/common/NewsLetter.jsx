"use client";
import { newsletter } from "@/services/form-data";
import { toast } from "react-toastify";
import React, { useState } from "react";
const NewsLetter = () => {
  const [formData, setFormData] = useState({
    email: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await newsletter(formData);
    if (response.success) {
      toast.success(response.message, {
        position: "bottom-left",
      });
    } else {
      toast.error(response.message, {
        position: "bottom-left",
      });
    }
  };
  return (
    <div className="relative z-10 rounded-sm  p-8 shadow-three sm:p-11 lg:p-8 xl:p-11">
      <h3 className="mb-4 text-2xl font-bold leading-tight text-white">
        Subscribe to Our Newsletter receive future updates
      </h3>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="border-stroke mb-4 w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary"
            value={formData.email}
            onChange={handleChange}
          />
          <button
            type="submit"
            value="Subscribe"
            className="mb-5 flex w-full cursor-pointer items-center justify-center rounded-sm bg-orange-200 border-2 px-9 py-3 font-semibold hover:scale-105 hover:bg-orange-300 text-lg shadow-submit duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
