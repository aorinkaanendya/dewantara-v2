import LogoBrand from "../assets/images/logo-nav.svg";
import React from "react";

export default function Navbar() {
  return (
    <section className="px-[120px] my-[11px] drop-shadow-md">
      <nav className="navbar flex justify-between mx-auto items-center">
        <div className="navbar-logo">
          <a href="/" className="navbar-link">
            <img src={LogoBrand} alt="" className="img-brand" />
          </a>
        </div>
        <ul className="flex flex-row gap-8">
          <li className="navbar-link primary">
            <a href="/">Beranda</a>
          </li>
          <li className="navbar-link">
            <a href="/">Tentang</a>
          </li>
          <li className="navbar-link">
            <a href="/">Event</a>
          </li>
          <li className="navbar-link">
            <a href="/">Wayang</a>
          </li>
          <li className="navbar-link">
            <a href="/">Museum</a>
          </li>
          <li className="navbar-link">
            <a href="/">Artikel</a>
          </li>
        </ul>
      </nav>
    </section>
  );
}
