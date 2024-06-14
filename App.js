import "./styles.css";
import { data } from "./data.js";
import { useState } from "react";
export default function App() {
  const [search, setSearch] = useState("");
  const [gender, setGender] = useState(""); // New state for gender filter

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const filterData = data.filter((item) => {
    const fullName = `${item.first_name} ${item.last_name}`.toLowerCase();
    const searchLower = search.toLowerCase();
    const matchesSearch =
      fullName.includes(searchLower) ||
      item.email.toLowerCase().includes(searchLower) ||
      item.phone.includes(searchLower);
    const matchesGender = gender === "" || item.gender === gender;
    console.log(matchesSearch, "+", matchesGender);
    return matchesSearch && matchesGender;
  });
  return (
    <div className="App">
      <h1>Hello World</h1>
      <div className="searchContainer">
        <input
          type="string"
          placeholder="search"
          value={search}
          onChange={handleSearch}
        ></input>
        <select value={gender} onChange={handleGenderChange}>
          <option value="">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name </th>
            <th>Email</th>
            <th>Gender</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {filterData.map((item) => (
            <tr key={item.id}>
              <th>{item.first_name} </th>
              <th>{item.last_name} </th>
              <th>{item.email}</th>
              <th>{item.gender}</th>
              <th>{item.phone}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
