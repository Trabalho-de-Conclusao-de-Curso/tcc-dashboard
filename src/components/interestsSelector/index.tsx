import React, { useState, useEffect } from 'react';
import { Container } from './styles';

import { TypeInterests } from '../../models/auth';
import InterestCard from '../interestCard';

import useUi from '../../contexts/ui/useUi';

type TypeProps = {
    onInterestsChange(interests: TypeInterests): void;
    initialValue?: TypeInterests;
};

const InterestsSelector: React.FC<TypeProps> = ({
    onInterestsChange,
    initialValue,
}) => {
    const { strings } = useUi();
    const [interests, setInterests] = useState<TypeInterests>(
        initialValue || {
            animals: false,
            humanRights: false,
            sports: false,
            environment: false,
            health: false,
            education: false,
            arts: false,
            others: false,
        }
    );

    useEffect(() => {
        onInterestsChange(interests);
    }, [interests]);

    return (
        <Container>
            <InterestCard
                icon="paw"
                selected={interests.animals}
                label={strings.animals}
                onPress={() =>
                    setInterests({ ...interests, animals: !interests.animals })
                }
            />
            <InterestCard
                icon="hand"
                selected={interests.humanRights}
                label={strings.humanRights}
                onPress={() =>
                    setInterests({
                        ...interests,
                        humanRights: !interests.humanRights,
                    })
                }
            />
            <InterestCard
                icon="ball"
                selected={interests.sports}
                label={strings.sports}
                onPress={() =>
                    setInterests({ ...interests, sports: !interests.sports })
                }
            />
            <InterestCard
                icon="leaf"
                selected={interests.environment}
                label={strings.environment}
                onPress={() =>
                    setInterests({
                        ...interests,
                        environment: !interests.environment,
                    })
                }
            />
            <InterestCard
                icon="pills"
                selected={interests.health}
                label={strings.health}
                onPress={() =>
                    setInterests({ ...interests, health: !interests.health })
                }
            />
            <InterestCard
                icon="gradHat"
                selected={interests.education}
                label={strings.education}
                onPress={() =>
                    setInterests({
                        ...interests,
                        education: !interests.education,
                    })
                }
            />
            <InterestCard
                icon="masks"
                selected={interests.arts}
                label={strings.arts}
                onPress={() =>
                    setInterests({ ...interests, arts: !interests.arts })
                }
            />
            <InterestCard
                icon="others"
                selected={interests.others}
                label={strings.others}
                onPress={() =>
                    setInterests({
                        ...interests,
                        others: !interests.others,
                    })
                }
            />
        </Container>
    );
};

export default InterestsSelector;
