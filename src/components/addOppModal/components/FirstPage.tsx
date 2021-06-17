import React from 'react';
import ImageUploader from 'react-images-upload';
import styled from 'styled-components';
import { TextField, Typography } from '@material-ui/core';
import useUi from '../../../contexts/ui/useUi';

type PropTypes = {
    handleChange: (key: string, value: string) => void;
    name: string;
    description: string;
    requirements: string;
    images: File[];
    errors: { [key: string]: string };
    handleImages: (images: File[]) => void;
};

const Container = styled.div`
    width: 100%;
`;

const TextInput = styled(TextField)`
    width: 100%;
    margin-top: 20px;
`;

const LblError = styled(Typography)`
    font-family: Roboto Mono;
    font-style: normal;
    color: ${props => props.theme.colors.secondary};
`;

const FirstPage: React.FC<PropTypes> = ({
    handleChange,
    name,
    description,
    requirements,
    images,
    errors,
    handleImages,
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
                withPreview
                buttonText={strings.addImages}
                buttonStyles={{
                    visibility: images.length === 3 ? 'hidden' : 'visible',
                }}
                onChange={files =>
                    images.length <= 3 ? handleImages(files) : {}
                }
                imgExtension={['.jpg', 'jpeg', '.png']}
                maxFileSize={5242880}
                withLabel={false}
                withIcon={false}
            />
            {errors.images && <LblError>{errors.images}</LblError>}
        </Container>
    );
};

export default FirstPage;
