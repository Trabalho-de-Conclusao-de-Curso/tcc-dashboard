import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Add as AddIcon } from '@material-ui/icons';
import useData from '../../contexts/data/useData';

import AuthLayout from '../../layouts/authLyt';
import OppCard from '../../components/oppCard';
import AddOppModal from '../../components/addOppModal';

import { Container, CardGrid, AddButton } from './styles';
import { TypeOpp } from '../../models/opp';

const Index: React.FC = () => {
    const { loadOpps, opps, setOpp } = useData();
    const navigate = useNavigate();
    const [addModal, setAddModal] = useState<boolean>(false);

    useEffect(() => {
        loadOpps();
    }, [loadOpps]);

    const handleClick = (opp: TypeOpp) => {
        setOpp({ ...opp, registrations: [] });
        navigate(`/opportunity/${opp.id}`);
    };

    return (
        <AuthLayout>
            <AddOppModal open={addModal} onClose={() => setAddModal(false)} />
            <Container container direction="row" justify="center">
                {opps.map((opp, index) => (
                    <CardGrid item md={7} key={index}>
                        <OppCard opp={opp} onClick={() => handleClick(opp)} />
                    </CardGrid>
                ))}
            </Container>
            <AddButton
                color="primary"
                aria-label="add"
                onClick={() => setAddModal(true)}
            >
                <AddIcon />
            </AddButton>
        </AuthLayout>
    );
};

export default Index;
