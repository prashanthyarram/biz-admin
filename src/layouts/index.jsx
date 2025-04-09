import React from "react";
import Navbar from "../components/navBar";
import Footer from "../components/footer";

function Layout({ child }) {
  return (
    <div>
      <Navbar />
      {child}
      <Footer />
    </div>
  );
}

export default Layout;
