import React, { useState } from "react";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Harish", dept: "CSE", age: 21 },
    { id: 2, name: "Anu", dept: "ECE", age: 20 },
    { id: 3, name: "Ravi", dept: "MECH", age: 22 }
  ]);

  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    dept: "",
    age: ""
  });

  // Delete row
  const handleDelete = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  // Edit row
  const handleEdit = (student) => {
    setEditId(student.id);
    setFormData({
      name: student.name,
      dept: student.dept,
      age: student.age
    });
  };

  // Update row
  const handleUpdate = () => {
    setStudents(
      students.map((s) =>
        s.id === editId ? { ...s, ...formData } : s
      )
    );
    setEditId(null);
    setFormData({ name: "", dept: "", age: "" });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Student Table</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Dept</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td>{s.name}</td>
              <td>{s.dept}</td>
              <td>{s.age}</td>
              <td>
                <button onClick={() => handleEdit(s)}>Edit</button>
                <button
                  onClick={() => handleDelete(s.id)}
                  style={{ marginLeft: "5px" }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editId && (
        <>
          <h3>Edit Student</h3>
          <input
            placeholder="Name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />
          <input
            placeholder="Dept"
            value={formData.dept}
            onChange={(e) =>
              setFormData({ ...formData, dept: e.target.value })
            }
          />
          <input
            placeholder="Age"
            value={formData.age}
            onChange={(e) =>
              setFormData({ ...formData, age: e.target.value })
            }
          />
          <button onClick={handleUpdate}>Update</button>
        </>
      )}
    </div>
  );
}

export default App;
