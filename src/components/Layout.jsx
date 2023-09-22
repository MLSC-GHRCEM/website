import React from "react";
import Navbar from "./Home/Navbar";
import Footer from "./Home/Footer";

function Layout({ children }) {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div>
          <Navbar />
        </div>
        <main className="flex-grow">{children}</main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default Layout;
