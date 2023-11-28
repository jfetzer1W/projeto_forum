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
                <Proposta id='about'>
                    Diferencial
                    <Propospace>
                        <PropoImage src={PropoImage2} />
                    </Propospace>
                </Proposta>

                <TopicosPro>
                    <Baterias>
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
                    <Plugins >
                        <Titulo>Plugins</Titulo>
                        <ListaPlugins id="about1">
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
                    
                </TopicosPro >
            </Divv>
            <Div3 id="carros">
                <Cardno 
                conteudo="Área pública terá árvore fotovoltaica de carros elétricos em Porto Alegre" 
                link="https://www.rbsdirect.com.br/filestore/7/5/0/9/6/8/4_f46a53e1a14b7a1/4869057_223155066b3886d.jpg?w=700&rv=2-10-05&safari"
                texto="Chamado de Esquina do Futuro, projeto do terrário urbano"
                noticia="https://gauchazh.clicrbs.com.br/colunistas/juliana-bublitz/noticia/2023/11/area-publica-tera-arvore-fotovoltaica-e-recarga-para-bikes-e-carros-eletricos-em-porto-alegre-clpb7p8rl000z012l2clcovld.html"
                />
                <Cardno 
                conteudo="Na contramão dos rivais, Hyundai e Kia veem forte demanda por carros elétricos" 
                link="https://cdn.motor1.com/images/mgl/2NZWRM/s2/2024-hyundai-kona-electric.webp"
                texto="Montadoras coreanas estão se saindo bem com seus carros elétricos."
                noticia="https://insideevs.uol.com.br/news/698175/hyundai-kia-demanda-carros-eletricos/#:~:text=Na%20contram%C3%A3o%20dos%20principais%20concorrentes,demanda%2C%20principalmente%20nos%20Estados%20Unidos."
                />
                <Cardno 
                conteudo="Haval H6 e BYD Song Plus, dois chineses dominantes em outubro" 
                link="https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/11/03/20231009_160548-1iuvis1n9cbao.jpg"
                texto="Novas marcas chinesas conquistaram mais uma vitória mensal em outubro."
                noticia="https://www.terra.com.br/carros-motos/haval-h6-e-byd-song-plus-dois-chineses-dominantes-em-outubro,997fce4a0ce34b6c054fe597bcc96f00sk6ao8ko.html"
                />
                <Cardno 
                conteudo="BYD recebe 44 mil inscrições para empregos em 7 dias." 
                link="https://s2-g1.glbimg.com/cXAfFTf0_x9MMb2eCdf0exkV0cg=/0x0:3000x1999/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/d/A/5RNbfASWW4W6s34aIJLg/fup20230704086.jpg"
                texto="Currículos foram enviados para a plataforma da empresa"
                noticia="https://g1.globo.com/ba/bahia/blogdoemprego/noticia/2023/07/11/byd-recebe-44-mil-inscricoes-para-empre-semana-apos-anuncio-de-fabricas-na-bahia.ghtml"
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
                <TextName id="projeto">
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