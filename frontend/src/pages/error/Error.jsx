import React from "react";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold font-mono text-red-500 mb-4">
        Oops! Something went wrong.
      </h1>
      <p className="text-lg font-mono text-gray-600 mb-8">
        We apologize for the inconvenience.
      </p>
      <button
        className="font-mono flex justify-center items-center gap-2 py-2 px-4 bg-[#74CEB7] text-gray-800 font-bold border  rounded-md ease-in-out duration-150 shadow-slate-600 hover:bg-[#3caa8e] hover:text-white lg:m-0 md:px-6"
        onClick={() => window.history.back()}
      >
        Go Back
      </button>
    </div>
  );
};

export default Error;
