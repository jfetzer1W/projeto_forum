import { Card, CardHeader, CardBody, Text, CardFooter } from '@chakra-ui/react'
import { Photos } from './styled'

function Cardcar(props) {
    return (
    
        <Card w='60vw' h='40vh'bg='767578' m='1' lineHeight='1' textAlign='justify' >
            <CardBody>
                <img src= {props.url} />
                <p>{props.nome}</p>
                <p>{props.valor}</p>
                <p>{props.info}</p>
            </CardBody>
        </Card>
    )
}

export default Cardcar