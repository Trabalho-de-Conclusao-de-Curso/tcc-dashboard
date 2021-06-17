import React from 'react';

import { Container, Image, Label } from './styles';

// Assets
import unBall from '../../assets/interests/unselected/Ball.png';
import unGradHat from '../../assets/interests/unselected/GradHat.png';
import unHand from '../../assets/interests/unselected/Hand.png';
import unLeaf from '../../assets/interests/unselected/Leaf.png';
import unPaw from '../../assets/interests/unselected/Paw.png';
import unPills from '../../assets/interests/unselected/Pills.png';
import unMasks from '../../assets/interests/unselected/Masks.png';
import unOthers from '../../assets/interests/unselected/Others.png';

import seBall from '../../assets/interests/selected/Ball.png';
import seGradHat from '../../assets/interests/selected/GradHat.png';
import seHand from '../../assets/interests/selected/Hand.png';
import seLeaf from '../../assets/interests/selected/Leaf.png';
import sePaw from '../../assets/interests/selected/Paw.png';
import sePills from '../../assets/interests/selected/Pills.png';
import seMasks from '../../assets/interests/selected/Masks.png';
import seOthers from '../../assets/interests/selected/Others.png';

const unselectedIcons: { [key: string]: string } = {
    ball: unBall,
    gradHat: unGradHat,
    hand: unHand,
    leaf: unLeaf,
    paw: unPaw,
    pills: unPills,
    masks: unMasks,
    others: unOthers,
};

const selectedIcons: { [key: string]: string } = {
    ball: seBall,
    gradHat: seGradHat,
    hand: seHand,
    leaf: seLeaf,
    paw: sePaw,
    pills: sePills,
    masks: seMasks,
    others: seOthers,
};

type TypeProps = {
    selected: boolean;
    onPress(): void;
    icon: string;
    label: string;
};

const InterestCard: React.FC<TypeProps> = ({
    selected,
    onPress,
    icon,
    label,
}) => {
    return (
        <Container onClick={onPress}>
            <Image
                src={selected ? selectedIcons[icon] : unselectedIcons[icon]}
            />
            <Label>{label}</Label>
        </Container>
    );
};

export default InterestCard;
