import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Button, ButtonGroup } from '@chakra-ui/react'
import { DivMaior } from './styled'

function Cardno(props) {

  const handleClick = () => {
    window.open(props.noticia)
};

    return (
  <DivMaior>
  <Card h='70vh' w='25vw' m='2.5'>
    <CardBody>
      <Image h='30vh' w='50vw'
        src= {props.link}
        borderRadius='lg'
      />
      <Stack mt='2' spacing='3' h='20' w='70'>
        <Heading size='md'>{props.conteudo}</Heading>
        <Text>
        {props.texto}
        </Text>
      </Stack>
    </CardBody>
    <CardFooter>
      <ButtonGroup spacing='2'>
        <Button onClick={handleClick} variant='solid' background="#36e16a" >
          {props.title}
          Acessar notícia
        </Button>
      </ButtonGroup>
    </CardFooter>
  </Card></DivMaior>
 )
}

export default Cardno