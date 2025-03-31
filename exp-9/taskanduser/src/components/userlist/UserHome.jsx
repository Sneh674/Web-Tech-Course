import { useState } from "react";
import "./user.css";

const UserHome = () => {
  const [userList, setUserList] = useState([]);
  const [user, setUser] = useState({ name: "", email: "", age: 10 });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = user;
    setUserList([...userList, newUser]);
    setUser({ name: "", email: "", age: 10 });
  };

  const handleDelete = (index) => {
    setUserList(userList.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Users</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
          required
          placeholder="Enter name"
        />
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          required
          placeholder="Enter email"
        />
        <input
          type="number"
          name="age"
          value={user.age}
          onChange={handleChange}
          required
        />
        <input type="submit" value="Submit" />
      </form>
      <div className="allusers">
        {userList.length === 0 ? (
          <h3>No users</h3>
        ) : (
          userList.map((user, index) => (
            <div className="user" key={index}>
              <div className="username">Name: {user.name}</div>
              <div className="useremail">Email: {user.email}</div>
              <div className="userage">Age: {user.age}</div>
              <button onClick={() => handleDelete(index)}>Delete User</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default UserHome;
