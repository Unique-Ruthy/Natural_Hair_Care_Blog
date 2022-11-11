import "./sidebar.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import ProfilePic from "../../assets/images/posters-composition-with-3d-cubes.jpg-removebg-preview.png";

const Sidebar = () => {
  const [cats, setCats] = useState([]);
  const getCats = async () => {
    const res = await axios.get("/categories");
    setCats(res.data);
  };

  useEffect(() => {
    getCats();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT US</span>
        {/* {post.photo && <img src={post.photo} alt="" />} */}
        {/* <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHfME3kMNFSk1lfgUofO5V8Y54tYHdKGPbkGcFdy5DB5njaRUYnVgXniJRKQDnQULym1U&usqp=CAU"
          alt=""
        /> */}
        <p>
          Ruth naturally derived beauty products for people with textured hair.
          introducing the baomint collection, formulated to focus on a healthy
          scalp for fast growing hair from root to tip. we took advantage of
          methods for intense moisture and elongation to deliver healthy + happy
          curls for all kink & curl kind. our baomint collection is best when
          used as a whole system. we've sourced top of the line ingredients such
          as baobab oil, which can be used to treat dandruff/dry scalp, eczema,
          psoriasis and rosacea. baobab oil contains vitamins a, d, e and it is
          packed with omega 3, 6 + 9. peppermint oil produces its main
          ingredient:menthol.
        </p>
      </div>
      <div className="sidebarItem">
        {/* <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c, i) => (
            <Link key={i} to={`/?cat=${c.name}`} className="link">
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul> */}
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <Link to="https://www.facebook.com/ruthamara.polycarp.3/">
            <i className="sidebarIcon fa-brands fa-square-facebook"></i>
          </Link>
          <Link to="https://www.twitter.com/AmaraRuthie">
            <i className="sidebarIcon fa-brands fa-square-twitter"></i>
          </Link>
          <Link to="https://www.linkedin.com/in/ruth-amara-uwakwe-557884217/">
            <i className="sidebarIcon fa-brands fa-linkedin"></i>
          </Link>
          <Link to="https://www.instagram.com/uniqueruthamara/">
            <i className="sidebarIcon fa-brands fa-square-instagram"></i>
          </Link>
        </div>
        <div className="footer">
          &#169; Copyright 2022 | Unique & Natural Haircare blog
        </div>
      </div>
      <p></p>
    </div>
  );
};

export default Sidebar;
