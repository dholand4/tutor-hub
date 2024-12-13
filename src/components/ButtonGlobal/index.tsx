import { memo } from 'react';
import { Button, ButtonText } from './styles';

interface Props {
    title: string;
    action?: () => void;
}


function ButtonGlobal({ title }: Props) {
    return (
        <Button>
            <ButtonText>{title}</ButtonText>
        </Button>
    )
}

export default memo(ButtonGlobal);