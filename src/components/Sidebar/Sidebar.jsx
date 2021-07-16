import React from "react";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <aside
      className="main-sidebar sidebar-dark-dark elevation-4"
      style={{ position: "fixed" }}
    >
      {/* Brand Logo */}
      <img
        src={Logo}
        alt="Packaging Lite"
        className="img-fluid"
        style={{
          width: "6rem",
          margin: "auto",
          display: "block",
          paddingTop: "3vh",
          paddingBottom: "3vh",
        }}
      />
      {/* Sidebar */}
      <div className="sidebar">
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            role="menu"
            data-accordion="false"
          >
            <li className="nav-item active">
              <Link to="/" className="nav-link">
                <i className="nav-icon fa fa-home" />
                <p>Dashboard</p>
              </Link>
              <hr
                style={{
                  color: "#D3D3D3",
                  backgroundColor: "#D3D3D3",
                  height: 0.5,
                  borderColor: "#D3D3D3",
                  marginTop: "2vh",
                  marginBottom: "2vh",
                }}
              />
            </li>
            <li className="nav-item">
              <Link to="/category" className="nav-link">
                <i className="nav-icon fa fa-object-group" />
                <p>Manage Categories</p>
              </Link>
              <hr
                style={{
                  color: "#D3D3D3",
                  backgroundColor: "#D3D3D3",
                  height: 0.5,
                  borderColor: "#D3D3D3",
                  marginTop: "2vh",
                  marginBottom: "2vh",
                }}
              />
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="nav-icon fa fa-sitemap" />
                <p>Manage Subcategories</p>
              </Link>
              <hr
                style={{
                  color: "#D3D3D3",
                  backgroundColor: "#D3D3D3",
                  height: 0.5,
                  borderColor: "#D3D3D3",
                  marginTop: "2vh",
                  marginBottom: "2vh",
                }}
              />
            </li>
            <li className="nav-item">
              <Link to="/product" className="nav-link">
                <i className="nav-icon fa fa-shopping-bag" />
                <p>Manage Events</p>
              </Link>
              <hr
                style={{
                  color: "#D3D3D3",
                  backgroundColor: "#D3D3D3",
                  height: 0.5,
                  borderColor: "#D3D3D3",
                  marginTop: "2vh",
                  marginBottom: "2vh",
                }}
              />
            </li>
            <li className="nav-item">
              <Link to="/promo-code" className="nav-link">
                <i className="nav-icon fa fa-shopping-bag" />
                <p>Manage Promo Codes</p>
              </Link>
              <hr
                style={{
                  color: "#D3D3D3",
                  backgroundColor: "#D3D3D3",
                  height: 0.5,
                  borderColor: "#D3D3D3",
                  marginTop: "2vh",
                  marginBottom: "2vh",
                }}
              />
            </li>
            <li className="nav-item">
              <Link to="/orders" className="nav-link">
                <i className="nav-icon fa fa-gears" />
                <p>Orders</p>
              </Link>
              <hr
                style={{
                  color: "#D3D3D3",
                  backgroundColor: "#D3D3D3",
                  height: 0.5,
                  borderColor: "#D3D3D3",
                  marginTop: "2vh",
                  marginBottom: "2vh",
                }}
              />
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="nav-icon fa fa-gears" />
                <p>Settings</p>
              </Link>
              <hr
                style={{
                  color: "#D3D3D3",
                  backgroundColor: "#D3D3D3",
                  height: 0.5,
                  borderColor: "#D3D3D3",
                  marginTop: "2vh",
                  marginBottom: "2vh",
                }}
              />
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="nav-icon fa fa-sign-out" />
                <p>Logout</p>
              </Link>
              <hr
                style={{
                  color: "#D3D3D3",
                  backgroundColor: "#D3D3D3",
                  height: 0.5,
                  borderColor: "#D3D3D3",
                  marginTop: "2vh",
                  marginBottom: "2vh",
                }}
              />
            </li>
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
  );
};

export default SideBar;
