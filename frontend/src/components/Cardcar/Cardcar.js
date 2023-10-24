import { Card, CardHeader, CardBody, Text, CardFooter } from '@chakra-ui/react'
import { Photos } from './styled'

function Cardcar({nome, url, valor}) {
    return (
    
        <Card w='60vw' h='60vh'bg='767578' m='1' lineHeight='1' textAlign='justify'>
            <CardBody>
                <img src= {url} />
                <p>{nome}</p>
                <p>{valor}</p>
            </CardBody>
        </Card>
    )
}

export default Cardcar