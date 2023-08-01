import { Link } from "react-router-dom";
import CSS from "./CategoryCard.module.css";

const CategoryCard = () => {
  return (
    <div className={CSS.main}>
      <Link to={""} style={{ textDecoration: "none", color: "#000" }}>
        <div className={CSS.mainCard}>
          <div className={CSS.card} id={CSS.card4}>
            <p className={CSS.typo}>Mobile</p>
          </div>
          <div className={CSS.circleBackground} id={CSS.c4}></div>
        </div>
      </Link>
      <Link to={""} style={{ textDecoration: "none", color: "#000" }}>
        <div className={CSS.mainCard}>
          <div className={CSS.card} id={CSS.card1}>
            <p className={CSS.typo}>Computer</p>
          </div>
          <div className={CSS.circleBackground} id={CSS.c1}></div>
        </div>
      </Link>
      <Link to={""} style={{ textDecoration: "none", color: "#000" }}>
        <div className={CSS.mainCard}>
          <div className={CSS.card} id={CSS.card2}>
            <p className={CSS.typo}>Accessories</p>
          </div>
          <div className={CSS.circleBackground} id={CSS.c2}></div>
        </div>
      </Link>
      <Link to={""} style={{ textDecoration: "none", color: "#000" }}>
        <div className={CSS.mainCard}>
          <div className={CSS.card} id={CSS.card3}>
            <p className={CSS.typo}>Gaming</p>
          </div>
          <div className={CSS.circleBackground} id={CSS.c3}></div>
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
