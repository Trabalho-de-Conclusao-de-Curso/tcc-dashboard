import React from 'react';
import useUi from '../../contexts/ui/useUi';
import { TypeUser } from '../../models/auth';

import InterestsSection from '../interestsSection';

import {
    Container,
    OrgImg,
    Carousel,
    LblName,
    LblDescription,
    SectionView,
    LblSectionTitle,
    LblSectionContent,
} from './styles';

type TypeProps = {
    item: TypeUser;
};

const InAppView: React.FC<TypeProps> = ({ item }) => {
    const { strings } = useUi();
    return (
        <Container>
            <OrgImg src={item.logo} />
            <LblName>{item.name}</LblName>
            {item.description && (
                <LblDescription>{item.description}</LblDescription>
            )}
            {item.photos && <Carousel src={item.photos[0]} />}
            {item.interests && <InterestsSection interests={item.interests} />}
            {item.address && (
                <SectionView>
                    <LblSectionTitle>{strings.address}</LblSectionTitle>
                    <LblSectionContent>{item.address}</LblSectionContent>
                </SectionView>
            )}
            {item.email && (
                <SectionView>
                    <LblSectionTitle>{strings.email}</LblSectionTitle>
                    <LblSectionContent>{item.email}</LblSectionContent>
                </SectionView>
            )}
            {item.phone && (
                <SectionView>
                    <LblSectionTitle>{strings.phone}</LblSectionTitle>
                    <LblSectionContent>{item.phone}</LblSectionContent>
                </SectionView>
            )}
        </Container>
    );
};

export default InAppView;
