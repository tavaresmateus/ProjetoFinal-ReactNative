import React from "react";
import { Explore } from "./src/screens/Explore";
import { Login } from './src/screens/Login';
import Route from "./src/routes";
import { Register } from "./src/screens/Register";
import { ModalProduct } from "./src/components/Modais/ModalStats"
import { Products } from "./src/screens/Products";
import { AuthProvider } from "./src/contexts/Auth";
import { Shopee } from "./src/screens/Home";
import { Carrinho } from "./src/screens/Carrinho";
import { ProvedorCarrinho } from "./src/contexts/CartContext";


export default function App() {
  return (
    <ProvedorCarrinho>
     <AuthProvider>
       <Route/>
     </AuthProvider>
   
     </ProvedorCarrinho>


    // <Carrinho/>

  )

}
