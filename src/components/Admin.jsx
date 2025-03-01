import React, { useState } from 'react';
import AdminHeader from './AdminHeader';
import Footer from './footer';
import './footer';

const Admin = () => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
  };

  return (
    <div className="admin-container ">
      <AdminHeader />
      <div className="content">
        <h2>Welcome {value}</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter any Text"
              onChange={(e) => setValue(e.target.value)}
              required
            />
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Admin;
