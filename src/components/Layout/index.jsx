import { useSelector } from "react-redux";
import { Outlet, Route, Routes } from "react-router-dom";
import Login from "../../pages/login";
import Header from "../Header";

const Layout = () => {
  return (
    <div className="container">
      <Header />
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
