import React, { useState } from 'react';
import { Modal, Divider } from '@material-ui/core';
import { Container, LblTitle, Content, ButtonsView } from './styles';
import useUi from '../../contexts/ui/useUi';
import { TypeAddOpp } from '../../models/opp';
import { TypeInterests } from '../../models/auth';

import FirstPage from './components/FirstPage';

type PropTypes = {
    open: boolean;
    onClose(): void;
};

const Index: React.FC<PropTypes> = ({ open, onClose }) => {
    const { strings } = useUi();

    const [newOpp, setNewOpp] = useState<TypeAddOpp>({
        interests: {
            animals: false,
            arts: false,
            education: false,
            environment: false,
            health: false,
            humanRights: false,
            others: false,
            sports: false,
        },
        description: '',
        address: '',
        name: '',
        requirements: '',
        duration: '',
        period: '',
        photos: [],
    });

    const [images, setImages] = useState<File[]>([]);
    const [page, setPage] = useState<number>(0);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleChange = (key: string, value: string | TypeInterests) => {
        setNewOpp({
            ...newOpp,
            [key]: value,
        });
    };

    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <Container>
                <LblTitle>{strings.createOpportunity}</LblTitle>
                <Divider />
                <Content>
                    {page === 0 && (
                        <FirstPage
                            description={newOpp.description}
                            errors={errors}
                            handleChange={handleChange}
                            images={images}
                            name={newOpp.name}
                            requirements={newOpp.requirements}
                        />
                    )}
                </Content>
                <ButtonsView />
            </Container>
        </Modal>
    );
};

export default Index;
