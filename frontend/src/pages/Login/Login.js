import { Texto } from "../../components/Footer/styled"
import { Body, Box, CaixaDeTexto, Container, Form, FormImage, Header, Image, InputBox, Input, Label, ContainerForm, Divi, DivComport, LogoImg, ContainerFormulario, StyleForm, Botao } from "./styled"
import ImagemPrincipal from "../../Assets/imageleitura.png"
import Logo from "../../Assets/imagemlogo.jpg"
import { useNavigate } from "react-router-dom"

function Login() {
    const navigate = useNavigate()

    const goToHome = () => {
        navigate('/cadastro')
    }
    return (
        <>

            <Container>

                <ContainerForm  >
                    <Form>
                        <Divi>
                            <FormImage>
                                <Image src={ImagemPrincipal} />
                            </FormImage>
                            <ContainerFormulario>
                                <LogoImg src={Logo} />
                                <StyleForm >
                                    <div>


                                        <InputBox>
                                            <Label for="firstname">Primeiro Nome</Label>
                                            <Input id="firstname" type="text" name="firstname" placeholder="Digite seu primeiro nome" required></Input>
                                        </InputBox>
                                        <InputBox>
                                            <Label for="firstname">Sobrenome</Label>
                                            <Input id="firstname" type="text" name="firstname" placeholder="Digite seu sobrenome" required></Input>
                                        </InputBox>
                                        <InputBox>
                                            <Label for="firstname">Email</Label>
                                            <Input id="firstname" type="text" name="firstname" placeholder="Digite seu email" required></Input>
                                        </InputBox>
                                    </div>
                                    <div>
                                        <InputBox>
                                            <Label for="firstname">Telefone</Label>
                                            <Input id="firstname" type="text" name="firstname" placeholder="Digite seu numero de telefone" required></Input>
                                        </InputBox><InputBox>
                                            <Label for="firstname">Senha</Label>
                                            <Input id="firstname" type="text" name="firstname" placeholder="Digite sua senha" required></Input>
                                        </InputBox>
                                        <InputBox>
                                            <Label for="firstname">Confirme sua senha</Label>
                                            <Input id="firstname" type="text" name="firstname" placeholder="Confirme sua senha" required></Input>
                                        </InputBox>
                                    </div>
                                </StyleForm>
                                <Botao onClick={goToHome}>Continuar</Botao>
                            </ContainerFormulario>
                        </Divi>
                    </Form>
                </ContainerForm >
            </Container>

        </>
    )
}

export default Login