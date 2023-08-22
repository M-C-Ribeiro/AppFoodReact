import { Container, Board } from "./styles"

export function OrdersContainer() {
    return (
        <>
            <Board>
                <header>
                    <span>⏰</span>
                    <strong>Fila de Espera</strong>
                    <span>(1)</span>
                </header>
                <Container>

                    <button type="button">
                        <strong>Mesa 2:</strong>
                        <span>2 itens</span>
                    </button>
                    <button type="button">
                        <strong>Mesa 2:</strong>
                        <span>2 itens</span>
                    </button>
                </Container>
            </Board>
            <Board>
                    <header>
                        <span>⏰</span>
                        <strong>Fila de Espera</strong>
                        <span>(1)</span>
                    </header>
                    <Container>
                        <button type="button">
                            <strong>Mesa 2:</strong>
                            <span>2 itens</span>
                        </button>
                        <button type="button">
                            <strong>Mesa 2:</strong>
                            <span>2 itens</span>
                        </button>
                    </Container>
                </Board>
                <Board>
                    <header>
                        <span>⏰</span>
                        <strong>Fila de Espera</strong>
                        <span>(1)</span>
                    </header>
                    <Container>
                        <button type="button">
                            <strong>Mesa 2:</strong>
                            <span>2 itens</span>
                        </button>
                        <button type="button">
                            <strong>Mesa 2:</strong>
                            <span>2 itens</span>
                        </button>
                    </Container>
                </Board>
            </>
        
    )
}                