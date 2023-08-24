import { Container } from "./styles";
import { OrdersContainer } from "../OrdersBoard/index";

export function Orders() {    
    return (
        <Container>    
            <OrdersContainer servico="Fila de Espera" icone="⏰" ordem="1" mesa="7" itens="Batata Frita"/>
            <OrdersContainer servico="Preparando" icone="👨🍲" ordem="2" mesa="8" itens="Filé Mignon"/>
            <OrdersContainer servico="Pronto" icone="😋" ordem="2" mesa="9" itens="Purê de Batata"/>
        </Container>
    )
}