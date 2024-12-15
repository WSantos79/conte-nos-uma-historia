import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import { GlobalStyle } from "./styles/GlobalStyle";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Footer from "./components/Footer";
import History from "./Pages/History";
import Categorias from "./Pages/Categorias";
import User from "./Pages/User";
import NovaHistoria from "./Pages/NovaHistoria";
import MinhasHistorias from "./Pages/MinhasHistorias";
import SobreMim from "./Pages/SobreMim";

export default function router(){
    return(
        <BrowserRouter> 
            <GlobalStyle />
            <Header/>
            <Routes>                
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/history" element={<History />} />
                <Route path="/categorias" element={<Categorias />} />

                { /* rotas privadas */}
                <Route path="/novahistoria" element={<NovaHistoria />} />
                <Route path="/minhashistorias" element={<MinhasHistorias />} />
                <Route path="/sobremim" element={<SobreMim />} />
                <Route path="/user" element={<User />} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}