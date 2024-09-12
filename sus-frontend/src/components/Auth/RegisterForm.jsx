import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormBtn from "../innercomp/formbtn";
import InputField from "../innercomp/InputField";

export default function RegistrationComp() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await fetch('http://localhost:3333/user/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userName,
          email,
          password,
          password_confirmation: confirmPassword
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "An error occurred");
        return;
      }

      setSuccess("User registered successfully!");
      setUserName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      setError("Failed to connect to the server");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 w-full sm:w-3/5 lg:w-2/5">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-700">
        Create Account
      </h2>
      <form onSubmit={handleSubmit} className="bg-white shadow-inner shadow-slate-500 rounded px-8 pt-6 pb-8 mb-4 mx-auto w-full md:w-3/4">
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {success && <p className="text-green-500 text-center mb-4">{success}</p>}

        {/* Reusable Input Fields */}
        <InputField
          label="Username"
          type="text"
          placeholder="Enter Username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <InputField
          label="Email"
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputField
          label="Password"
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <InputField
          label="Confirm Password"
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        {/* Submit Button */}
        <div className="mt-4">
          <FormBtn btn="Sign Up" />
        </div>

        <div className="mt-2 text-center">
          <span>
            <Link to='/login'>Have an account? <span className="text-blue-700">Login here</span></Link>
          </span>
        </div>
      </form>
    </div>
  );
}
