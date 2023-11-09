import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../pages/Login/Login"
import Cadastro from "../pages/Cadastro/Cadastro"
import Principal from "../pages/Principal/Principal"
import Config from "../pages/Config/Config"

function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Login/>}/>
                <Route path="cadastro" element={<Cadastro/>}/>
                <Route path='principal' element={<Principal/>}/>
                <Route path='config' element={<Config/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas