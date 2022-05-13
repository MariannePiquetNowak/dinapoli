import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo-sm.svg";

const Navbar = () => {
  return (
    <nav class="bg-blue-900">
      <div class="block lg:hidden">
        <button class="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      <div class="">
        <ul>
          <li class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 lg:hidden xl:hidden 2xl:hidden">
            <Link to="/">Accueil</Link>
          </li>
          <li class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            <Link to="#services">Nos Services</Link>
          </li>
          <li class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            <Link to="#menu"> La Carte</Link>
          </li>
          <li class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            <Link to="#story">Nos Produits</Link>
          </li>

          <li class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 hidden md:visible">
            <Link to="/">
              <img src={logo} class="" />
            </Link>
          </li>

          <li class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            <Link to="#contact">Contact</Link>
          </li>
          <li class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            <Link to="/team">La Squadra</Link>
          </li>
          <li class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            <Link to="/gallery">Galerie</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
