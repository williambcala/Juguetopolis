import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavbarComponent from "./components/navbar/NavBarComponent";
import AppRoutes from "./routes/AppRoutes";
function App() {

  return (
    <BrowserRouter>
      <main className="">
        <NavbarComponent />
        <AppRoutes />
      </main>
    </BrowserRouter>
  );
};

export default App;
