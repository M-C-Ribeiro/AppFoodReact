import { Container } from "./styles";
import { OrdersContainer } from "../OrdersBoard/index";

export function Orders() {    
    return (
        <Container>    
            <OrdersContainer
             icone="⏰" 
             servico="Fila de Espera" />
            <OrdersContainer 
            icone="👨🍲" 
            servico="Preparando" />
            <OrdersContainer 
            icone="😋" 
            servico="Pronto" />
        </Container>
    )
}