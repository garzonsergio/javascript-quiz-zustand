import { RadioGroup, Heading, Flex } from "@radix-ui/themes"
import { useQuestionsStore } from "../store/questions"
import { mint } from '@radix-ui/colors'

export const GameBox = () => {
    const questions = useQuestionsStore(state => state.questions);

    return (

        <Flex direction="column" justify='center' align='center'
            style={{ padding: '24px', border: `1px solid ${mint.mint12}` }}>
            <Heading as="h3" >{questions[0].question}</Heading>
            <RadioGroup.Root name={`Question ${questions[0].id}`} variant='surface'>
                {
                    questions[0].options.map((option, index) =>
                        <RadioGroup.Item key={index} value={option} >
                            {option}
                        </RadioGroup.Item>
                    )
                }
            </RadioGroup.Root>
        </Flex>

    )
}