import { Card, CardHeader, CardBody, Text, CardFooter } from '@chakra-ui/react'
import { Photos } from './styled'
import Photo1 from "../../Assets/imagemteste.webp"

function Cardcar() {
    return (
        <Card w='20vw' h='60vh'bg='gray' m='1'>
            <CardBody>
                <Text>Noticia.
                    Em Manutenção</Text>
                    <Photos src={Photo1}/>
            </CardBody>
        </Card>
    )
}

export default Cardcar