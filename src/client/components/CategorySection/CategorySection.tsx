import CategoryCard from "../CategoryCard/CategoryCard";
import CSS from "./CategorySection.module.css";

const CategorySection = () => {
  return (
    <div>
      <div className={CSS.heading}>
        <div className={CSS.typo}>
          <p className={CSS.text}>Mobile Collection</p>
          <h2>Browse By Category</h2>
        </div>
        <CategoryCard></CategoryCard>
      </div>
    </div>
  );
};

export default CategorySection;
