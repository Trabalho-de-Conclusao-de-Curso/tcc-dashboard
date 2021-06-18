import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Add as AddIcon } from '@material-ui/icons';
import useData from '../../contexts/data/useData';

import AuthLayout from '../../layouts/authLyt';
import OppCard from '../../components/oppCard';
import AddOppModal from '../../components/addOppModal';

import { Container, CardGrid, AddButton } from './styles';
import { TypeOpp } from '../../models/opp';

const Index: React.FC = () => {
    const { loadOpps, opps, setOpp } = useData();
    const history = useHistory();
    const [addModal, setAddModal] = useState<boolean>(false);

    useEffect(() => {
        loadOpps();
    }, [loadOpps]);

    const handleClick = (opp: TypeOpp) => {
        setOpp({ ...opp, registrations: [] });
        history.push(`/opportunity/${opp.id}`);
    };

    return (
        <AuthLayout>
            <AddOppModal open={addModal} onClose={() => setAddModal(false)} />
            <Container container direction="row" justify="center">
                {opps.map((opp, index) => (
                    <CardGrid item md={9}>
                        <OppCard
                            opp={opp}
                            key={index}
                            onClick={() => handleClick(opp)}
                        />
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
