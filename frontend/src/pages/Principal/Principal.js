import Header from "../../components/Header/Header"
import Cardno from "../../components/Cardno/Cardno"
import Cardcar from "../../components/Cardcar/Cardcar"
import {
    Main,
    Botao,
    Divv,
    Proposta,
    Cabeca,
    Imagem,
    TopicosPro,
    Baterias,
    Plugins,
    Titulo,
    Propospace,
    PropoImage,
    Div3,
    DivCars,
    DivCars2,
    DivCarsP
} from "./styled"

import PropoImage2 from "../../Assets/charge.png"
import { unstable_HistoryRouter, useNavigate } from "react-router-dom"
import carros from "../../api/api.json"
import noticias from "../../api/apino.json"

function Principal() {
    document.body.style.overflow = 'hidden-x';

    const handleClick = () => {
        window.open('https://www.google.com/maps/d/embed?mid=1H9HBgKYm5m72BumEHmoFlmgubJ6UbK0&ehbc=2E312F')
    };


    console.log(noticias)
    console.log(carros)
    return (
        <>
            <Header />
            <Cabeca>
                <Main>
                    <Botao onClick={handleClick}>Maps LocLetro</Botao>
                </Main>
            </Cabeca>
            <Divv>
                <Proposta>
                    Diferencial
                    <Propospace>
                        <PropoImage src={PropoImage2} />
                    </Propospace>
                </Proposta>

                <TopicosPro>
                    <Baterias>
                        <Titulo>Baterias</Titulo>
                        <p>Quais são as baterias presentes nos carros?</p>
                    </Baterias>
                    <Plugins>
                        <Titulo>Plugins</Titulo>
                        <p>Saiba os diferetes tipos de plugins que os carros possuem</p>
                    </Plugins>
                </TopicosPro>
            </Divv>
            <Div3>
                {noticias.map((elemento) => {
                    return(<>
                        <Cardno key={elemento.id}
                        fonte={elemento.fonte}
                        url={elemento.url}
                        nome={elemento.nome}
                        imagem={elemento.imagem}
                        />
                    </>)
                })}
                
            </Div3>
            <DivCarsP>
                {carros.map((dado) => {
                    return(<>
                        <Cardcar key={dado.id}
                        url={dado.imagem}
                        nome={dado.nome}
                        valor={dado.valor}
                        />
                    </>)
                })}
            </DivCarsP>

        </>

    )
}

export default Principal