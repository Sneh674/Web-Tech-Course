import { useState } from "react";

const UserHome = () => {
  const [userList, setUserList] = useState([]);
  const [user, setUser] = useState({ name: "", email: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = user;
    setUserList([...userList, newUser]);
    e.target.name.value = "";
    e.target.email.value = "";
    setUser({ name: "", email: "" });
  };
  const handleDelete = (index) => {
    setUserList(userList.filter((user, i) => i !== index));
  };
  return (
    <div>
      <h1>Users</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" onChange={handleChange} required />
        <input type="email" name="email" id="" onChange={handleChange} />
        <input type="submit" value="Submit" />
      </form>
      <div className="allusers">
        {userList.length === 0 ? (
          <h3>No users</h3>
        ) : (
          userList.map((user, index) => {
            return (
              <div className="user" key={index}>
                <div className="username">Name: {user.name}</div>
                <div className="useremail">Email: {user.email}</div>
                <button
                  onClick={() => {
                    handleDelete(index);
                  }}
                >
                  Delete User
                </button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default UserHome;
