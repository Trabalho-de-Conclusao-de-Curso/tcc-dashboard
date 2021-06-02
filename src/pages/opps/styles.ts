import styled from 'styled-components';
import { Grid, Fab } from '@material-ui/core';

export const Container = styled(Grid)`
    overflow-y: scroll;
`;

export const CardGrid = styled(Grid)`
    padding: 10px;
`;

export const AddButton = styled(Fab)`
    position: absolute;
    bottom: 30px;
    right: 30px;
`;
