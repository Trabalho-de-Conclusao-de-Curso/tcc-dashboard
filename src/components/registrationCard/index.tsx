import React from 'react';

import { TypeRegistration } from '../../models/opp';

import {
    Container,
    Header,
    UserImg,
    LblName,
    LblPresentation,
    ButtonsView,
    ActButton,
} from './styles';

import useUi from '../../contexts/ui/useUi';

type TypeProps = {
    registration: TypeRegistration;
    onSeeProfile: () => void;
    onSelect: () => void;
};

const RegistrationCard: React.FC<TypeProps> = ({
    registration,
    onSelect,
    onSeeProfile,
}) => {
    const { strings } = useUi();

    return (
        <Container>
            <Header>
                <UserImg src={registration.userPhoto} />
                <LblName>{registration.userName}</LblName>
            </Header>
            <LblPresentation>{registration.presentation}</LblPresentation>
            <ButtonsView>
                <ActButton variant="outlined" onClick={onSeeProfile}>
                    Ver Perfil
                </ActButton>
                <ActButton
                    variant="contained"
                    color="primary"
                    disabled={registration.selected}
                    onClick={onSelect}
                >
                    Selecionar
                </ActButton>
            </ButtonsView>
        </Container>
    );
};

export default RegistrationCard;
