import React, { useEffect } from 'react';
import { Add as AddIcon } from '@material-ui/icons';
import useData from '../../contexts/data/useData';

import AuthLayout from '../../layouts/authLyt';
import OppCard from '../../components/oppCard';

import { Container, CardGrid, AddButton } from './styles';

const Index: React.FC = () => {
    const { loadOpps, opps } = useData();

    useEffect(() => {
        loadOpps();
    }, [loadOpps]);

    return (
        <AuthLayout>
            <Container container direction="row" justify="center">
                {opps.map((opp, index) => (
                    <CardGrid item md={9}>
                        <OppCard opp={opp} key={index} />
                    </CardGrid>
                ))}
            </Container>
            <AddButton color="primary" aria-label="add">
                <AddIcon />
            </AddButton>
        </AuthLayout>
    );
};

export default Index;
