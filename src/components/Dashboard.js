import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
    {
      name: "PRANAR",
      email: "pranarasdf12@gmail.com",
      mobile: "12345678990",
      designation: "IT",
      gender: "Male",
      courses: ["BCA"],
      createdAt: "2019-10-26",
    },
  ]);
  const [showDashBoard, setShowDashboard] = useState(true);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch("http://localhost:3001/employeeList");
    const response = await data.json();
    setData(response);
    console.log(response);
  };

  const handleDelete = async (id) => {
    const response = await fetch("http://localhost:3001/deleteUser/" + id, {
      method: "delete",
    });
    const data = await response.json();
    window.location.reload();
  };

  return (
    <div>
      <header className="flex items-center bg-blue-400 p-5 min-w-full">
        <button onClick={() => setShowDashboard(!showDashBoard)}>Icon</button>
        <h2 className="font-semibold text-center flex-grow">Dashboard</h2>
      </header>
      <div class="flex ">
        <aside
          className={`min-w-[15vw] bg-gray-300 min-h-[calc(100vh-65px)] ${
            showDashBoard ? "" : "hidden"
          }`}
        >
          <ul>
            <Link to="/employeeForm">
              <li>Add Employee</li>
            </Link>
            <Link to="/">
              <li>Logout</li>
            </Link>
          </ul>
        </aside>

        <main>
          <div className="overflow-x-auto flex justify-center">
            <table className="min-w-full bg-white border border-gray-300 self-center">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 border-b text-center">Unique Id</th>
                  <th className="py-2 px-4 border-b">Name</th>
                  <th className="py-2 px-4 border-b">Email</th>
                  <th className="py-2 px-4 border-b">Mobile No</th>
                  <th className="py-2 px-4 border-b">Designation</th>
                  <th className="py-2 px-4 border-b">Gender</th>
                  <th className="py-2 px-4 border-b">Course</th>
                  <th className="py-2 px-4 border-b">Created date</th>
                  <th className="py-2 px-4 border-b">Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="py-2 px-4 border-b text-center">
                      {index + 1}
                    </td>
                    <td className="py-2 px-4 border-b text-center">
                      {item.name}
                    </td>
                    <td className="py-2 px-4 border-b text-center">
                      {item.email}
                    </td>
                    <td className="py-2 px-4 border-b text-center">
                      {item.mobile}
                    </td>
                    <td className="py-2 px-4 border-b text-center">
                      {item.designation}
                    </td>
                    <td className="py-2 px-4 border-b text-center">
                      {item.gender}
                    </td>
                    <td className="py-2 px-4 border-b text-center">
                      {item.courses.join(", ")}
                    </td>
                    <td className="py-2 px-4 border-b text-center">
                      {item.createdAt.slice(0, 10)}
                    </td>
                    <td className="py-2 px-4 border-b border-gray-300 text-center">
                      <Link
                        to={`/update/${item._id}`}
                        className="text-blue-500 hover:text-blue-700"
                      >
                        Edit
                      </Link>
                      <button
                        className="text-red-500 hover:text-red-700 ml-2"
                        onClick={() => handleDelete(item._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
