import { JavaScriptLogo } from "./JavaScriptLogo"
import { Container, Flex, Heading } from "@radix-ui/themes"
import { Start } from "./Start"


function App() {


  return (
    <main>
      <Container>
        <Flex gap="2" >
          <JavaScriptLogo />
          <Heading as="h1" size="9">JavaScript Quiz</Heading>
        </Flex>
          <Start />
      </Container>

    </main>
  )
}

export default App
