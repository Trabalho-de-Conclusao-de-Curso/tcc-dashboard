import { Typography, Button, Paper } from '@material-ui/core';
import styled from 'styled-components';

export const Container = styled(Paper)`
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin-bottom: 10px;
    background-color: ${props => props.theme.colors.background};
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 4px;
    align-items: center;
    border-bottom: 1px solid;
    padding-bottom: 3px;
    border-color: ${props => props.theme.colors.font.light};
`;

export const UserImg = styled.img`
    width: 30px;
    height: 30px;
    margin-right: 10px;
    border-radius: 100px;
`;

export const LblName = styled(Typography)`
    font-family: Roboto Mono;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 34px;
    color: ${props => props.theme.colors.font.main};
`;

export const LblPresentation = styled(Typography)`
    flex: 1;
    font-family: Roboto Mono;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    min-height: 110px;
    margin-bottom: 10px;
    color: ${props => props.theme.colors.font.main};
`;

export const ActButton = styled(Button)`
    width: 120px;
`;

export const ButtonsView = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;
