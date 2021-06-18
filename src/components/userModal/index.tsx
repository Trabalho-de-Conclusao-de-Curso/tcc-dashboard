import React from 'react';
import { Modal } from '@material-ui/core';

import {
    Container,
    Content,
    UserImg,
    LblName,
    LblEmail,
    Divider,
    LblSexNat,
    LblDescription,
    SectionView,
    LblSectionTitle,
    LblSectionContent,
    LblSectionContentBold,
} from './styles';

import InterestsSection from '../interestsSection';

import useUi from '../../contexts/ui/useUi';
import { TypeUser } from '../../models/opp';

type TypeProps = {
    open: boolean;
    onClose: () => void;
    user: TypeUser | null;
    loading: boolean;
};

const UserModal: React.FC<TypeProps> = ({ open, onClose, user, loading }) => {
    const { strings } = useUi();

    return (
        <Modal open={open} onClose={onClose}>
            <Container>
                {loading || !user ? (
                    <h6>Carregando...</h6>
                ) : (
                    <Content>
                        <UserImg src={user.photo} />
                        <LblName>{user.name}</LblName>
                        <LblEmail>{user.email}</LblEmail>
                        <Divider />
                        {(user.gender !== '' || user.nationality !== '') && (
                            <LblSexNat>
                                {`${user.gender}${
                                    user.gender !== '' &&
                                    user.nationality !== ''
                                        ? ', '
                                        : ''
                                }${user.nationality}`}
                            </LblSexNat>
                        )}
                        {user.presentation !== '' && (
                            <LblDescription>{user.presentation}</LblDescription>
                        )}
                        <InterestsSection interests={user.interests} />
                        {user.languages.length > 0 && (
                            <SectionView>
                                <LblSectionTitle>
                                    {strings.languages}
                                </LblSectionTitle>
                                <LblSectionContent>
                                    {user.languages.map((item, index) =>
                                        index === user.languages.length - 1
                                            ? item
                                            : `${item}, `
                                    )}
                                </LblSectionContent>
                            </SectionView>
                        )}

                        {user.institution !== '' && user.course !== '' && (
                            <SectionView>
                                <LblSectionTitle>
                                    {strings.formation}
                                </LblSectionTitle>
                                <LblSectionContentBold>
                                    {user.institution}
                                </LblSectionContentBold>
                                <LblSectionContent>
                                    {user.course}
                                </LblSectionContent>
                            </SectionView>
                        )}

                        {user.email !== '' && (
                            <SectionView>
                                <LblSectionTitle>
                                    {strings.email}
                                </LblSectionTitle>
                                <LblSectionContent>
                                    {user.email}
                                </LblSectionContent>
                            </SectionView>
                        )}
                    </Content>
                )}
            </Container>
        </Modal>
    );
};

export default UserModal;
