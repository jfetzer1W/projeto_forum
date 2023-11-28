import { FirstContainer, Foto, Fundo, Imglogo, Logo1, Logins, SecondContainer, Topicos } from "./styled"
import Logo from "../../Assets/imagemlogo.jpg"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { baseUrl } from "../../services/Api"
import axios from "axios"
import { useState } from "react"
import { Link } from "react-scroll"


function Header() {
    const navigate = useNavigate()
    const id = localStorage.getItem("user")
    const formDatas = {
        id: id
    }
    const [user, setUser] = useState()

    const goToConfig = () => {
        navigate('/config')
    }

    const goToHome = () => {
        navigate('/principal')
    }

// Cria um estado chamado 'click' e uma função 'setClick' para modificar esse estado
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    useEffect(() => {
        axios.post(`${baseUrl}/find`, formDatas)
            .then(function (response) {
                setUser(response.data.data)
            })
            .catch(function (error) {
                alert(error.response.data.msg)
                console.log(error)
            });
    }, [formDatas])



    return (
        <>
            {user ? (
                <Fundo>
                    <FirstContainer>
                        <Logo1 src={Logo} />
                        <Topicos onClick={goToHome}>Home</Topicos>
                        <Topicos>
                            <Link to="about" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}> Diferencial</Link>
                        </Topicos>
                        <Topicos>
                            <Link to="about1" spy={true} smooth={true} offset={500} duration={500} onClick={closeMenu}> Noticias</Link>
                        </Topicos>
                        <Topicos >
                            <Link to="carros" spy={true} smooth={true} offset={500} duration={500} onClick={closeMenu}> Mercado</Link></Topicos>
                        <Topicos>
                            <Link to="projeto" spy={true} smooth={true} offset={500} duration={500} onClick={closeMenu}> Projeto</Link>
                        </Topicos>
                    </FirstContainer>
                    <SecondContainer>
                        <Logins>
                            <Topicos onClick={goToConfig}>{user.nome}</Topicos>
                            <Foto />
                        </Logins>
                    </SecondContainer>
                </Fundo>
            ) : (
                <></>
            )}
        </>
    )
}

export default Header