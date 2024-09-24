import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [data, setData] = useState([]);

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
      <header className="flex justify-between bg-blue-400 p-5">
        <h2>Home</h2>
        <h2>Employee List</h2>
        <h2>{localStorage.getItem("Name")}</h2>
        <Link to="/">Logout</Link>
      </header>

      <div className="flex justify-between bg-yellow-400 p-5">
        <h3>Employee List</h3>
        <h3>Total count {data.length}</h3>
        <Link to="/employeeForm">
          <h3>Create Employee</h3>
        </Link>
      </div>

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
  );
};

export default Dashboard;
