import {styled} from "styled-components"
import Principala from "../../Assets/principal.png"
import PropoImage2 from "../../Assets/charge.png"


export const DivMaior = styled.div`
overflow-x:hidden;
`
export const Cabeca = styled.div`
width: 100%;
height: 100vh;
background: url(${Principala});
background-size: cover;
background-position: center;
`

export const Main = styled.div`
width: 100vh;
height: 80vh;
`

// export const Principala = styled.img`
//     flex-shrink: 0;
//     z-index: 0px;
//     position: absolute;
// `

export const Botao = styled.button`
    width: 190px;
    height: 40px;
    border: none;
    background-color: #36e16a;
    padding: 0.90rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    flex-shrink: 10px;
    position: absolute;
    margin-top: 70vh;
    z-index: 10;
    font-family: Genos;
    gap: 15;
    margin-left: 40px;
`

export const Divv = styled.div`
align-items: center;
flex-direction: row;
display: flex;
width: 98vw;
height: 80vh;
background-color: white;
`

export const Proposta = styled.div`
font-family: 'Genos', sans-serif;
width: 45vw;
text-align: center;
color: var(--bg-dark-grey, #161E21);
text-align: center;
font-family: Genos;
font-size: 52px;
font-style: normal;
font-weight: 700;
line-height: 110%; /* 60.5px */
text-transform: uppercase;
display: flex;
flex-direction: column;
align-items: center;
background-color: white;
` 
export const TopicosPro = styled.div`
width: 55vw;
height: 45vh;
display: flex;
flex-direction: row;
justify-content: space-between;
margin-top: -37px;
background-color: white;
`
export const Baterias = styled.div`
display: flex;
flex-direction: column;
color: var(--bg-dark-grey, #161E21);
font-family: Anybody;
font-size: 20px;
font-style: normal;
font-weight: 700;
gap: 3vh;
line-height: 110%; /* 22px */;
margin-top: 6vh;
`

export const Plugins = styled.div`
    color: var(--bg-dark-grey, #161E21);
    font-family: Anybody;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    gap: 3vh;
    line-height: 110%; /* 22px */;
    margin-right: 90px;
    margin-top: 9vh;
`

export const Titulo = styled.div`
color: var(--bg-dark-grey, #161E21);
font-family: Anybody;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: 110%; /* 22px */;
margin-top: -39px;
margin-right: 20px;
`

export const Propospace = styled.div`
heigth: 100vh;
width: 38vw;
display: flex;
flex-direction: row;
justify-content: center;
`
export const PropoImage = styled.img`
height: 60vh;
`

export const Div3 = styled.div`
width: 100%;
height: 80vh;
display: flex;
flex-direction: row;
gap: 3vw;
background: #A9A9A9;
overflow: auto;
flex: 0 0 100vw;
transition: transform 0.5s ease;

`

export const DivCarsP = styled.div`
// width: 100.5vw;
height: 78vh;
background-color: #A9A9A9;
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 50px;
`
export const DivCars = styled.div`
background-color: #A9A9A9;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`

export  const DivCars2 = styled.div`
display: flex;
flex-direction: row;
`
export const CarTitle = styled.div`
width: 43vw;
background-color: #A9A9A9;
display: flex;
font-family: Genos;
font-size: 40px;
font-style: normal;
font-weight: 700;
line-height: 110%; /* 22px */;
`

export const Rodape = styled.div`
height: 60vh;
background-color: #161E21;
display: flex;
`
export const TextRo = styled.div`
margin-left: 5vh;
margin-top: 23vh;
width: 10vw;
height:20vh;
color: white;
font-family: Anybody;
`

export const TextName = styled.div`
margin-left: -22.4vh;
margin-top: 30vh;
width: 30vw;
height:20vh;
color: white;
font-family: Anybody;

`
export const Teorico = styled.button`
margin-top: 28vh;
margin-left: 25vh;
display: flex;
height: 46px;
padding: 16px;
justify-content: center;
align-items: center;
border-radius: 10px;
border: 4px solid var(--blue, #00A8A8);
background: var(--blue, #00A8A8);
`

export const LinkedinIcon = styled.img `
height: 9vh;
width: 10vw;
margin-top: 28vh;
margin-left: 65vh;
display: flex;
`
export const ListaBateria = styled.div`
font-size: 15px;
`

export const ListaPlugins = styled.div`
font-size: 15px;
margin-top: 18px;
`