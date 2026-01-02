import React from "react";

function App() {
  const data = [
    { name: "Harish", dept: "CSE", age: 21 },
    { name: "Anu", dept: "ECE", age: 20 },
    { name: "Ravi", dept: "MECH", age: 22 }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Student Table</h2>

      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Name</th>
            <th>Dept</th>
            <th>Age</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.dept}</td>
              <td>{item.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
 