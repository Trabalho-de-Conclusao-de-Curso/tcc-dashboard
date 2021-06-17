import styled from 'styled-components';
import { Typography, Paper, Button } from '@material-ui/core';

export const Container = styled(Paper)`
    width: 50vw;
    height: 60vh;
    padding: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${props => props.theme.colors.background};
    display: flex;
    flex-direction: column;
`;

export const Content = styled.div`
    flex: 1;
    overflow-y: scroll;
`;

export const ButtonsView = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-direction: row;
`;

export const Btn = styled(Button)`
    width: 100px;
`;

export const LblTitle = styled(Typography)`
    font-family: Roboto Mono;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 140.62%;
    color: ${props => props.theme.colors.font.darker};
`;
