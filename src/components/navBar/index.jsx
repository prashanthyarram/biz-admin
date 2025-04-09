import { useState } from "react";
import "./style.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <a href="/">Bizadmin</a>
      </div>

      {/* Menu Toggle Button (Mobile) */}
      <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <a href="cash-management">Cash</a>
        </li>
        <li>
          <a href="hr-management">Hr</a>
        </li>
        <li>
          <a href="checklist-management">Checklist</a>
        </li>
        <li>
          <a href="cleaning-management">Cleaning</a>
        </li>
        <li>
          <a href="documents-management">Documents</a>
        </li>
        <li>
          <a href="ordering-admin-management">Ordering Admin</a>
        </li>
        <li>
          <a href="supplier-inventory-management">Supplier Inventory</a>
        </li>
        <li>
          <a href="temperature-management">Temperature</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
