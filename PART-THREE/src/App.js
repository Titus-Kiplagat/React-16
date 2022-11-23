import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUserList] = useState([]);

  const addUserHandler = (username, userage) => {
    setUserList(prevUsers => {
      return [{ id: Math.random().toString(), name: username, age: userage }, ...prevUsers];
      // const updateUserList = [...prevUsers]
      // updateUserList.unshift({ id: Math.random().toString(), name: username, age: userage })
      // return updateUserList
    })
  }

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </>
  );
}

export default App;
