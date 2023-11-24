import { FirstContainer, Foto, Fundo, Imglogo, Logo1, Logins, SecondContainer, Topicos } from "./styled"
import Logo from "../../Assets/imagemlogo.jpg"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { baseUrl } from "../../services/Api"
import axios from "axios"
import { useState } from "react"

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
                        <Topicos>Diferencial</Topicos>
                        <Topicos >Notícias</Topicos>
                        <Topicos >Veículos</Topicos>
                        <Topicos >Projeto</Topicos>
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