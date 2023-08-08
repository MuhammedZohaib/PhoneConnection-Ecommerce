import { useQuery } from "react-query";
import useAxios from "../../../hooks/useAxios";
import ProductCard from "../productCard/ProductCard";
import CSS from "./HomePageProducts.module.css";
import LoadingSpinner from "../../../common/components/Loading/LoadingSpinner";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export default function HomePageProducts() {
  const { data, isError, isLoading } = useQuery("products", async () => {
    const result = await useAxios.get<Product[]>("/products");
    const data = result.data;
    return data;
  });

  if (isLoading)
    return (
      <div>
        <LoadingSpinner></LoadingSpinner>
      </div>
    );

  if (isError)
    return (
      <div>
        <p>Error loading products.</p>
      </div>
    );

  return (
    <div className={CSS.mainContainer}>
      <div className={CSS.typo}>
        <p>Mobile Collection</p>
        <h2>Explore Our Products</h2>
      </div>
      <div className={CSS.main}>
        {data?.slice(0, 10).map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            price={product.price}
            name={product.title}
            id={product.id}
            rating={product.rating.rate}
          />
        ))}
      </div>
    </div>
  );
}
