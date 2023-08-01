import CSS from "./Footer.module.css";
import Map from "../Map/Map.tsx";
import { Link } from "react-router-dom";
import logo from "../../../assets/Home/LogoWhite.svg";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

const style = {
  fontSize: "20px",
  color: "#000",
};
const Footer = () => {
  return (
    <footer className={CSS.mainContainer}>
      <section className={CSS.subSection1}>
        <div className={CSS.head}>
          <img src={logo} alt="" width={"40px"} />
          <h2>Mobile Collection</h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
          delectus voluptate pariatur non amet obcaecati sequi odit ea aliquam
          dolores.
        </p>
        <div className={CSS.socialIcons}>
          <div className={CSS.iconDiv}>
            <Link to="">
              <AiOutlineInstagram style={style}></AiOutlineInstagram>
            </Link>
          </div>
          <div className={CSS.iconDiv}>
            <Link to="">
              <FaFacebookF style={style}></FaFacebookF>
            </Link>
          </div>
          <div className={CSS.iconDiv}>
            <Link to="">
              <FaTwitter style={style}></FaTwitter>
            </Link>
          </div>
        </div>
      </section>
      <section className={CSS.subSection}>
        <h3>Quick Links</h3>
        <div>
          <Link to="">About Us</Link>
          <Link to="">Categories</Link>
          <Link to="">Contact Us</Link>
          <Link to="">Products</Link>
        </div>
      </section>
      <section className={CSS.subSection}>
        <h3>My Account</h3>
        <div>
          <Link to="">Account</Link>
          <Link to="">Order History</Link>
          <Link to="">WishList</Link>
          <Link to="">Cart</Link>
        </div>
      </section>
      <section className={CSS.subSection5}>
        <h3>Location</h3>
        <Map></Map>
        <section className={CSS.footerLink}>
          <a href="">Terms & Conditions</a>
          <a href="">Privacy Policy</a>
          <p>Designed & Developed by CodeCentric</p>
          <p>All rights reseverd © Mobile Collection</p>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
