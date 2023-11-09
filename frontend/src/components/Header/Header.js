import { FirstContainer, Foto, Fundo, Imglogo, Logo1, Logins, SecondContainer, Topicos } from "./styled"
import Logo from "../../Assets/imagemlogo.jpg"
import { useNavigate } from "react-router-dom"


function Header() {
    const navigate = useNavigate()

    const goToConfig = () => {
        navigate('/config')
    }

    const goToHome = () => {
        navigate('/principal')
    }


    return (
        <>
            <Fundo>
                <FirstContainer>
                    <Logo1 src={Logo} />
                    <Topicos onClick={goToHome}>Home</Topicos>
                    <Topicos >Diferencial</Topicos>
                    <Topicos >Notícias</Topicos>
                    <Topicos >Veículos</Topicos>
                    <Topicos >Projeto</Topicos>
                </FirstContainer>
                <SecondContainer>
                    <Logins>
                        <Topicos onClick={goToConfig}>Usuario1</Topicos>
                        <Foto />
                    </Logins>
                </SecondContainer>
            </Fundo>
        </>
    )
}

export default Header