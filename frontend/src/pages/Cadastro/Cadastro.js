import { Texto } from "../../components/Footer/styled"
import { Container, Form, FormImage, Image, InputBox, Input, Label, ContainerForm, Divi, LogoImg, ContainerFormulario, StyleForm, Botao, BotaoRegi } from "./styled"
import mapregis from "../../Assets/mapregis.png"
import Logo from "../../Assets/imagemlogo.jpg"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import { baseUrl } from "../../services/Api"
import { Box } from "@chakra-ui/react"
import { useToast } from "@chakra-ui/react"

function Cadastro() {
    const navigate = useNavigate()
    const toast = useToast()
    const [formData, setFormData] = useState({
        firstName: "",
        sobrenome: "",
        email: "",
        telefone: "",
        senha: "",
        confirmSenha: ""
    });

    const goToHome = () => {
        navigate('/login')
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.senha !== formData.confirmSenha) {
            alert("Senhas não coincidem")
        } else {
            console.log(formData)
            axios.post(`${baseUrl}/user/create`, formData)
                .then(function (response) {
                    alert("Cadastro realizado")
                    goToHome()
                    toast({
                        position: 'bottom-left',
                        render: () => (
                            <Box color='white' p={3} bg='green.500'>
                                Sucesso!    
                            </Box>
                        ),
                    })
        
                })
                .catch(function (error) {
                    console.log(error)
                });
        }

        setFormData({
            firstName: "",
            sobrenome: "",
            email: "",
            telefone: "",
            senha: "",
            confirmSenha: ""
        });
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const goToLogin = () => {
        navigate('/login')
    }


    return (
        <>

            <Container>

                <ContainerForm  >
                    <Form>
                        <Divi>
                            <FormImage>
                                <Image src={mapregis} />
                            </FormImage>
                            <ContainerFormulario>
                                <LogoImg src={Logo} />
                                <StyleForm >
                                    <div>
                                        <InputBox>
                                            <Label for="firstname">Primeiro Nome</Label>
                                            <Input
                                                id="firstName"
                                                type="text"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                placeholder="Digite seu primeiro nome"
                                                required
                                            />
                                        </InputBox>
                                        <InputBox>
                                            <Label for="sobrenome">Sobrenome</Label>
                                            <Input
                                                id="sobrenome"
                                                type="text"
                                                name="sobrenome"
                                                value={formData.sobrenome}
                                                onChange={handleChange}
                                                placeholder="Digite seu sobrenome"
                                                required
                                            />
                                        </InputBox>
                                        <InputBox>
                                            <Label for="email">Email</Label>
                                            <Input
                                                id="email"
                                                type="text"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="Digite seu email"
                                                required
                                            />
                                        </InputBox>
                                    </div>
                                    <div>
                                        <InputBox>
                                            <Label for="telefone">Telefone</Label>
                                            <Input
                                                id="telefone"
                                                type="text"
                                                name="telefone"
                                                value={formData.telefone}
                                                onChange={handleChange}
                                                placeholder="Digite seu numero de telefone"
                                                required
                                            />
                                        </InputBox><InputBox>
                                            <Label for="senha">Senha</Label>
                                            <Input
                                                id="senha"
                                                type="password"
                                                name="senha"
                                                value={formData.senha}
                                                onChange={handleChange}
                                                placeholder="Digite sua senha"
                                                required
                                            />
                                        </InputBox>
                                        <InputBox>
                                            <Label for="confirmSenha">Confirme sua senha</Label>
                                            <Input
                                                id="confirmSenha"
                                                type="password"
                                                name="confirmSenha"
                                                value={formData.confirmSenha}
                                                onChange={handleChange}
                                                placeholder="Digite seu primeiro nome"
                                                required
                                            />
                                        </InputBox>
                                    </div>
                                </StyleForm>
                                <Botao onClick={handleSubmit}>Cadastrar</Botao>
                                <BotaoRegi type="button" onClick={goToLogin}>Já possuo conta</BotaoRegi>
                            </ContainerFormulario>
                        </Divi>
                    </Form>
                </ContainerForm >
            </Container>

        </>
    )
}

export default Cadastro