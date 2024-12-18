import { useNavigate } from 'react-router-dom';
import ButtonGlobal from '../../components/ButtonGlobal';
import { Container, Form, Title } from './styles';

function Hub() {
    const navigate = useNavigate();
    return (
        <Container>
            <Form>
                <Title>Serviços do Tutor</Title>
                <ButtonGlobal
                    title="Mensagens em Massa"
                    action={() => navigate('/bulkWhatsapp')}
                />
                <ButtonGlobal
                    title="Gerador de Mensagens"
                    action={() => navigate('/geradorMensagens')}
                />
                <ButtonGlobal
                    title="Conversor de Contatos"
                    action={() => navigate('/conversorContatos')}
                />
                <ButtonGlobal
                    title="Calculadora de Notas"
                    action={() => navigate('/calculadoraNotas')}
                />
            </Form>
        </Container>
    );
};

export default Hub;
