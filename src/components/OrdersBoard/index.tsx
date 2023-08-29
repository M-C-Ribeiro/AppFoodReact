import { Container, Board } from "./styles"

interface OrdersBoardProps {
    icone: string;
    servico: string;
}


export function OrdersContainer({icone, servico}:OrdersBoardProps ) {
    return (
        <>
            <Board>
                <header>
                    <span>{ icone }</span>
                    <strong>{ servico }</strong>
                    <span>1</span>
                </header>
                <Container>
                    <button type="button">
                        <strong> Mesa 2</strong>
                        <span> itens 2</span>
                    </button>                    
                </Container>
            </Board>
            </>     
    )
}                