import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-9xl font-bold text-red-600">404</h1>
      <h2 className="text-3xl font-semibold text-gray-800 mt-4">
        Page Not Found
      </h2>
      <p className="text-lg text-gray-500 mt-2">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <button
        onClick={() => navigate("/")}
        className="mt-6 px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition"
      >
        Go to Homepage
      </button>
    </div>
  );
};

export default ErrorPage;
