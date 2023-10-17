import { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const sidebar = [
    {
      img: "./images/dashboard-key.png",
      title: "Dashboard",
      link: "/",
    },
    {
      img: "./images/dashboard-products.png",
      title: "Product",
      link: "/Product",
    },
    {
      img: "./images/dashboard-customer.png",
      title: "Customers",
      link: "/Customers",
    },
    {
      img: "./images/dashboard-income.png",
      title: "Income",
      link: "/Income",
    },
    {
      img: "./images/dashboard-promote.png",
      title: "Promote",
      link: "/Promote",
    },
    {
      img: "./images/dashboard-help.png",
      title: "Help",
      link: "/Help",
    },
  ];

  const [showSidebar, setShowSidebar] = useState(false);

  const sidebarshow = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      <div className={`side ${showSidebar ? "show" : "hide"}`}>
        <div className="sidebarprofile">
          <div>
            <div className="sidebar">
              <img
                src="./images/dashboard.png"
                alt="Dashboard logo"
                className="logo"
              />
              <h1>Dashboard</h1>
            </div>

            {sidebar.map((bar, index) => (
              <Link to={bar.link} key={index} className="link">
                <div className="sidebar1">
                  <div className="side1">
                    <img src={bar.img} className="sidebar-img" />
                    <h2>{bar.title}</h2>
                  </div>
                  <div>
                    <p>›</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div>
            <div className="Profile">
              <img src="./images/profile.png" className="Profileimg" />
              <div className="profilecontent">
                <p className="profiletit">Evano</p>
                <p className="profilepara">Project Manger</p>
              </div>
              <div className="arrow">
                <p>›</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="sidebartoggle" onClick={sidebarshow}>
        ☰
      </button>
    </>
  );
}

export default Sidebar;
