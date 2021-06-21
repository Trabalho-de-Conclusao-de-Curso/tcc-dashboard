import styled from 'styled-components';
import { Paper, Typography, Button } from '@material-ui/core';

export const Container = styled(Paper)`
    width: 100%;
    height: 250px;
    display: flex;
    flex-direction: row;
`;

export const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 10px;
`;

export const StatusView = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    justify-content: space-around;
`;

export const StatusItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const LblStatus = styled(Typography)`
    font-family: Roboto Mono;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 140.62%;
    margin-left: 6px;
`;

export const OppImg = styled.img`
    height: 250px;
    width: 250px;
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
`;

export const LblName = styled(Typography)`
    font-family: Roboto Mono;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 140.62%;
    color: ${props => props.theme.colors.font.darker};
    margin-top: 10px;
`;

export const LblDescription = styled(Typography)`
    flex: 1;
    margin-top: 10px;
    font-family: Roboto Mono;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 140.62%;
    color: ${props => props.theme.colors.font.main};
`;

export const BtnEdit = styled(Button)`
    width: 150px;
    margin-top: 10px;
`;
