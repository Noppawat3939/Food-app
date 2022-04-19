import { Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./style/GlobalStyle";
import Home from "./pages/Home";
import FoodDetail from "./pages/FoodDetail";
import Category from "./pages/Category";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/food/:id" element={<FoodDetail />} />
        <Route path="/category/:category" element={<Category />} />
      </Routes>
    </>
  );
}

export default App;
