import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Navigate } from "react-router-dom";
function Test() {
  const [user, setuser] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  //handle submit
  const handleloginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3005/login", {
        username: user,
        password: password,
      });
      console.log(response.data);
      if (response.data.message) {
        console.log("Login successful");
      } else {
        alert("Data not found login frist");
        console.log("Login failed:", response.data.message);
      }
      setTimeout(() => {
        navigate("/home");
      }, 1000);
    } catch (error) {
      alert("Data not found login first");
      console.error("Error during login:", error);
    }
    console.log(user, password);
    setuser("");
    setpassword("");
  };

  return (
    <div>
      <h1>Login page</h1>
      <form onSubmit={handleloginSubmit}>
        <input
          onChange={(e) => setuser(e.target.value)}
          type="text"
          name="username"
          required
          value={user}
          placeholder="Enter username:"
        />
        <input
          onChange={(e) => setpassword(e.target.value)}
          type="password"
          name="password"
          required
          value={password}
          placeholder="Enter Password:"
        />
        <button type="submit">Submit</button>
        <p>
          Not register yet?
          <Link to="/register">Register </Link>
          <br></br>
          <Link to="/forget"> Forget Password</Link>
        </p>
      </form>
    </div>
  );
}

export default Test;
