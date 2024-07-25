import { Link } from "react-router-dom";
import Todo from "./Todo";
import CountryDropdown from "./CountryDropdown";

const HomePage = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center relative">
        <Link to={"/signup"} className="absolute top-0 left-0 m-4">
          signup
        </Link>
        <div className="absolute top-0 right-0 m-4">
          <CountryDropdown />
        </div>
        <div className="w-full max-w-lg p-6 rounded-lg shadow-md">
          <Todo />
        </div>
      </div>
    </>
  );
};

export default HomePage;
