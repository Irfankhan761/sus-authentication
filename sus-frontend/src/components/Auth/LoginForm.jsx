import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import FormBtn from "../innercomp/formbtn";
import InputField from "../innercomp/InputField"; // Reuse InputField component

export default function LoginComp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:3333/login', {
        email,
        password
      });

      localStorage.setItem('token', res.data.token); // Save token to localStorage
      console.log("Login Success:", res.data);

      navigate('/home'); // Redirect to the home page
    } catch (err) {
      console.error("Login Error:", err);
      setError("Invalid email or password");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 w-full sm:w-3/5 lg:w-2/5">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-700">
        Login Account
      </h2>
      <form onSubmit={handleSubmit} className="bg-white shadow-inner shadow-slate-500 rounded px-8 pt-6 pb-8 mb-4 mx-auto w-full md:w-3/4">
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        
        {/* Reusable Input Fields */}
        <InputField 
          label="Email" 
          type="email" 
          placeholder="abc12@gmail.com" 
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

        <div className="mt-4">
          <FormBtn btn="Login" />
        </div>

        <div className="mt-2 text-center">
          <span>
            <Link to='/register'>
              Not registered yet? <span className="text-blue-700">Create an Account</span>
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
}
