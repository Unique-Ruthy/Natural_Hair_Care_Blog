import { Link } from "react-router-dom";
import "./topbar.css";
import DefaultPic from "../../assets/images/person4.png";
import { useContext } from "react";
import { Context } from "../../context/Context";
// import myLogo from "../../assets/images/logo.png";

const Topbar = () => {
  const { user, dispatch } = useContext(Context);
  const defaultPic = "http://localhost:5000/images/blank-profile.webp";
  const PF = "http://localhost:5000/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <Link>
        <img
          className="myLogoImg"
          src="https://cdn1.vectorstock.com/i/1000x1000/55/45/hair-care-logo-design-female-silhouette-with-long-vector-31305545.jpg"
          alt=""
        />
      </Link>
      {/* <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-linkedin"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
      </div> */}
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          {/* <li className="topListItem">
            <Link className="link" to="/about">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/contact">
              CONTACT
            </Link>
          </li> */}
          <li className="topListItem">
            <Link className="link" to="/write">
              Create-Post
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link className="link navName" to="/settings">
            {/* <span>{user.username}</span> */}
            <img
              className="topImage"
              src={user.profilePic ? PF + user.profilePic : DefaultPic}
              alt=""
            />
            <span>{user.username}</span>
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default Topbar;
