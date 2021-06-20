import styled from 'styled-components';
import { Typography } from '@material-ui/core';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    padding-bottom: 10px;
    border: 1px solid #c4c4c4;
    box-sizing: border-box;
    border-radius: 10px;
    background-color: ${props => props.theme.colors.background};
`;

export const Carousel = styled.img`
    width: 95%;
    margin-top: 20px;
    align-self: center;
`;

export const OrgImg = styled.img`
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
    font-size: 28px;
    line-height: 37px;
    letter-spacing: 0.2px;
    align-self: center;
    margin-top: 10px;
    margin-bottom: 20px;
    text-align: center;
    color: ${props => props.theme.colors.font.darker};
`;

export const LblDescription = styled(Typography)`
    width: 80%;
    font-family: Roboto Mono;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 20px;
    align-self: center;
    text-align: center;
    margin-bottom: 20px;
    color: ${props => props.theme.colors.font.darker};
`;

export const SectionView = styled.div`
    display: flex;
    margin-top: 10px;
    flex-direction: column;
    padding: 20px;
    align-items: center;
    background-color: ${props => props.theme.colors.section};
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
