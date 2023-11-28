import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../pages/Login/Login"
import Cadastro from "../pages/Cadastro/Cadastro"
import Principal from "../pages/Principal/Principal"
import Config from "../pages/Config/Config"
import { Baterias } from "../pages/Principal/styled"

function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Login/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="cadastro" element={<Cadastro/>}/>
                <Route path='principal' element={<Principal/>}/>
                <Route path='config' element={<Config/>}/>
                <Route path='diferencial' element={<Principal/>}/>
                <Route path='noticias' element={<Principal/>}/>
                <Route path='veiculos' element={<Principal/>}/>
                <Route path='projeto' element={<Principal/>}/>
                <Route path='diferencial'element={<Principal scrollToSection="baterias" />}/>

            </Routes>
        </BrowserRouter>
    )
}

export default Rotas