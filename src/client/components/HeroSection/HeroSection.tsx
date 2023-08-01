import CSS from "./HeroSection.module.css";
import { Link } from "react-router-dom";
import heroImg from "../../../assets/Home/Images_Misc/HERO-SECTION-IMAGE.svg";

interface properties {
  headingClr1: React.CSSProperties;
  headingClr2: React.CSSProperties;
  headingClr3: React.CSSProperties;
}

const styles: properties = {
  headingClr1: {
    color: "#e46161",
  },
  headingClr2: {
    color: "#923dff",
  },
  headingClr3: {
    color: "#3fa650",
  },
};

const HeroSection = (): JSX.Element => {
  return (
    <div className={CSS.mainContainer}>
      <div className={CSS.TypoContainer}>
        <h1 className={CSS.heading}>
          Shop
          <span style={styles.headingClr1}> Mobile </span>Stay
          <span style={styles.headingClr2}> Connected </span>
          <br></br>Embrace the
          <span style={styles.headingClr3}> Future. </span>
        </h1>
        <p className={CSS.typo}>
          Welcome to our mobile selling e- commerce website, where we bring you
          the latest and greatest in mobile technology,
        </p>
        <Link to={""}>
          <button className={CSS.callToAction}>Shop Now</button>
        </Link>
      </div>
      <div className={CSS.imageContainer}>
        <img src={heroImg} alt="Hero-Section Image" className={CSS.image} />
      </div>
    </div>
  );
};

export default HeroSection;
