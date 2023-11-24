import { Texto } from "../../components/Footer/styled"
import { CaixaDeTexto, Container, Form, FormImage, Header, Image, InputBox, Input, Label, ContainerForm, Divi, DivComport, LogoImg, ContainerFormulario, StyleForm, Botao, Register } from "./styled"
import ImagemLogin from "../../Assets/imagemlogin.gif"
import Logo from "../../Assets/imagemlogo.jpg"
import { useNavigate } from "react-router-dom"
import { useState } from "react";
import { baseUrl } from "../../services/Api";
import axios from "axios";
import { useToast } from '@chakra-ui/react'
import { Box } from "@chakra-ui/react"

function Cadastro() {
    const navigate = useNavigate();
    const toast = useToast()
    const [formData, setFormData] = useState({
        email: "",
        senha: ""
    });

    const goToHome = () => {
        navigate('/principal')
    }

    const goToCadastro = () => {
        navigate('/cadastro')
    }

    const handleSubmit = (e) => {
        e.preventDefault();

// Envia uma solicitação de login para o servidor usando o método POST do Axios
        axios.post(`${baseUrl}/auth/login`, formData)
            .then(function (response) {
 // Se a solicitação for bem-sucedida, armazena o ID do usuário e o token no localStorage
                localStorage.setItem('user', response.data.data.id_user)
                localStorage.setItem('token', response.data.data.token)

                alert("Login realizado")
// Redireciona o usuário para a página inicial (Home)
                goToHome()
                toast({
                    position: 'bottom-left',
                    render: () => (
                        <Box color='white' p={3} bg='blue.500'>
                            Hello World
                        </Box>
                    ),
                })

            })
            .catch(function (error) {
                alert("Erro")
                console.log(error)
            });

        setFormData({
            email: "",
            senha: "",
        })
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
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
                                            <Input
                                                id="email"
                                                type="text"
                                                name="email"
                                                placeholder="Digite seu email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </InputBox>
                                        <InputBox>
                                            <Label for="senha">Senha</Label>
                                            <Input
                                                id="senha"
                                                name="senha"
                                                placeholder="Digite sua senha"
                                                type="password"
                                                value={formData.senha}
                                                onChange={handleChange}
                                                required
                                            />
                                        </InputBox>
                                    </div>
                                </StyleForm>
                                <Botao onClick={handleSubmit}>Entrar</Botao>
                                <Register type="button" onClick={goToCadastro}>Registrar</Register>
                            </ContainerFormulario>
                        </Divi>
                    </Form>
                </ContainerForm >
            </Container>

        </>
    )
}

export default Cadastro