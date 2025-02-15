import { Button } from "@radix-ui/themes";

export function Start() {
    return (
        <>
            <Button variant="soft" onClick={() => {console.log("1") }}>Iniciar</Button>
        </>
    )
}