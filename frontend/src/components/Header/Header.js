import { FirstContainer, Foto, Fundo, Imglogo, Logo1, Logins, SecondContainer, Topicos } from "./styled"
import Logo from "../../Assets/imagemlogo.jpg"
import { useNavigate } from "react-router-dom"


function Header() {
    const navigate = useNavigate()

    const goToHome = () => {
        navigate('/principal')
    }

    return (
        <>
            <Fundo>
                <FirstContainer>
                    <Logo1 src={Logo} />
                    <Topicos onClick={goToHome}>Home</Topicos>
                    <Topicos >Vantagens</Topicos>
                    <Topicos >Proposta</Topicos>
                    <Topicos >Diferencial</Topicos>
                    <Topicos >Veículos</Topicos>
                </FirstContainer>
                <SecondContainer>
                    <Logins>
                        <Topicos>João Fetzer</Topicos>
                        <Foto />
                    </Logins>
                </SecondContainer>
            </Fundo>
        </>
    )
}

export default Header