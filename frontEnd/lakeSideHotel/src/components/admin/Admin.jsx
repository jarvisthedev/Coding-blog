import React from "react";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <section className="container mt-5">
      <h2>Welcome to Admin Panel</h2>
      <hr />
      <p>
        <Link to={"/existing-rooms"}>Manage Rooms</Link>
      </p>
      <p>
        <Link to={"/existing-bookings"}>Manage Bookings</Link>
      </p>
    </section>
  );
};

export default Admin;
