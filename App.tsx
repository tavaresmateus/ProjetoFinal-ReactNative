import React from "react";
import { Explore } from "./src/screens/Explore";
import { Login } from './src/screens/Login';
import Route from "./src/routes";
import { Register } from "./src/screens/Register";
import { Shopee } from "./src/screens/TesteApi";
import { AuthProvider } from "./src/contexts/Auth";


export default function App() {
  return (
    <AuthProvider>
      <Route/>
    </AuthProvider>
  )

}
