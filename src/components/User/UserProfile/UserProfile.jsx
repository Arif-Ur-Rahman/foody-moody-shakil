import React, { useState } from 'react';
import './UserProfile.css';
import { FaCamera } from 'react-icons/fa';
import User from '../../../assets/Me.jpg';

function UserProfile() {
  const [user, setUser] = useState({
    image: User,
    name: 'Arif Ur Rahman',
    email: 'arifurrahman.it.doc@gmail.com',
    phone: '01680728065',
    address: 'Aftabnagar, Dhaka'
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setUser({ ...user, image: reader.result });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    // Handle form submission logic (e.g., send data to an API)
    console.log('Updated user:', user);
  };

  return (
    <div className="full_page">
    <div className="user-profile">
      <img src={user.image} alt="User" />
      <label className="camera-icon">
        <FaCamera />
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </label>
      <form className="info" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          {isEditing ? (
            <input
              type="text"
              id="name"
              name="name"
              value={user.name}
              onChange={handleChange}
            />
          ) : (
            <div className="fixed-field">{user.name}</div>
          )}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          {isEditing ? (
            <input
              type="email"
              id="email"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
          ) : (
            <div className="fixed-field">{user.email}</div>
          )}
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <div className="fixed-field">{user.phone}</div>
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <div className="fixed-field">{user.address}</div>
        </div>
        {isEditing && <button type="submit">Update Profile</button>}
      </form>
      <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? 'Cancel' : 'Edit Profile'}
      </button>
    </div>
    </div>
  );
}

export default UserProfile;
