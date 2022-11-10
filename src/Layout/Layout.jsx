import { Routes, Route, Navigate } from "react-router-dom";
// import Footer from "../components/Footer/Footer";

import "./Layout.css"

import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Coin from "../Pages/Coin";
import NotFound from "../Pages/NotFound";
import Coins from "../Pages/Coins";
import Info from "../Pages/Info";


export default function Layout() {
   return (
      <div className="layout_container">
         <Header />

         <Main>
            <Routes>
               <Route path="/" element={<Navigate to="/coins" />} />
               <Route path="/info" element={<Info />} />
               <Route path="/coins" element={<Coins />} />
               <Route path="/coins/:id" element={<Coin />} />
               <Route path="*" element={<NotFound />} />
            </Routes>
         </Main>

         {/* <Footer /> */}
      </div>
   )
}
