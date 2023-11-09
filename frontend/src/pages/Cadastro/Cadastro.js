import { Texto } from "../../components/Footer/styled"
import { Body, Box, CaixaDeTexto, Container, Form, FormImage, Header, Image, InputBox, Input, Label, ContainerForm, Divi, DivComport, LogoImg, ContainerFormulario, StyleForm, Botao, Register } from "./styled"
import ImagemLogin from "../../Assets/imagemlogin.gif"
import Logo from "../../Assets/imagemlogo.jpg"
import { useNavigate } from "react-router-dom"
import { useState } from "react";
import { baseUrl } from "../../services/Api";
import axios from "axios";
import { useToast } from '@chakra-ui/react'

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

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(`${baseUrl}/auth/login`, formData)
            .then(function (response) {
                console.log(response)
                localStorage.setItem('user', response.data.data[0].id)
                localStorage.setItem('token', response.data.data[0].token)
                toast({
                    position: 'bottom-left',
                    title: 'Sucesso',
                    description: response.data.message,
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                })
                goToHome()
            })
            .catch(function (error) {
                toast({
                    position: 'bottom-left',
                    title: 'Erro',
                    description: error.response.data.msg,
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                })
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