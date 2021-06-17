import React from 'react';
import useUi from '../../contexts/ui/useUi';

import { TypeUser } from '../../models/auth';
import { TypeOpp } from '../../models/opp';

import InterestsSection from '../interestsSection';

import {
    Container,
    Carousel,
    LblName,
    LblDescription,
    SectionView,
    LblSectionTitle,
    LblSectionContent,
} from './styles';

type TypeProps = {
    item: TypeOpp;
};

const InAppView: React.FC<TypeProps> = ({ item }) => {
    const { strings } = useUi();
    return (
        <Container>
            <Carousel src={item.photos[0]} />
            <LblName>{item.name}</LblName>
            <LblDescription>{item.description}</LblDescription>
            <InterestsSection interests={item.interests} />
            {item.requirements && (
                <SectionView>
                    <LblSectionTitle>{strings.requirements}</LblSectionTitle>
                    <LblSectionContent>{item.requirements}</LblSectionContent>
                </SectionView>
            )}
            {item.address && (
                <SectionView>
                    <LblSectionTitle>{strings.address}</LblSectionTitle>
                    <LblSectionContent>{item.address}</LblSectionContent>
                </SectionView>
            )}
            {item.period && item.duration && (
                <SectionView>
                    <LblSectionTitle>
                        {strings.periodAndDuration}
                    </LblSectionTitle>
                    <LblSectionContent>{item.period}</LblSectionContent>
                    <LblSectionContent>{item.duration}</LblSectionContent>
                </SectionView>
            )}
        </Container>
    );
};

export default InAppView;
