//External module
const express = require("express");
const app = express();
//Local module
const dbconnection = require("./db/dbconnection");
const User = require("./db/user");
const cors = require("cors");

dbconnection();

//Middleware
app.use(express.json());
// cros middleware
app.use(cors());

//Post data
app.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(req.body);
    const dataAdd = new User({ username, password });
    await dataAdd.save();
    res.status(201).json({ message: "Registraion successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Registration Failed" });
  }
});

//post handle to find data
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    console.log(user);

    if (!user) {
      return res.status(401).json({ error: "invailed user name " });
    }
    if (user.password !== password) {
      return res.status(401).json({ error: "invailed  Password" });
    }
    res.status(200).json({ message: "Login Successful" });
  } catch (error) {
    console.log("Error while searching data in database", error);
    res.status(500).json({ error: "Internal server error" });
    console.log(error);
  }
});

//put or update data
app.put("/update/:name", async (req, res) => {
  console.log(req.params);
  console.log(req.body);
  try {
    const { name } = req.params;

    const user = await User.findOneAndUpdate(
      { username: name },
      { password: req.body.password }
    );
    console.log(user);
  } catch (error) {
    console.log(
      "Error during not send request properlly in update",
      error.message
    );
    res.status(500).json({ error: "Check update catch" });
  }
});

//server running
const PATH = 3005;
app.listen(PATH, () => {
  console.log(`Server running on:http://Localhost:${PATH}`);
});
