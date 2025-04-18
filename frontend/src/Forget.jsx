import React, { useState } from "react";
import axios from "axios";
function Forget() {
  const [user, setuser] = useState("");
  const [password, setpassword] = useState("");
  const [rePassword, setrePassword] = useState("");
  const [error, setError] = useState("");

  const checkvalue = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `http://localhost:3005/update/${user}`,
        {
          password: password,
        }
      );
      if (password === rePassword) {
        console.log(user, password, rePassword);
        console.log(response.data);
        console.log("password matchs");
        alert("Password match successfull");
        setError("Password change successfully");
      } else {
        console.log("Password not match");
        alert("Password not match");
        setError("Password do not match");
      }

      setpassword("");
      setrePassword("");
    } catch (error) {
      console.log(error, "error while sending");
    }
  };

  return (
    <div>
      <h1>Change your Password</h1>
      <form onSubmit={checkvalue}>
        <label for="user">Enter uername:</label>
        <input
          id="user"
          type="text"
          placeholder="Enter username"
          onChange={(e) => setuser(e.target.value)}
        />
        <label for="password">Enter Password:</label>
        <input
          id="password"
          type="text"
          placeholder="Enter Password"
          onChange={(e) => setpassword(e.target.value)}
        />
        <label for="password2">Enter Password:</label>
        <input
          id="password2"
          type="text"
          placeholder="Re-Enter Password"
          onChange={(e) => setrePassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <p>{error}</p>
    </div>
  );
}

export default Forget;
