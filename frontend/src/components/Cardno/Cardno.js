import { Card, CardHeader, CardBody, Text, CardFooter } from '@chakra-ui/react'


function CardNo({nome, url, fonte, imagem}) {
    return (
        <Card w='21vw' h='290'bg='gray' m='5'>
            <CardBody>
                    <img src={imagem} />
                    <p>{nome}</p>
                    <p>{fonte}</p>
                    <p>{url}</p>
            </CardBody>
        </Card>
    )
}

export default CardNo