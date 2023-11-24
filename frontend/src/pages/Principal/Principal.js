import Header from "../../components/Header/Header"
import Cardcar from "../../components/Cardcar/Cardcar"
import Cardno from "../../components/Cardno/Cardno"
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
    DivCarsP,
    CarTitle,
    Rodape,
    TextRo,
    TextName,
    Teorico,
    LinkedinIcon,
    ListaBateria,
    ListaPlugins,
    DivMaior
} from "./styled"

import PropoImage2 from "../../Assets/charge.png"
import { unstable_HistoryRouter, useNavigate } from "react-router-dom"
import carros from "../../api/api.json"
import LinkedinIc from "../../Assets/linkedin.svg"


function Principal() {

    const handleClick = () => {
        window.open('https://www.google.com/maps/d/embed?mid=1H9HBgKYm5m72BumEHmoFlmgubJ6UbK0&ehbc=2E312F')
    };

    const handleClickf = () => {
        window.open('https://www.linkedin.com/in/jo%C3%A3o-fetzer-7a8656239/')
    };

    const handleClickPDF = () => {
        window.open('https://drive.google.com/file/d/1f3OGgHvIZtbDYtsb5sk_rky1TZuhmvkl/view?usp=sharing')
    };

    
    console.log(carros)
    return (
        <>
        {/* <DivMaior> */}
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
                    <Baterias id="baterias">
                        <Titulo />Baterias
                        <ListaBateria>
                            <li >Íon de Lítio</li>
                            <li>Lítio-polímero</li>
                            <li>Íon de Sódio</li>
                            <li>Íon de Enxofre</li>
                            <li>Ferro-fosfato</li>
                            <li>Níquel-cádmio</li>
                            <li>Níquel-hidreto metálico</li>
                            <li>Chumbo-ácido</li>
                            <li>Fluxo (Vanádio-redox)</li>
                            <li>Super-capacitor</li>
                        </ListaBateria>
                    </Baterias>
                    <Plugins>
                        <Titulo>Plugins</Titulo>
                        <ListaPlugins>
                            <li>CHAdeMO</li>
                            <li>CCS (Combined Charging System)</li>
                            <li>Tesla Supercharger</li>
                            <li>Type 1 (SAE J1772)</li>
                            <li>Type 2 (IEC 62196)</li>
                            <li>GB/T (Guobiao/T, China standard)</li>
                            <li>Tesla Destination Charger</li>
                            <li>Supercharger V3</li>
                            <li>Supercharger V2</li>
                            <li>AC 3-Phase (Mennekes)</li>
                        </ListaPlugins>
                    </Plugins>
                </TopicosPro>
            </Divv>
            <Div3>
                <Cardno 
                conteudo="teste" 
                link="https://www.portalsolar.com.br/_next/image?url=https%3A%2F%2Finstitucional-and-info-production.s3.us-east-2.amazonaws.com%2Fimages%2Fa7175c4d-fac2-4c7c-bad3-f34f55048e99%2Fquase-10-mil-carros-eletricos-sao-vendidos-no-brasil-em-outubro-POST.jpg&w=1920&q=100"
                texto="Participação de veículos eletrificados leves no total de emplacamentos de automóveis no país chegou a 4,6%, mostra levantamento da ABVE"/>
                <Cardno 
                conteudo="teste2" 
                link="https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/11/20/planned-toyota-electric-vehicle-lineup_100819593_h-r1fnq6dpk2lu.jpg"
                texto="Avanço das marcas chinesas e crescimento rápido do mercado de carros elétricos fez a Toyota se mexer e prometer 30 novos modelos"
                />
                <Cardno 
                conteudo="teste2" 
                link="https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/01/27/k5-1hbfz2xvdnbs5.png"
                texto="CEO da Volkswagen México confirma que início da produção de carros elétricos começa em 2026; situação no Brasil mudou"
                />
                <Cardno 
                conteudo="teste2" 
                link="https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/11/20/planned-toyota-electric-vehicle-lineup_100819593_h-r1fnq6dpk2lu.jpg"
                texto=""
                />
            
            </Div3>
            <CarTitle> Carros Mais vendidos em 2023</CarTitle>
            <DivCarsP>
                {carros.map((dado) => {
                    return (<>
                        <Cardcar key={dado.id}
                            url={dado.imagem}
                            nome={dado.nome}
                            valor={dado.valor}
                            name={dado.name}
                            info={dado.info}
                        />
                    </>)
                })}
            </DivCarsP>
            <Rodape>
                <TextRo>
                    Site feito por:
                </TextRo>
                <TextName>
                    João Eduardo Widmann Fetzer
                </TextName>
                <Teorico onClick={handleClickPDF}>
                    DOCUMENTO.PDF
                </Teorico>
                <LinkedinIcon
                    src={LinkedinIc} onClick={handleClickf} />
            </Rodape> 
            {/* </DivMaior>    */}
        </>
    )
}

export default Principal