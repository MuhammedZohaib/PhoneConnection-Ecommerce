import { BrowserRouter } from "react-router-dom";
import Login from "./common/components/Login/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Login></Login>
      </BrowserRouter>
    </>
  );
}

export default App;
