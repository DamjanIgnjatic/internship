import { act } from "@testing-library/react";
import "./sidebar-style.scss";

export default function Sidebar({ setActivePage, activePage }) {
  return (
    <div className="sidebar">
      <a
        className={`${activePage === "products" ? "active" : ""}`}
        onClick={() => setActivePage(() => "products")}
        href="#product"
      >
        Products
      </a>
      <a
        className={`${activePage === "about" ? "active" : ""}`}
        onClick={() => setActivePage(() => "about")}
        href="#about"
      >
        About App
      </a>
    </div>
  );
}
