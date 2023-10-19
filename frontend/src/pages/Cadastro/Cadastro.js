import { Texto } from "../../components/Footer/styled"
import { Body, Box, CaixaDeTexto, Container, Form, FormImage, Header, Image, InputBox, Input, Label, ContainerForm, Divi, DivComport, LogoImg, ContainerFormulario, StyleForm, Botao, Register } from "./styled"
import ImagemLogin from "../../Assets/imagemlogin.gif"
import Logo from "../../Assets/imagemlogo.jpg"
import { useNavigate } from "react-router-dom"

function Cadastro() {
    const navigate = useNavigate()

    const goToHome = () => {
        navigate('/principal')
    }

    return (
        <>

            <Container>
                <ContainerForm  >
                    <Form>
                        <Divi>

                            <FormImage>
                                <Image src={ImagemLogin} />
                            </FormImage>
                            <ContainerFormulario>
                                <LogoImg src={Logo} />
                                <StyleForm >
                                    <div>
                                        <InputBox>
                                            <Label for="firstname">Email</Label>
                                            <Input id="email" type="text" name="email" placeholder="Digite seu email" required></Input>
                                        </InputBox>
                                        <InputBox>
                                            <Label for="firstname">Senha</Label>
                                            <Input id="firstname" type="text" name="firstname" placeholder="Digite sua senha" required></Input>
                                        </InputBox>
                                    </div>
                                </StyleForm>
                                <Botao onClick={goToHome}>Entrar</Botao>
                                <Register>Registrar</Register>
                            </ContainerFormulario>
                        </Divi>
                    </Form>
                </ContainerForm >
            </Container>

        </>
    )
}

export default Cadastro