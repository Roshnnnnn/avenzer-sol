import { useEffect, useState } from "react";

const CountryDropdown = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  useEffect(() => {
    fetch("http://192.168.0.10:8085/Dynamongo/api/getcountry")
      .then((response) => response.json())
      .then((data) => {
        console.log("API response:", data);
        if (data.code === 200 && Array.isArray(data.data)) {
          setCountries(data.data);
        } else {
          console.error("Invalid API response:", data);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  const handleChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div className="p-4">
      <label
        htmlFor="country"
        className="block text-sm font-medium text-gray-700"
      >
        Select Country
      </label>
      <select
        id="country"
        value={selectedCountry}
        onChange={handleChange}
        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-pink rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        <option value="">Select a country</option>
        {countries.map((country, index) => (
          <option key={index} value={country.name} className="bg-blue-gray-700">
            {country.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountryDropdown;
