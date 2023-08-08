import Footer from "../../common/components/Footer/Footer";
import Navbar from "../../common/components/Navbar/Navbar";
import CategorySection from "../components/CategorySection/CategorySection";
import HeroSection from "../components/HeroSection/HeroSection";
import HomePageProducts from "../components/HomePageProducts/HomePageProducts";
import Merch from "../components/Merchandise/Merch";

const Home = (): JSX.Element => {
  return (
    <div>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <CategorySection></CategorySection>
      <Merch></Merch>
      <HomePageProducts></HomePageProducts>
      <Footer></Footer>
    </div>
  );
};

export default Home;
