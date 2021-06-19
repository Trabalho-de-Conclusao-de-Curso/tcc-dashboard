import styled from 'styled-components';
import { Paper, IconButton, Typography } from '@material-ui/core';

import BackspaceOutlinedIcon from '@material-ui/icons/BackspaceOutlined';
import ThumbUp from '@material-ui/icons/ThumbUp';

export const Container = styled(Paper)`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin-top: 20px;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const HeaderLeft = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const OrgImg = styled.img`
    width: 45px;
    height: 45px;
    border-radius: 100px;
    border-width: 1px solid;
    border-color: ${props => props.theme.colors.primary};
`;

export const LblName = styled(Typography)`
    font-family: Roboto Mono;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 140.62%;
    color: ${props => props.theme.colors.font.light};
    margin-left: 10px;
`;

export const LblDate = styled(Typography)`
    font-family: Roboto Mono;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 140.62%;
    color: ${props => props.theme.colors.font.light};
    margin-left: 10px;
`;

export const DeleteButton = styled(IconButton)``;

export const Divider = styled.div`
    width: 100%;
    height: 0.5px;
    background-color: ${props => props.theme.colors.font.main};
    align-self: center;
    margin-top: 3px;
    margin-bottom: 10px;
`;

export const LblBody = styled(Typography)`
    font-family: Roboto Mono;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 33px;
    color: ${props => props.theme.colors.font.light};
`;

export const Image = styled.img`
    width: 100%;
    height: 300px;
`;

export const DeleteIcon = styled(BackspaceOutlinedIcon)`
    color: ${props => props.theme.colors.secondary};
`;

export const LikesIcon = styled(ThumbUp)`
    color: ${props => props.theme.colors.primary};
    margin-right: 10px;
`;
