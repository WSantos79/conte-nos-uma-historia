import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { createBrowserHistory } from 'history'
import Header from "./components/Header";
import { GlobalStyle } from "./styles/GlobalStyle";
import Home from "./Pages/Home";

const history = createBrowserHistory();

export default function router(){
    return(
        <BrowserRouter history={history}> 
            <GlobalStyle />
            <Header/>
            <Routes>                
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}