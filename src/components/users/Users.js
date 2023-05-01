import React, { useEffect, useRef, useState } from "react";
import Navbar from "../Navbar";

function Users() {
  const [searchName, setSearchName] = useState("");
  const [usersData, setUsersData] = useState();
  const inputRef= useRef()


  useEffect(() => {
    users()
  }, []);

 const users = () => {
  fetch("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users")
  .then((res) => res.json())
  .then((data) => setUsersData(data));
 }

  const searchUser = (val) => {
    setSearchName(val)
    if(searchName.length >= 2){
      fetch(
        `https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users?fullName=${val}`
      ).then((res) => res.json())
       .then((data) => setUsersData(data))
    }
   }

   const reset = () => {
    inputRef.current.value = ''

    users()
   }

  return (
    <>
      <Navbar />
      <section>
        <h1> Users </h1>
        <div id="inputContainer">
          <input
            type="text"
            id="searchName"
            placeholder="Search By Name"
            onChange={(e) => searchUser(e.target.value)}
            ref={inputRef}
          />
          <button id="reset" onClick={() => reset()}>Reset</button>
        </div>

        <div id="UserDataContainer">
          <div id="tableContainer">
            <table>
              <tr>
                <th>ID</th>
                <th>User Avatar</th>
                <th>Full Name</th>
                <th>DoB</th>
                <th>Gender</th>
                <th>Current Location</th>
              </tr>
              <tbody id="tbody_users">
                { usersData
                  ? usersData.map((item) => {
                      return (
                        <tr key={item.id}>
                          <td id="Oid">{item.id}</td>
                          <td id="avatar">
                            <img src={item.profilePic} alt="avatar" />
                          </td>
                          <td id="fullName">{item.fullName} </td>
                          <td id="dob">{item.dob}</td>
                          <td id="gender">{item.gender}</td>
                          <td id="currentLoc">
                            {item.currentCity}, {item.currentCountry}
                          </td>
                        </tr>
                      );
                    })
                  : null }
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}

export default Users;
