import React from 'react';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import InterestsSelector from '../../interestsSelector';
import useUi from '../../../contexts/ui/useUi';
import { TypeInterests } from '../../../models/auth';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 10px;
`;

const LblTitle = styled(Typography)`
    font-family: Roboto Mono;
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 140.62%;
    color: ${props => props.theme.colors.font.light};
`;

const LblError = styled(Typography)`
    font-family: Roboto Mono;
    font-style: normal;
    color: ${props => props.theme.colors.secondary};
`;

type TypeProps = {
    interests: TypeInterests;
    handleChange(interests: TypeInterests): void;
    error?: string;
};

const SecondPage: React.FC<TypeProps> = ({
    handleChange,
    error,
    interests,
}) => {
    const { strings } = useUi();

    return (
        <Container>
            <LblTitle>{strings.selectInterests}</LblTitle>
            <InterestsSelector
                onInterestsChange={handleChange}
                initialValue={interests}
            />
            {error && <LblError>{error}</LblError>}
        </Container>
    );
};

export default SecondPage;
