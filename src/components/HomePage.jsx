import { Link } from "react-router-dom";
import Todo from "./Todo";
import CountryDropdown from "./CountryDropdown";
import { useState, useEffect } from "react";

const HomePage = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    const storedData = localStorage.getItem("signupData");
    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData);

        setName(parsedData.name || "");
      } catch (error) {
        console.error("Error parsing signupData from localStorage:", error);
      }
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <div className="absolute top-0 left-0 m-4">
        <Link
          to="/signup"
          className="text-blue-600 hover:text-blue-800 font-semibold"
        >
          Sign Up
        </Link>
      </div>
      <div className="absolute top-0 right-0 m-4">
        <CountryDropdown />
      </div>
      <div className="w-full max-w-lg p-8 bg-pink-300 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Welcome, {name}</h1>
        <Todo />
      </div>
    </div>
  );
};

export default HomePage;
