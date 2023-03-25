import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { HomePage } from "../pages/homePage/HomePage";
import { CartPage } from "../pages/cartPage/CartPage";
import { NotFoundPage } from "../pages/notFoundPage/NotFoundPage";
import "./App.scss";

export function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
