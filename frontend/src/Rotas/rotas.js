import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../pages/Login/Login"
import Cadastro from "../pages/Cadastro/Cadastro"
import Principal from "../pages/Principal/Principal"

function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Login/>}/>
                <Route path="cadastro" element={<Cadastro/>}/>
                <Route path='principal' element={<Principal/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas