import InputGlobal from '../../components/InputGlobal';
import { Container, DateContainer, LeftSection, MainContainer, OutPut, RightSection, Title } from './styles';


function geradorMensagens() {
    return (
        <Container>
            <MainContainer>
                <LeftSection>
                    <Title>Gerador de Mensagens</Title>
                    <InputGlobal title='Aula' />
                    <InputGlobal title='Tema' />
                    <DateContainer>
                        <InputGlobal title='Abertura' />
                        <InputGlobal title='Encerramento' />
                    </DateContainer>
                </LeftSection>
                <RightSection>
                    <Title>Mensagem Gerada</Title>
                    <OutPut />
                </RightSection>
            </MainContainer>
        </Container>
    )
}

export default geradorMensagens;