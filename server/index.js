const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModel = require("./models/Employees");

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/EmployeeManagementSystem")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err)); //127.0.0.1

app.post("/createUser", async (req, res) => {
  const existingUser = await EmployeeModel.findOne({ email: req.body.email });

  if (existingUser) {
    // Email already exists, return an error response
    return res.status(400).json({ message: "Email already exists" });
  }

  EmployeeModel.create(req.body)
    .then((employe) => res.json(employe))
    .catch((err) => console.log(err));
});

app.get("/employeeList", (req, res) => {
  EmployeeModel.find({})
    .then((employe) => res.json(employe))
    .catch((err) => console.log(err));
});

app.get("/getEmployee/:id", (req, res) => {
  const id = req.params.id;
  EmployeeModel.findById(id)
    .then((employee) => res.json(employee))
    .catch((err) => res.json(err));
});

app.put("/updateEmployee/:id", (req, res) => {
  const id = req.params.id;
  EmployeeModel.findByIdAndUpdate(
    { _id: id },
    {
      name: req.body.name,
      email: req.body.email,
      mobile: req.body.mobile,
      designation: req.body.designation,
      gender: req.body.gender,
      courses: req.body.courses,
    }
  )
    .then((employee) => res.json(employee))
    .catch((err) => res.json(err));
});

app.delete("/deleteEmployee/:id", (req, res) => {
  const id = req.params.id;
  EmployeeModel.findByIdAndDelete({ _id: id })
    .then((employe) => res.json(employe))
    .catch((err) => console.log(err));
});

app.listen(3001, () => {
  console.log("Server is running");
});
