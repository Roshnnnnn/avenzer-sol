import { Link } from "react-router-dom";
import Todo from "./Todo";
import CountryDropdown from "./CountryDropdown";

const HomePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center ">
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
        <Todo />
      </div>
    </div>
  );
};

export default HomePage;
