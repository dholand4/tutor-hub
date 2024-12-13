import ButtonGlobal from '../../components/ButtonGlobal';
import { Container, Form, Title } from './styles';

const Hub = () => {
    return (
        <Container>
            <Form>
                <Title>Serviços do Tutor</Title>
                <ButtonGlobal title='Mensagens em Massa' />
                <ButtonGlobal title='Gerador de Mensagens' />
                <ButtonGlobal title='Conversor de Contatos' />
                <ButtonGlobal title='Calculadora de Notas' />
            </Form>
        </Container>
    );
};

export default Hub;
