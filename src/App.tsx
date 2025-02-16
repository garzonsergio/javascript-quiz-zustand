import { JavaScriptLogo } from "./components/JavaScriptLogo"
import { Container, Flex, Heading } from "@radix-ui/themes"
import { Start } from "./components/Start"
import { useQuestionsStore } from "./store/questions"
import { GameBox } from "./components/GameBox";


function App() {
  const questions = useQuestionsStore(state => state.questions);
  console.log(questions)


  return (
    <main>
      <Flex justify='center' align='center' direction='column' width='100vw' height='100vh'>
        <Flex gap="2" justify='center'>
          <JavaScriptLogo />
          <Heading as="h1" size="9">JavaScript Quiz</Heading>
        </Flex>
        {questions.length === 0 && <Start />}
        {questions.length > 0 && <GameBox />}
      </Flex>

    </main>
  )
}

export default App
