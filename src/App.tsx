import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./common/components/Login/Login";
import Home from "./client/pages/Home";
import HomePageProducts from "./client/components/HomePageProducts/HomePageProducts";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>} />
          <Route
            path="/products"
            element={<HomePageProducts></HomePageProducts>}
          />
          <Route path="/products/:id" element={""} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
