import styled from 'styled-components';
import { Typography } from '@material-ui/core';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 138px;
    height: 138px;
    background: ${props => props.theme.colors.section};
    box-shadow: 0px 3px 6px #cfcccc;
    border-radius: 10px;
    align-items: center;
    padding: 6px;
    margin-bottom: 20px;
    justify-content: space-around;
    cursor: pointer;
`;

export const Image = styled.img`
    width: 63px;
    height: 63px;
`;

export const Label = styled(Typography)`
    width: 90%;
    text-align: center;
    font-family: Roboto Mono;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 21px;
    color: ${props => props.theme.colors.font.main};
`;
