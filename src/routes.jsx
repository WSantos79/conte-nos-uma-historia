import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import { GlobalStyle } from "./styles/GlobalStyle";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Footer from "./components/Footer";



export default function router(){
    return(
        <BrowserRouter> 
            <GlobalStyle />
            <Header/>
            <Routes>                
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                { /* rotas privadas */}
                <Route path="/user" element={<user />} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}