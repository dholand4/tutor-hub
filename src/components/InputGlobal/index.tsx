import { memo } from 'react';
import { Container, ContainerInput, Input, TitleInput } from './styles';

interface Props {
    title?: string;
    action?: () => void;
}

function InputGlobal({ title, action }: Props) {
    return (
        <Container>
            <ContainerInput>
                <TitleInput>{title}</TitleInput>
            </ContainerInput>
            <Input></Input>
        </Container>
    );
}

export default memo(InputGlobal);
