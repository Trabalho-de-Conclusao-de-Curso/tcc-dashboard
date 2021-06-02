import React, { useState } from 'react';
import ImageUploader from 'react-images-upload';
import styled from 'styled-components';
import { TextField } from '@material-ui/core';
import useUi from '../../../contexts/ui/useUi';

type PropTypes = {
    handleChange: (key: string, value: string) => void;
    name: string;
    description: string;
    requirements: string;
    images: File[];
    errors: { [key: string]: string };
};

const Container = styled.div`
    width: 100%;
`;
const TextInput = styled(TextField)`
    width: 100%;
    margin-top: 20px;
`;

const FirstPage: React.FC<PropTypes> = ({
    handleChange,
    name,
    description,
    requirements,
    images,
    errors,
}) => {
    const { strings } = useUi();

    return (
        <Container>
            <TextInput
                variant="outlined"
                label={strings.name}
                value={name}
                onChange={({ target: { value } }) =>
                    handleChange('name', value)
                }
                error={errors.name !== undefined}
                helperText={errors.name}
            />
            <TextInput
                variant="outlined"
                label={strings.description}
                value={description}
                onChange={({ target: { value } }) =>
                    handleChange('description', value)
                }
                error={errors.description !== undefined}
                helperText={errors.description}
                multiline
                rows={4}
            />
            <TextInput
                variant="outlined"
                label={strings.requirements}
                value={requirements}
                onChange={({ target: { value } }) =>
                    handleChange('requirements', value)
                }
                error={errors.requirements !== undefined}
                helperText={errors.requirements}
                multiline
                rows={4}
            />

            <ImageUploader
                withIcon={true}
                onChange={() => {}}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
        </Container>
    );
};

export default FirstPage;
