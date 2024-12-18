import { memo } from 'react';
import { Button, ButtonText } from './styles';

interface Props {
    title: string;
    action?: () => void;
}

function ButtonGlobal({ title, action }: Props) {
    return (
        <Button onClick={action}>
            <ButtonText>{title}</ButtonText>
        </Button>
    );
}

export default memo(ButtonGlobal);
