// import Heropic from "../../assets/images/everst.jpg";
// import Heropic from "../../assets/images/1a501ey1uwe91.jpg";

import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm glow">Unique and Natural Haircare</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://grindsuccess.com/wp-content/uploads/2022/06/Hair-Blog-Names.webp"
        alt=""
      />
    </div>
  );
};

export default Header;
