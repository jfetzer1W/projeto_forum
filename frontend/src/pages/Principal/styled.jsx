import {styled} from "styled-components"
import Principala from "../../Assets/principal.png"
import PropoImage2 from "../../Assets/charge.png"

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
`

export const Divv = styled.div`
align-items: center;
flex-direction: row;
display: flex;
width: 98vw;
height: 80vh;
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
` 
export const TopicosPro = styled.div`
width: 55vw;
height: 45vh;
display: flex;
flex-direction: row;
justify-content: space-between;

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
`

export const Plugins = styled.div`
    color: var(--bg-dark-grey, #161E21);
    font-family: Anybody;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    gap: 3vh;
    line-height: 110%; /* 22px */;
`

export const Titulo = styled.div`
color: var(--bg-dark-grey, #161E21);
font-family: Anybody;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: 110%; /* 22px */;
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
width:99vw;
height: 80vh;
display: flex;
flex-direction: row;
gap: 3vw;
background: white;
`

export const DivCarsP = styled.div`
width: 100.5vw;
height: 105vh;
background-color: green;
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 50px;
`
export const DivCars = styled.div`
background-color: green;
display: flex;
flex-direction: row;
`

export  const DivCars2 = styled.div`
display: flex;
flex-direction: row;
`