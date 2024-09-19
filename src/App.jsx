import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ShoppingCartProvider } from "../src/components/contexts/ShoppingCartContext";
import NavbarComponent from "./components/navbar/NavBarComponent";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <ShoppingCartProvider>
        <main className="">
          <NavbarComponent />
          <AppRoutes />
        </main>
      </ShoppingCartProvider>
    </BrowserRouter>
  );
}

export default App;
