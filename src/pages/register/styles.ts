import styled from 'styled-components';
import { Grid, Typography, TextField } from '@material-ui/core';

export const Container = styled(Grid)`
    background-image: linear-gradient(
        to bottom right,
        ${props => props.theme.colors.primary},
        ${props => props.theme.colors.primaryDarker}
    );
    height: 100vh;
`;

export const Content = styled(Grid)`
    background-color: ${props => props.theme.colors.background};
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 40px;
`;

export const LblAccess = styled(Typography)`
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 140.62%;
    color: ${props => props.theme.colors.font.darker};
    margin-bottom: 40px;
`;

export const TextInput = styled(TextField)`
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 140.62%;
    margin-bottom: 20px;
`;

export const SideView = styled(Grid)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const LblWelcome = styled(Typography)`
    font-family: 'Roboto Mono';
    font-style: italic;
    font-weight: normal;
    font-size: 64px;
    line-height: 140.62%;
    color: #ffffff;
`;

export const LblRegister = styled(Typography)`
    font-family: Roboto Mono;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 140.62%;
    color: #ffffff;
`;

export const Link = styled.a`
    font-family: Roboto Mono;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 140.62%;
    color: #ffffff;
`;

export const LblError = styled(Typography)`
    font-family: Roboto Mono;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: ${props => props.theme.colors.secondary};
`;
