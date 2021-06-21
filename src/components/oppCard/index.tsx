import React from 'react';
import { Divider } from '@material-ui/core';
import {
    Favorite as FavIcon,
    Star as StarIcon,
    Group as GroupIcon,
} from '@material-ui/icons';

import { TypeOpp } from '../../models/opp';
import {
    Container,
    OppImg,
    Content,
    StatusItem,
    StatusView,
    LblStatus,
    LblName,
    LblDescription,
    BtnEdit,
} from './styles';
import useUi from '../../contexts/ui/useUi';

type PropsType = {
    opp: TypeOpp;
    onClick?: () => void;
};

const Index: React.FC<PropsType> = ({ opp, onClick }) => {
    const { theme, strings } = useUi();
    return (
        <Container>
            <OppImg src={opp.photos[0]} />
            <Content>
                <StatusView>
                    <StatusItem>
                        <FavIcon style={{ color: theme.colors.secondary }} />
                        <LblStatus>{opp.likes.length}</LblStatus>
                    </StatusItem>
                    <StatusItem>
                        <StarIcon style={{ color: theme.colors.rating }} />
                        <LblStatus>{opp.rating}</LblStatus>
                    </StatusItem>
                    <StatusItem>
                        <GroupIcon style={{ color: theme.colors.font.light }} />
                        <LblStatus>{opp.usersRegistered.length}</LblStatus>
                    </StatusItem>
                </StatusView>
                <Divider />
                <LblName>{opp.name}</LblName>
                <LblDescription>{opp.description}</LblDescription>
                <BtnEdit variant="outlined" color="primary" onClick={onClick}>
                    {strings.seeDetails}
                </BtnEdit>
            </Content>
        </Container>
    );
};

export default Index;
