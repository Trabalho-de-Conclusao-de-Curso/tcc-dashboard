import styled from 'styled-components';
import { Paper, Typography, TextField, Button } from '@material-ui/core';

export const Container = styled(Paper)`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 10px;
`;

export const LblTitle = styled(Typography)`
    font-family: Roboto Mono;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 140.62%;
    color: ${props => props.theme.colors.font.light};
`;

export const Divider = styled.div`
    width: 100%;
    height: 0.5px;
    background-color: ${props => props.theme.colors.font.main};
    align-self: center;
    margin-top: 3px;
    margin-bottom: 10px;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const OrgImg = styled.img`
    width: 45px;
    height: 45px;
    border-radius: 100px;
    border-width: 1px solid;
    border-color: ${props => props.theme.colors.primary};
`;

export const LblHint = styled(Typography)`
    font-family: Roboto Mono;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 140.62%;
    color: ${props => props.theme.colors.font.light};
    margin-left: 10px;
`;

export const TextInput = styled(TextField)`
    font-family: Roboto Mono;
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 140.62%;
    color: ${props => props.theme.colors.font.main};
    margin-top: 10px;
    margin-bottom: 10px;
    flex: 1;
`;

export const BtnsView = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const BtnAddImg = styled(Button)`
    width: 200px;
    color: ${props => props.theme.colors.secondary};
    border-color: ${props => props.theme.colors.secondary};
`;

export const Btn = styled(Button)`
    width: 200px;
`;
