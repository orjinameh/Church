import React from "react";
import Navbar from "../components/navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppRoutes from "./routes";
import Footer from "../components/footer"

function App() {
  const Routings = AppRoutes();
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {
            Routings.map((AppRoute) =>
              <Route key={AppRoute.id} path={AppRoute.path} element={AppRoute.element}></Route>
            )
          }
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
