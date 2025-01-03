/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
// import { AiFillFileText, AiTwotoneCar } from "react-icons/ai";
import { HiMenuAlt4 } from "react-icons/hi";
import { RiDashboardFill } from "react-icons/ri";
// import { IoPersonAdd } from "react-icons/io5";
import { BsFileText } from "react-icons/bs";
// eslint-disable-next-line no-unused-vars
import { Link, NavLink, Navigate, useLocation } from "react-router-dom";
import { LiaBlogSolid } from "react-icons/lia";
import { MdHealthAndSafety } from "react-icons/md";
import { MdContactMail } from "react-icons/md";
import vaayu_img from "../../assets/vaayu.png";

const AdminSidebar = () => {
  const location = useLocation();

  const [showModal, setShowModal] = useState(false);
  const [phoneActive, setPhoneActive] = useState(window.innerWidth < 1000);

  const resizeHandler = () => {
    setPhoneActive(window.innerWidth < 1000);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  
  return (
    <>
      {phoneActive && (
        <button id="hamburger" onClick={() => setShowModal(true)}>
          <HiMenuAlt4 />
        </button>
      )}

      <aside
        style={
          phoneActive
            ? {
                width: "20rem",
                height: "100vh",
                position: "fixed",
                top: 0,
                left: showModal ? "0" : "-20rem",
                transition: "all 0.5s",
              }
            : {}
        }
      >
        {/* <h2>Logo.</h2> */}
        <img src={vaayu_img} alt="user image" style={{ width: "100%" }} />
        {/* <h2>Marvin McKinny</h2> */}
        {/* <h5>President of Sales</h5> */}
        <DivOne location={location} />

        {phoneActive && (
          <button id="close-sidebar" onClick={() => setShowModal(false)}>
            Close
          </button>
        )}
      </aside>
    </>
  );
};

const handleLogout = () => {
	// Redirect to the root path
  sessionStorage.clear();
  localStorage.clear();
	window.location.href = '/dashboard';
  };

const DivOne = () => (
  <div>
    <ul>
      <Li
        url="/dashboard"
        text="Home"
        Icon={RiDashboardFill}
        location={location}
      />
      {/* <Li url="/forecast" text="AQI Forecast" Icon={RiDashboardFill} location={location} /> */}
      <Li
        url="/aqi/index"
        text="AQI Quality Index Scale"
        Icon={BsFileText}
        location={location}
      />
      <Li url="/blogs" text="Blogs" Icon={LiaBlogSolid} location={location} />
      <Li
        url="/health"
        text="AQI & Health"
        Icon={MdHealthAndSafety}
        location={location}
      />
      <Li
        url="/contact"
        text="Contact"
        Icon={MdContactMail}
        location={location}
      />
      <Li
        url="/health_recommendation"
        text="Health Recomendation"
        Icon={MdHealthAndSafety}
        location={location}
      />
	  <Li
        url="/aqi_spike"
        text="AQI Spike"
        Icon={LiaBlogSolid}
        location={location}
      />
	  <Li
        url="/daily_trends"
        text="Daily Trends"
        Icon={LiaBlogSolid}
        location={location}
      />
        {sessionStorage.getItem("user") != null ? (
          <>
            <Li
              url="/city_data_comparision"
              text="City Data Comparision"
              Icon={MdHealthAndSafety}
              location={location}
            />
            <Li
              url="/download"
              text="Download"
              Icon={MdHealthAndSafety}
              location={location}
            />
            <button
              className="button"
              style={{
                backgroundColor: "red",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        ) : 
        <button
              className="button"
              style={{
                backgroundColor: "red",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={() => window.location.href = '/login'}
            >
              Login
            </button>}
      </ul>
    
  </div>
);
const Li = ({ url, text, Icon }) => (
  <li
  // style={{
  // 	backgroundColor: location.pathname.includes(url) ? "white" : "transparent",
  // }}
  >
    <NavLink
      to={url}
      // style={{
      // 	fontWeight: location.pathname.includes(url) ? "bold" : "400",
      // }}
    >
      <Icon
      // style={{
      // 	color: location.pathname.includes(url) ? "black" : "white",
      // }}
      />
      {text}
    </NavLink>
  </li>
);

export default AdminSidebar;
