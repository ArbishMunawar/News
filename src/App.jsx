import { Outlet } from "react-router-dom";
import { useState } from "react";
import Navbar from "./ui/common/Navbar.jsx";
import Footer from "./ui/common/Footer.jsx";

export default function Root() {
  const [search, setSearch] = useState("");

  return (
    <>
    <div className="layout">
      <Navbar setSearch={setSearch} />
      <main >
        <Outlet context={{ search }} />
      </main>
      <Footer />
      </div>
    </>
  );
}
