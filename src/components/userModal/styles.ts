import styled from 'styled-components';
import { Paper, Typography } from '@material-ui/core';

export const Container = styled(Paper)`
    width: 30vw;
    height: 80vh;
    padding-top: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${props => props.theme.colors.background};
`;

export const Content = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    //overflow-y: scroll;
`;

export const UserImg = styled.img`
    width: 127px;
    height: 127px;
    border-radius: 100px;
    border-width: 3px;
    border-color: ${props => props.theme.colors.primary};
    align-self: center;
`;

export const LblName = styled(Typography)`
    font-family: Roboto Mono;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    color: ${props => props.theme.colors.font.darker};
    align-self: center;
    margin-top: 18px;
`;

export const LblEmail = styled(Typography)`
    font-family: Roboto Mono;
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 20px;
    color: ${props => props.theme.colors.font.main};
    align-self: center;
`;

export const Divider = styled.div`
    width: 80%;
    height: 0.5px;
    background-color: ${props => props.theme.colors.font.main};
    align-self: center;
    margin-top: 3px;
`;

export const LblSexNat = styled(Typography)`
    font-family: Roboto Mono;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 18px;
    margin-top: 2px;
    color: ${props => props.theme.colors.font.main};
    align-self: center;
`;

export const LblDescription = styled(Typography)`
    width: 80%;
    font-family: Roboto Mono;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 20px;
    text-align: center;
    color: ${props => props.theme.colors.font.darker};
    align-self: center;
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const SectionView = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 10px;
    background-color: ${props => props.theme.colors.section};
    margin-top: 10px;
    align-self: center;
`;

export const LblSectionTitle = styled(Typography)`
    font-family: Roboto Mono;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    align-self: center;
    margin-bottom: 20px;
    color: ${props => props.theme.colors.font.darker};
`;

export const LblSectionContent = styled(Typography)`
    font-family: Roboto Mono;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 20px;
    flex: 1;
    text-align: center;
    color: ${props => props.theme.colors.font.main};
`;

export const LblSectionContentBold = styled(Typography)`
    font-family: Roboto Mono;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: ${props => props.theme.colors.font.main};
`;
