import React, { useState } from 'react';
import { Modal, Divider } from '@material-ui/core';
import { Container, LblTitle, Content, ButtonsView, Btn } from './styles';

import { TypeAddOpp } from '../../models/opp';
import { TypeInterests } from '../../models/auth';

import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';
import ThirdPage from './components/ThirdPage';

import useUi from '../../contexts/ui/useUi';
import useData from '../../contexts/data/useData';

type PropTypes = {
    open: boolean;
    onClose(): void;
};

const Index: React.FC<PropTypes> = ({ open, onClose }) => {
    const { strings } = useUi();
    const { addOpp, loadOpps } = useData();

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

    const [loading, setLoading] = useState(false);
    const [images, setImages] = useState<File[]>([]);
    const [page, setPage] = useState<number>(0);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleChange = (key: string, value: string | TypeInterests) => {
        setNewOpp({
            ...newOpp,
            [key]: value,
        });
    };

    const handleFinish = async () => {
        setLoading(true);
        const res = await addOpp(newOpp, images);

        if (res)
            setNewOpp({
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

        setLoading(false);
        onClose();
        loadOpps();
        setPage(0);
    };

    const handleNext = () => {
        const mErros: { [key: string]: string } = {};

        switch (page) {
            default: {
                if (newOpp.description.length === 0)
                    mErros.description = strings.mustNotBeEmpty;
                if (newOpp.name.length === 0)
                    mErros.name = strings.mustNotBeEmpty;
                if (newOpp.requirements.length === 0)
                    mErros.requirements = strings.mustNotBeEmpty;
                if (images.length === 0)
                    mErros.images = strings.mustSelectOneImg;
                break;
            }
            case 1: {
                let hasSelected = false;
                const intKeys = Object.keys(newOpp.interests);

                intKeys.forEach(key => {
                    if (newOpp.interests[key]) hasSelected = true;
                });

                if (!hasSelected) mErros.interests = strings.mustSelectOneInt;
                break;
            }
            case 2: {
                if (newOpp.period.length === 0)
                    mErros.period = strings.mustNotBeEmpty;
                if (newOpp.duration.length === 0)
                    mErros.duration = strings.mustNotBeEmpty;
                if (newOpp.address.length === 0)
                    mErros.address = strings.mustNotBeEmpty;
                break;
            }
        }

        if (Object.keys(mErros).length > 0) {
            setErrors(mErros);
            return;
        }

        if (page < 2) {
            setPage(page + 1);
        } else if (page === 2) handleFinish();
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
                            handleImages={setImages}
                        />
                    )}
                    {page === 1 && (
                        <SecondPage
                            handleChange={interests =>
                                handleChange('interests', interests)
                            }
                            error={errors.interests}
                            interests={newOpp.interests}
                        />
                    )}
                    {page === 2 && (
                        <ThirdPage
                            handleChange={handleChange}
                            period={newOpp.period}
                            duration={newOpp.duration}
                            address={newOpp.address}
                            errors={errors}
                        />
                    )}
                </Content>
                <ButtonsView>
                    <Btn
                        color="secondary"
                        variant="outlined"
                        onClick={onClose}
                        disabled={loading}
                    >
                        {strings.cancel}
                    </Btn>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        {page !== 0 && (
                            <Btn
                                color="secondary"
                                variant="outlined"
                                onClick={() => {
                                    if (page > 0) setPage(page - 1);
                                }}
                                disabled={loading}
                            >
                                {strings.previous}
                            </Btn>
                        )}
                        <div style={{ width: 10 }} />
                        <Btn
                            color="primary"
                            variant="contained"
                            onClick={handleNext}
                            disabled={loading}
                        >
                            {page === 2 ? strings.finish : strings.continue}
                        </Btn>
                    </div>
                </ButtonsView>
            </Container>
        </Modal>
    );
};

export default Index;
