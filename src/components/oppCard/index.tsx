import React from 'react';
import { TypeOpp } from '../../models/opp';
import { Container } from './styles';

type PropsType = {
    opp: TypeOpp;
    onClick?: () => void;
};

const Index: React.FC<PropsType> = ({ opp, onClick }) => {
    return (
        <Container>
            <h1>{opp.name}</h1>
        </Container>
    );
};

export default Index;
