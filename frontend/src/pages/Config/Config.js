import Header from "../../components/Header/Header";
import { Main, Baner, BannerImg, InfosLabel, LogoPerfil, Fundo, Topicos, Name, Forms, FormCustom, CustomInput, DisplayButton, CancelButton, SaveButton, Divisor, Entrada, FormCustom1, Divisor1, Buttom } from "./styled"
import Banner from "../../Assets/banner.png";
import Perfil from "../../Assets/perfil.jpg";
import Footer from "../../components/Footer/Footer"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../services/Api";
import axios from "axios";

function Config() {
    const navigate = useNavigate()
    const id = localStorage.getItem("user")
    const formDatas = {
        id: id
    }
    const [user, setUser] = useState()
    const [nome, setNome] = useState()
    const [sobrenome, setSobrenome] = useState()
    const [tel, setTel] = useState()
    const [confirmSenha, setConfirmSenha] = useState()
    const [senha, setSenha] = useState()

    const handleSubmit = (e) => {
        e.preventDefault();
        //pega o id no localhost para identificar o usuário
        const id = localStorage.getItem('user');
        if (id) {
            try {
                //limpa o localstorage, apaga também o token
                localStorage.clear()

                // console.log(response)
                navigate('/')
            } catch (error) {
                console.log(error)
            }
        }
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

    const goToHome = () => {
        navigate('/principal')
    }

    const handleChange = () => {
        if (senha !== confirmSenha) {
            alert("Novas senhas não coincidem")
        } else {
            const formData = {};

            if (nome) {
                formData.nome = nome;
            }
            if (sobrenome) {
                formData.sobrenome = sobrenome;
            }
            if (tel) {
                formData.telefone = tel;
            }
            if (senha) {
                formData.senha = senha;
            }

            if (formData === {}) {
                alert("Nenhum campo para atualizar foi fornecido")
            } else {
                axios.put(`${baseUrl}/user/${id}`, formData)
                    .then(function (response) {
                        alert("Usuário atualizado")
                    })
                    .catch(function (error) {
                        alert("Não foi possível atualizar o usuário")
                        console.log(error)
                    });

                setNome('')
                setSobrenome('')
                setTel('')
                setSenha('')
                setConfirmSenha('')
            }
        }
    }

    return (
        <>
            {user ? (
                <>
                    <Header />
                    <Main>
                        <Baner>
                            <BannerImg src={Banner} />
                            <LogoPerfil src={Perfil} />
                            <Name>{user.nome}</Name>
                        </Baner>
                        <Fundo>
                            <Topicos>
                                <Tabs>
                                    <TabList>
                                        <Tab>Perfil</Tab>
                                        <Tab>Senha</Tab>
                                    </TabList>
                                    <TabPanels>
                                        <TabPanel>
                                            <Forms>
                                                <FormCustom>
                                                    <Divisor>
                                                        <Entrada>
                                                            <InfosLabel>Nome</InfosLabel>
                                                            <CustomInput value={nome} onChange={(e) => setNome(e.target.value)} type="text" placeholder="Nome de Usuário" />
                                                        </Entrada>
                                                        <Entrada>
                                                            <InfosLabel>Sobrenome</InfosLabel>
                                                            <CustomInput value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} type="text" placeholder="Nome Completo" />
                                                        </Entrada>
                                                    </Divisor>
                                                    <Divisor>
                                                        <Entrada>
                                                            <InfosLabel>Telefone</InfosLabel>
                                                            <CustomInput value={tel} onChange={(e) => setTel(e.target.value)} placeholder="Telefone" />
                                                        </Entrada>
                                                    </Divisor>
                                                </FormCustom>
                                            </Forms>
                                        </TabPanel>
                                        <TabPanel>
                                            <Forms>
                                                <FormCustom1>
                                                    <Divisor1>
                                                        <Entrada>
                                                            <InfosLabel>Senha nova</InfosLabel>
                                                            <CustomInput value={senha} onChange={(e) => setSenha(e.target.value)} type="text" placeholder="Nome" />
                                                        </Entrada>
                                                    </Divisor1>
                                                    <Divisor1>
                                                        <Entrada>
                                                            <InfosLabel>Repetir senha nova</InfosLabel>
                                                            <CustomInput value={confirmSenha} onChange={(e) => setConfirmSenha(e.target.value)} type="password" placeholder="Senha nova" />
                                                        </Entrada>
                                                    </Divisor1>
                                                </FormCustom1>
                                            </Forms>
                                        </TabPanel>

                                    </TabPanels>
                                </Tabs>
                                <Buttom onClick={handleSubmit}>Log out</Buttom>
                            </Topicos>
                            <DisplayButton>
                                <CancelButton class="submit" id="submit" type="submit" >Cancelar</CancelButton>
                                <SaveButton onClick={handleChange} class="submit" id="submit" type="submit">Salvar</SaveButton>
                            </DisplayButton>
                        </Fundo>

                    </Main >

                    <Footer />
                </>
            ) : (
                <></>
            )}
        </>
    )
}

export default Config;