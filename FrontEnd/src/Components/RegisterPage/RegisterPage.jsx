import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginUiImg from "../../assets/Images/LoginUiImg.jpeg";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setError("");
    console.log("Form data:", { name, number, password });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <h1 className="font-playfair text-center text-4xl md:text-7xl lg:text-9xl font-light mt-8 md:mt-12 cursor-default text-gray-800">
        OUTFIT ORBIT
      </h1>

      <div className="flex flex-col md:flex-row flex-grow items-center justify-center p-4 md:p-8">
        <div className="hidden md:block w-full md:w-1/2 max-w-2xl xl:max-w-3xl p-4">
          <img
            src={LoginUiImg}
            alt="Fashion illustration"
            className="w-full h-auto rounded-2xl shadow-xl object-cover"
            loading="lazy"
          />
        </div>

        <div className="w-full md:w-1/2 max-w-md xl:max-w-lg p-4">
          <form
            onSubmit={handleSubmit}
            className="bg-[#f0f7da] p-6 md:p-8 rounded-2xl shadow-md transition-all duration-300 hover:shadow-lg"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6">
              Create Your Account
            </h2>

            <div className="space-y-4">
              <div>
                <label
                  className="block text-gray-700 text-sm font-semibold mb-2"
                  htmlFor="name"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full py-2 px-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#6495ED] transition-colors"
                  required
                />
              </div>

              <div>
                <label
                  className="block text-gray-700 text-sm font-semibold mb-2"
                  htmlFor="number"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  className="w-full py-2 px-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#6495ED] transition-colors"
                  required
                />
              </div>

              <div>
                <label
                  className="block text-gray-700 text-sm font-semibold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full py-2 px-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#6495ED] transition-colors"
                  required
                />
              </div>

              <div>
                <label
                  className="block text-gray-700 text-sm font-semibold mb-2"
                  htmlFor="confirmPassword"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full py-2 px-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#6495ED] transition-colors"
                  required
                />
              </div>
            </div>

            {error && (
              <p className="text-red-500 text-sm mt-4 text-center">{error}</p>
            )}

            <button
              type="submit"
              className="w-full bg-[#6495ED] hover:bg-[#5478c4] text-white font-bold py-3 px-4 rounded-lg mt-6 
                       transition-colors duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#5478c4]"
            >
              Create Account
            </button>

            <p className="text-center text-gray-600 text-sm mt-6">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-[#6495ED] hover:text-[#5478c4] font-semibold transition-colors"
              >
                Log In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;