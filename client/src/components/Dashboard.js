import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Menulogo from "../Icons/menulogo.svg";

const Dashboard = () => {
  const [data, setData] = useState([]);
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
    const response = await fetch("http://localhost:3001/deleteEmployee/" + id, {
      method: "delete",
    });
    const data = await response.json();
    console.log(data);
    getData();
    // window.location.reload();
  };

  return (
    <div>
      <header className="flex items-center bg-blue-200 p-5 min-w-full shadow-md">
        <button onClick={() => setShowDashboard(!showDashBoard)}>
          <img className="h-5 " src={Menulogo} alt="Menu Icon" />
        </button>
        <h2 className="font-semibold text-center flex-grow">Dashboard</h2>
      </header>
      <div className="flex">
        <aside
          className={`min-w-[15vw] bg-gray-300 min-h-[calc(100vh-65px)] z-10 shadow-lg ${
            showDashBoard ? "" : "hidden"
          }`}
        >
          <ul>
            <Link to="/employeeForm">
              <li className="p-3 m-2 hover:bg-red-300 text-center rounded-2xl font-semibold ">
                Add Employee
              </li>
            </Link>
            <Link to="/">
              <li className="p-3 m-2 hover:bg-red-300 text-center rounded-2xl font-semibold ">
                Logout
              </li>
            </Link>
          </ul>
        </aside>

        <main>
          <div className="overflow-x-auto flex justify-center mt-2">
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
                        to={`/edit/${item._id}`}
                        // to={`/update/${item._id}`}
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
