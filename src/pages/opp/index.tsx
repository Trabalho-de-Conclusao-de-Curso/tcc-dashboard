import React from 'react';
import InAppView from '../../components/inAppView';
import useData from '../../contexts/data/useData';

import AuthLayout from '../../layouts/authLyt';
import { Container, OppContainer } from './styles';

const Index: React.FC = () => {
    const { opp } = useData();
    return (
        <AuthLayout>
            <Container container spacing={2}>
                <OppContainer item md={4}>
                    <InAppView item={opp!} />
                </OppContainer>
            </Container>
        </AuthLayout>
    );
};

export default Index;
