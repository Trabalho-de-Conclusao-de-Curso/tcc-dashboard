import React, { useState } from 'react';

import { TypeInterests } from '../../models/auth';
import useUi from '../../contexts/ui/useUi';

import {
    Container,
    LblHeader,
    RowView,
    ItemView,
    IconImg,
    LblInterest,
} from './styles';

// Assets
import ball from '../../assets/interests/unselected/Ball.png';
import gradHat from '../../assets/interests/unselected/GradHat.png';
import hand from '../../assets/interests/unselected/Hand.png';
import leaf from '../../assets/interests/unselected/Leaf.png';
import paw from '../../assets/interests/unselected/Paw.png';
import pills from '../../assets/interests/unselected/Pills.png';
import masks from '../../assets/interests/unselected/Masks.png';
import others from '../../assets/interests/unselected/Others.png';

const icons: { [key: string]: string } = {
    sports: ball,
    education: gradHat,
    humanRights: hand,
    environment: leaf,
    animals: paw,
    health: pills,
    arts: masks,
    others,
};

type TypeProps = {
    interests: TypeInterests;
};

const InterestsSection: React.FC<TypeProps> = ({ interests }) => {
    const { strings } = useUi();

    const [keys] = useState<string[]>(Object.keys(interests));

    return (
        <Container>
            <LblHeader>{strings.interests}</LblHeader>
            <RowView>
                {keys.map(
                    (key, index) =>
                        interests[key] && (
                            <ItemView key={index}>
                                <IconImg src={icons[key]} />
                                <LblInterest>{strings[key]}</LblInterest>
                            </ItemView>
                        )
                )}
            </RowView>
        </Container>
    );
};

export default InterestsSection;
