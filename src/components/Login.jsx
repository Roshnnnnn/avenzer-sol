import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const validateForm = () => {
    let valid = true;
    const newErrors = { email: "", password: "" };

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
      valid = false;
    }

    if (!/.{6,}/.test(password)) {
      newErrors.password = "Password must be at least 6 characters long.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const storedUserData = localStorage.getItem("signupData");

      if (storedUserData) {
        const { email: storedEmail, password: storedPassword } =
          JSON.parse(storedUserData);

        if (email === storedEmail && password === storedPassword) {
          alert("Login successful!");
          navigate("/");
        } else {
          alert("Invalid email or password.");
        }
      } else {
        alert("No user found. Please sign up first.");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-200 ${
                errors.email ? "border-red-500" : ""
              }`}
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-200 ${
                errors.password ? "border-red-500" : ""
              }`}
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
