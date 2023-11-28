import { styled } from "styled-components";

export const CaixaDeTexto = styled.div`
    background-color: black;
    width: 25vw;
    height: 20vh;
`

export const Container = styled.div`
    width: 80%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.212);

    width: 100%;
    height: 100vh; 
    /* display: flex;
    align-items: center; */
    background: #8BDBA1;
`

export const ContainerForm = styled.div`
width: 70%;
display: flex;
align-self: center;
height: 90vh;
justify-content: center;
`

export const Body = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #0c0ce94d;
`
export const Form = styled.div`
    width: 70vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #fff;
    padding: 3rem;
`
export const FormImage = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
`
export const Image = styled.img`
    width: 31rem;
`

export const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1.1rem;
`
export const Input = styled.input`
    margin: 0.6rem 0;
    padding: 1.5vh;
    width: 40vh;
    border: none;
    border-radius: 10px;
    box-shadow: 1px 1px 6px #0000001c;
    font-size: 0.8rem;`

export const Label = styled.label`
    font-size: 0.75rem;
    font-weight: 600;
    color: #000000c0;
    `

export const Divi = styled.div`
display: flex;
justify-content: space-between;
`

export const LogoImg = styled.img`
    width: 210px;
`

export const ContainerFormulario = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5vh;
  gap: 2vh;
`

export const StyleForm = styled.div`
    display: flex;
`

export const Botao = styled.button`
    width: 280px;
    height: 40px;
    border: none;
    background-color: #36e16a;
    padding: 0.62rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    flex-shrink: 0;
`
export const Register = styled.button`
    color: #36e16a;
    width: 280px;
    height: 40px;
    border: none;
    background-color: #eee4e4;
    padding: 0.62rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    flex-shrink: 0;
`