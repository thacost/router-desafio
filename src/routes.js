import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Sobre from './components/Sobre';
import Contato from './components/Contato';
import PageBase from './components/PageBase';
import Page404 from "./components/Page404";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <PageBase />}>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/sobre" element={<Sobre />}></Route>
                    <Route path="/contato" element={<Contato />}></Route>
                    <Route path="*" element={<Page404 />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;