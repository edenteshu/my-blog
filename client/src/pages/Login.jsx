// src/pages/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        // Fetch the error message from the response
        const errorData = await response.json();
        setError(errorData.message || "Invalid credentials"); // Set error message
      } else {
        const data = await response.json();
        localStorage.setItem("token", data.token); // Store token
        navigate("/create-post"); // Redirect on successful login
      }
    } catch (err) {
      setError("Failed to login due to network or server error.");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6 text-center">Login</h1>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block mb-2 text-gray-700" htmlFor="username">
            Username
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-gray-700" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-cyan-500 text-white py-2 px-4 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
