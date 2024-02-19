import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Set the submitted name
    setSubmittedName(name);
    // Clear the input field after submission if needed
    setName("");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md">
        <form className=" shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Enter your name"
              aria-label="Full name"
              value={name}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className=" text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Print
            </button>
          </div>
        </form>
        {submittedName && (
          <div className="flex justify-center">
            <p>Your name is: {submittedName}</p>
          </div>
        )}
      </div>
    </div>
  );
}
