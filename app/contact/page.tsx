"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";

interface ContactFormInputs {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormInputs>();

  const onSubmit: SubmitHandler<ContactFormInputs> = (data) => {
    console.log("Form Submitted:", data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 4000);
  };

  const workingHours = [
    { day: "Monday - Friday", time: "9:00 AM - 6:00 PM" },
    { day: "Saturday", time: "9:00 AM - 1:00 PM" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100 px-6 py-12">
      <div className="max-w-6xl w-full bg-white shadow-2xl rounded-2xl p-10 grid grid-cols-1 md:grid-cols-2 gap-10 backdrop-blur-lg">
        {/* Left: Contact Form & Working Hours */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold text-gray-900"
          >
            Get in Touch
          </motion.h2>

          <p className="text-gray-600 mt-2 text-lg">
            Reach out to us, and we’ll respond as soon as possible.
          </p>

          {submitted && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-green-500 text-white p-3 mt-4 text-center rounded-lg"
            >
              ✅ Message Sent! We’ll contact you soon.
            </motion.div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-5">
            <div>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Your Name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Invalid email format",
                  },
                })}
                className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Your Email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <textarea
                {...register("message", { required: "Message is required" })}
                className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
                rows={4}
                placeholder="Your Message"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md transition"
            >
              Send Message
            </motion.button>
          </form>

          {/* Working Hours Section */}
          <div className="mt-6 bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 text-center">
              🕒 Our Hours
            </h3>
            <ul className="mt-3 space-y-2 text-gray-800">
              {workingHours.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between px-3 py-2 bg-blue-100 rounded-md"
                >
                  <span>{item.day}</span>
                  <span>{item.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Email */}
          <div className="mt-6 text-lg text-gray-800">
            <p className="font-semibold">📧 Email Us:</p>
            <a
              href="mailto:slcrvaranasi@gmail.com"
              className="text-blue-600 hover:underline"
            >
              slcrvaranasi@gmail.com
            </a>
          </div>
        </div>

        {/* Right: Google Map */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            📍 Find Us Here
          </h3>
          <iframe
            className="w-full h-96 rounded-lg shadow-md border"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.2267477902165!2d82.98886121156859!3d25.262956677575488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e322a6031e99d%3A0x962763bc1a36226!2sDepartment%20of%20Civil%20Engineering%2C%20IIT%20(Banaras%20Hindu%20University)!5e0!3m2!1sen!2sin!4v1743340882731!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
