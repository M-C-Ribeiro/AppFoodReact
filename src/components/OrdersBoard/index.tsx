import { Container, Board } from "./styles"

export function OrdersContainer(props: any) {
    return (
        <>
            <Board>
                <header>
                    <span>props.icone</span>
                    <strong>props.servico</strong>
                    <span>props.ordem</span>
                </header>
                <Container>
                    <button type="button">
                        <strong>props.mesa</strong>
                        <span>props.itens</span>
                    </button>                    
                </Container>
            </Board>
            </>     
    )
}                