import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [user, setuser] = useState("");
  const [password, setpassword] = useState("");
  console.log(user, password);
  //Navigation
  const navigate = useNavigate();
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3005/register", {
        username: user,
        password: password,
      });
      console.log(response.data);
      if (!user && !password) {
        console.log("Username & Password required");
      }

      setTimeout(() => {
        alert("Registration successfully");
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.log(error, "error while registration");
    }
  };
  return (
    <div>
      <h1>Register page</h1>
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          required
          placeholder="Enter username"
          value={user}
          onChange={(e) => setuser(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Password"
          required
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <button type="submit">Submit</button>
        <Link to="/login">Login</Link>
      </form>
    </div>
  );
}

export default Register;
