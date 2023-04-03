import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { HomePage } from "../pages/homePage/HomePage";
import { CartPage } from "../pages/cartPage/CartPage";
import { NotFoundPage } from "../pages/notFoundPage/NotFoundPage";
import "./App.scss";
import { ThanksPage } from "../pages/thanksPage/ThanksPage";
import { createContext, useEffect, useMemo, useState } from "react";

export const LocalStorageContext =createContext(null);

export function App() {
  const [store, setStore]=useState(null);
  useEffect(()=>{
    const order = localStorage.getItem('order');
    if(order) setStore(JSON.parse(localStorage.getItem('order')));
  },[])

  const updateStore =()=>setStore(JSON.parse(localStorage.getItem('order')));
  const providerValue = useMemo(()=>({store, updateStore}), [store])

  return (
    <div className="App">
    <LocalStorageContext.Provider value={providerValue}>
    <BrowserRouter>
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/thanks" element={<ThanksPage />} />
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>

    </LocalStorageContext.Provider>
    </div>
  );
}

export default App;
