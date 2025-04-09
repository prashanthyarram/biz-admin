import "./style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Title Section */}
        <h3 className="footer-title">Bizadmin</h3>

        {/* Navigation Links */}
        <nav className="footer-links">
          <a href="cash-management">cash</a>

          <a href="hr-management">hr</a>

          <a href="checklist-management">checklist</a>

          <a href="cleaning-management">cleaning</a>

          <a href="documents-management">documents</a>

          <a href="ordering-admin-management">ordering admin</a>

          <a href="supplier-inventory-management">supplier inventory</a>

          <a href="temperature-management">temperature</a>
        </nav>

        {/* Contact and Copyright Section */}
        <div className="footer-bottom">
          <p>Email: support@bizadmin.com | Phone: +1 (123) 456-7890</p>
          <p>
            &copy; {new Date().getFullYear()} Bizadmin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
