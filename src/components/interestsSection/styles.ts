import styled from 'styled-components';
import { Typography } from '@material-ui/core';

export const Container = styled.div`
    width: 100%;
    padding: 10px;
    background-color: ${props => props.theme.colors.section};
`;

export const LblHeader = styled(Typography)`
    width: 100%;
    font-family: Roboto Mono;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    color: ${props => props.theme.colors.font.darker};
    text-align: center;
`;

export const RowView = styled.div`
    display: flex;
    width: 100%;
    margin-top: 6px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`;

export const ItemView = styled.div`
    display: flex;
    flex-direction: row;
    padding: 4px;
    align-items: center;
`;

export const IconImg = styled.img`
    width: 40px;
    height: 40px;
`;

export const LblInterest = styled(Typography)`
    font-family: Roboto Mono;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    color: ${props => props.theme.colors.font.light};
    margin-left: 6px;
    text-align: center;
    width: 125px;
`;
