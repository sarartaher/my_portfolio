import React from "react";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  console.error(error);

  if (isRouteErrorResponse(error)) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-yellow-100 text-yellow-900 p-4">
        <h1 className="text-4xl font-bold mb-4">Oops!</h1>
        <h2 className="text-2xl mb-2">
          {error.status} {error.statusText}
        </h2>
        <p className="mb-2">
          {error.data?.message ||
            "The page you are looking for does not exist."}
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-100 text-red-900 p-4">
      <h1 className="text-4xl font-bold mb-4">An unexpected error occurred</h1>
      <p className="mb-2">
        {error.statusText || error.message || "Something went wrong."}
      </p>
    </div>
  );
};

export default ErrorPage;
