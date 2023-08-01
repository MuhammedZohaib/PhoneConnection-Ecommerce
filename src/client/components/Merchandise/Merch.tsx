import Countdown from "../../../common/components/Countdown/Countdown";
import CSS from "./Merch.module.css";
import headphone from "../../../assets/Home/Images_Misc/Headphones_fixed.svg";
import { Link } from "react-router-dom";
import React from "react";

const style: React.CSSProperties = {
  color: "#ee5a2c",
};

const Merch = (): JSX.Element => {
  return (
    <section className={CSS.main}>
      <div className={CSS.typo}>
        <Countdown></Countdown>
        <h1>
          Enhance your <span style={style}>Music </span>
          Experience
        </h1>
        <p>
          Experience audio perfection with our revolutionary headphones,
          delivering crystal-clear sound and unparalleled comfort
        </p>
        <Link to={""}>
          <button className={CSS.CTA}>Get it Now</button>
        </Link>
      </div>
      <img src={headphone} className={CSS.image} alt="" />
    </section>
  );
};

export default Merch;
