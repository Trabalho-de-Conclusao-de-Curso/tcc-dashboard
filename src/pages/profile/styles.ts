import styled from 'styled-components';
import { Grid, TextField, Button, Typography } from '@material-ui/core';

export const Container = styled(Grid)``;

export const TextInput = styled(TextField)`
    width: 100%;
    margin-top: 20px;
`;

export const UserLogoView = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const UserLogo = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 100px;
    border-width: 3px;
    border-color: ${props => props.theme.colors.primary};
    align-self: center;
    margin-right: 10px;
`;

export const SaveView = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const PrimaryBtn = styled(Button)`
    width: 200px;
`;

export const SecondaryBtn = styled(Button)`
    width: 200px;
    color: ${props => props.theme.colors.secondary};
    border-color: ${props => props.theme.colors.secondary};
`;

export const LblError = styled(Typography)`
    font-family: Roboto Mono;
    font-style: normal;
    color: ${props => props.theme.colors.secondary};
`;
