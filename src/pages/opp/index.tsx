import React, { useEffect, useState } from 'react';

import { TypeUser } from '../../models/opp';
import { registrationsApi } from '../../services';
import useData from '../../contexts/data/useData';

import AuthLayout from '../../layouts/authLyt';
import { Container, OppContainer, RegsContainer } from './styles';

import RegistrationCard from '../../components/registrationCard';
import InAppView from '../../components/inAppView';
import UserModal from '../../components/userModal';

const Index: React.FC = () => {
    const { opp, loadRegistrations } = useData();

    const [userModal, setUserModal] = useState<boolean>(false);
    const [user, setUser] = useState<TypeUser | null>(null);
    const [loadingUser, setLoadingUser] = useState<boolean>(false);

    useEffect(() => {
        loadRegistrations();
    }, []);

    const handleSelect = async (userId: string) => {
        try {
            await registrationsApi.selectUser({
                userId,
                oppId: opp!.id,
            });
            loadRegistrations();
        } catch (err) {
            console.log(err);
        }
    };

    const handleSeeProfile = async (userId: string) => {
        try {
            if (user?.id === userId) {
                setUserModal(true);
                return;
            }

            setLoadingUser(true);
            setUserModal(true);

            const { data } = await registrationsApi.getUser(userId);

            setUser(data);
            setLoadingUser(false);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <AuthLayout>
            <Container container>
                <OppContainer item md={4}>
                    <InAppView item={opp!} />
                </OppContainer>
                <Container item md={4} />
                <RegsContainer item md={4}>
                    {opp!.registrations.map(registration => (
                        <RegistrationCard
                            onSeeProfile={() =>
                                handleSeeProfile(registration.userUid)
                            }
                            onSelect={() => handleSelect(registration.userUid)}
                            key={registration.userUid}
                            registration={registration}
                        />
                    ))}
                </RegsContainer>
            </Container>
            <UserModal
                open={userModal}
                onClose={() => setUserModal(false)}
                user={user}
                loading={loadingUser}
            />
        </AuthLayout>
    );
};

export default Index;
