import React from 'react';
import styled from 'styled-components';
import { TextField } from '@material-ui/core';
import useUi from '../../../contexts/ui/useUi';

type TypeProps = {
    handleChange: (key: string, value: string) => void;
    period: string;
    duration: string;
    address: string;
    errors: { [key: string]: string };
};

const Container = styled.div`
    width: 100%;
`;

const TextInput = styled(TextField)`
    width: 100%;
    margin-top: 20px;
`;

const ThirdyPage: React.FC<TypeProps> = ({
    handleChange,
    period,
    duration,
    address,
    errors,
}) => {
    const { strings } = useUi();

    return (
        <Container>
            <TextInput
                variant="outlined"
                label={strings.period}
                value={period}
                onChange={({ target: { value } }) =>
                    handleChange('period', value)
                }
                error={errors.period !== undefined}
                helperText={errors.period}
            />
            <TextInput
                variant="outlined"
                label={strings.duration}
                value={duration}
                onChange={({ target: { value } }) =>
                    handleChange('duration', value)
                }
                error={errors.duration !== undefined}
                helperText={errors.duration}
            />
            <TextInput
                variant="outlined"
                label={strings.address}
                value={address}
                onChange={({ target: { value } }) =>
                    handleChange('address', value)
                }
                error={errors.address !== undefined}
                helperText={errors.address}
            />
        </Container>
    );
};

export default ThirdyPage;
