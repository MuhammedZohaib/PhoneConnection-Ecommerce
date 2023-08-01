import { useRef } from "react";
import CSS from "./Navbar.module.css";
import logo from "../../../assets/Home/Logo.svg";
import { CgMenuRightAlt, CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";
import { GoPerson, GoSearch } from "react-icons/go";
import { BsCart3 } from "react-icons/bs";

const Navbar = (): JSX.Element => {
  const openNav = useRef<HTMLDivElement>(null);
  const close = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);
  const navBtn = useRef<HTMLButtonElement>(null);

  const NavbarToggle = (): void => {
    close.current?.classList.toggle(CSS.show);
    openNav.current?.classList.toggle(CSS.hide);
    container.current?.classList.toggle(CSS.openNav);
  };

  const style: React.CSSProperties = {
    fontSize: "35px",
  };
  const icons: React.CSSProperties = {
    fontSize: "25px",
    color: "#000",
  };

  return (
    <nav className={CSS.main}>
      <img src={logo} className={CSS.navLogo}></img>
      <button ref={navBtn} onClick={NavbarToggle} className={CSS.navBtn}>
        <div ref={openNav}>
          <CgMenuRightAlt style={style}></CgMenuRightAlt>
        </div>
        <div className={CSS.close} ref={close}>
          <CgClose style={style}></CgClose>
        </div>
      </button>
      <section className={CSS.navLinks} ref={container}>
        <Link to={""}>Home</Link>
        <Link to={""}>about</Link>
        <Link to={""}>products</Link>
        <Link to={""}>contacts us</Link>
        <Link to={""}>Cart</Link>
        <Link to={""}>login</Link>
        <Link to={""}>Signup</Link>
      </section>
      <section className={CSS.icons}>
        <Link to={""}>
          <GoPerson style={icons}></GoPerson>
        </Link>
        <Link to={""}>
          <GoSearch style={icons}></GoSearch>
        </Link>
        <Link to={""}>
          <BsCart3 style={icons}></BsCart3>
        </Link>
      </section>
    </nav>
  );
};

export default Navbar;
