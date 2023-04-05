import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, updateUser } from "../features/usersSlice";

const UserTable = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const handleEdit = (user) => {
    setSelectedUser(user);
    setFirstName(user.firstName);
    setLastName(user.lastName);
    setAge(user.age);
    setEmail(user.email);
    setAddress(user.address);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  const handleSave = () => {
    const updatedUser = {
      id: selectedUser.id,
      firstName,
      lastName,
      age,
      email,
      address,
    };
    dispatch(updateUser(updatedUser));
    setSelectedUser(null);
    setShowModal(false);
  };

  console.log(users);

  return (
    <>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Edit User</h2>
            <div>
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="modal-input"
              />
            </div>
            <div>
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="modal-input"

              />
            </div>
            <div>
              <label htmlFor="age">Age:</label>
              <input
                type="number"
                id="age"
                value={age}
                className="modal-input"
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                className="modal-input"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                id="address"
                value={address}
                className="modal-input"
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="modal-buttons">
              <button onClick={() => setShowModal(false)}>Cancel</button>
              <button onClick={handleSave}>Save</button>
            </div>
          </div>
        </div>
      )}
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user.id}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.age}</td>
              <td>{user.email}</td>
              <td>{user.address}</td>
              <td>
                <button className="edit-btn" onClick={() => handleEdit(user)}>Edit</button>
                <button  className="delete-btn" onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UserTable;
