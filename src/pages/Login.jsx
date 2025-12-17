import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      window.location.href = "/dashboard";
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 sm:p-8 rounded-xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-inter text-center mb-3 text-gray-800">
          Sign in to Clueso.io
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Welcome back! Please enter your details.
        </p>

        {error && (
          <p className="text-red-500 text-sm mb-3 text-center">{error}</p>
        )}

        <div className="relative mb-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded-lg pl-10 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition-shadow"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">✉️</span>
        </div>

        <div className="relative mb-6">
          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded-lg pl-10 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition-shadow"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔒</span>
        </div>

        <button
          type="submit"
          className="w-full bg-fuchsia-600 text-white py-3 rounded-lg font-semibold hover:bg-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-fuchsia-500 transition-all duration-300 transform hover:scale-105"
        >
          Login
        </button>

        <p className="text-sm text-center mt-4">
          Don’t have an account?{" "}
          <Link to="/" className="text-fuchsia-600 font-medium hover:underline">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}
