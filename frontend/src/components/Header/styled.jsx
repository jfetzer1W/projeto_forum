import { styled } from "styled-components";
// import login from "../../Assets/perfil.jpg"
import Logo from "../../Assets/imagemlogo.jpg"

export const Fundo = styled.div`
    width: 98vw;
    height: 10vh;
    display: flex;
    flex-direction: row;
`

export const FirstContainer = styled.div`
    width: auto;
    height: 10vh;
    justify-content: space-between;
    align-items: center;
    display: flex;
    gap: 3vh;
    flex-direction: row;
`

export const SecondContainer = styled.div`
    width: 71vw;
    height: 10vh;
    justify-content: space-between;
    align-items: center;
    display: flex;
    flex-direction: row-reverse;
`

export const Logo1 = styled.img`
    width: 10vw;
    height: 8vh;
    padding-left: 1vw;
    margin-right: 2vw;
`

export const Topicos = styled.button`
    color: var(--base-dark-gray, #34364A);
    font-family: Poppins;
    border: none;
    background: none;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    text-align: center;
    gap: 10vh;
`
export const Logins = styled.div`
    width: 9vw;
    height: 10vh;
    justify-content: space-between;
    align-items: center;
    display: flex;
    flex-direction: row;
`

export const Foto = styled.button`
    border-radius: 50%;
    width: 40px;
    height: 40px;
    background-size: cover;
`