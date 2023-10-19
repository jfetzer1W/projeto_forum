import { ChakraProvider } from "@chakra-ui/react";
import Rotas from "./Rotas/rotas";

function App() {
  return (
    <>
      <ChakraProvider>
        <Rotas/>
      </ChakraProvider>
    </>
  );
}

export default App;
