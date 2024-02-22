import React from "react";
import { useSelector } from "react-redux";
import logo from "../logo.png";

const Welcome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div>
      <h1 className="title">Dashboard</h1>
      <h2 className="subtitle">
        Selamat Datang  <strong>{user && user.name}</strong>
      </h2>
      <p className="title is-1 has-text-centered"> PUSKESMAS MELUR</p>
       <div class="card-image has-text-centered">
        <figure class="image is-inline-block">
            <img src={logo} width="100" height="100" alt="logo" />
        </figure>
      </div>
    </div>
  );
};

export default Welcome;
