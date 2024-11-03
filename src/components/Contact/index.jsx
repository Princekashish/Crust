import React, { useState } from "react";
import ScrollTop from "../../utils/Scrolltop";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    if (e.target.name === "phone" && isNaN(e.target.value)) {
      return;
    }
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error when input changes
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.firstName) errors.firstName = "First name is required";
    if (!formData.lastName) errors.lastName = "Last name is required";
    if (!formData.email) errors.email = "Email is required";
    if (!formData.phone) errors.phone = "Phone number is required";
    if (!formData.message) errors.message = "Message is required";
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid, proceed with submission
    
      // Add your form submission logic here
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      }); // Erase form data after submission
    }
  };

  return (
    <div className=" font-Poppins  ">
    <ScrollTop />
      <div className="flex xl:p-10 xl:justify-start xl:items-start flex-col p-5">
        <div className=" mt-20">
          <h1 className="text-center text-2xl font-semibold font-Poppins ">
            For Bulk Order or Query
          </h1>
        </div>
        <div className="  xl:w-full flex flex-col xl:flex-row xl:justify-center xl:items-center xl:gap-10 gap-5">
          <div className="flex justify-center items-center p-5   xl:w-1/2">
            <form
              className="flex flex-col  w-full gap-8 xl:p-4 "
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col xl:flex-row gap-4 xl:gap-6 ">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className={`py-2 px-3 rounded-xl bg-transparent border outline-none ${
                    errors.firstName ? "border-red-500" : "border-black"
                  } xl:w-full`}
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className={`py-2 px-3 rounded-xl bg-transparent border outline-none ${
                    errors.lastName ? "border-red-500" : "border-black"
                  } xl:w-full`}
                />
              </div>
              <div className="flex flex-col xl:flex-row gap-4 xl:gap-6">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className={`py-2 px-3 rounded-xl bg-transparent border outline-none ${
                    errors.email ? "border-red-500" : "border-black"
                  } xl:w-full`}
                />
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  className={`py-2 px-3 rounded-xl bg-transparent border outline-none ${
                    errors.phone ? "border-red-500" : "border-black"
                  } xl:w-full`}
                />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                className={`py-2 px-3 rounded-xl bg-transparent border outline-none ${
                  errors.message ? "border-red-500" : "border-black"
                } xl:w-full`}
              ></textarea>
              <button
                type="submit"
                className="rounded-full bg-black px-4 py-2 text-white font-bold"
              >
                Send
              </button>
            </form>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/3218467/pexels-photo-3218467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              loading="lazy"
              className="h-[450px] pointer-events-none rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
