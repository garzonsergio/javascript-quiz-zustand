import { Button } from "@radix-ui/themes";
import { useQuestionsStore } from "../store/questions";

export function Start() {
    const fetchQuestions = useQuestionsStore(state => state.fetchQuestions);


    const handleClick = () => {
        fetchQuestions(10);
    }
    return (
        <>
            <Button
                variant="soft"
                onClick={handleClick}
                style={{ maxWidth: "fit-content" }}>
                Iniciar
            </Button>
        </>
    )
} 