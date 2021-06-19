import React, { useRef, useState } from 'react';

import {
    Container,
    Header,
    LblTitle,
    TextInput,
    BtnsView,
    Btn,
    BtnAddImg,
    Divider,
    LblHint,
    OrgImg,
} from './styles';

import useAuth from '../../contexts/auth/useAuth';
import useUi from '../../contexts/ui/useUi';
import { TypePostReq } from '../../models/post';
import useData from '../../contexts/data/useData';

const AddPostCard: React.FC = () => {
    const { strings } = useUi();
    const { user } = useAuth();
    const { addPost, loadPosts } = useData();

    const [body, setBody] = useState('');
    const [image, setImage] = useState<File | null>(null);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [loading, setLoading] = useState(false);

    const imageInpt = useRef<HTMLInputElement>(null);

    const handleSubmit = async () => {
        const mErrors: { [key: string]: string } = {};
        if (body.trim().length === 0) mErrors.body = strings.mustNotBeEmpty;

        setErrors(mErrors);
        if (Object.keys(mErrors).length > 0) return;

        setLoading(true);

        const req: TypePostReq = {
            body,
            orgLogo: user!.logo,
            orgName: user!.name,
        };

        await addPost(req, image);

        setBody('');
        setImage(null);
        setLoading(false);
        loadPosts(user!.id);
    };

    return (
        <Container>
            <LblTitle>{strings.addPost}</LblTitle>
            <Divider />
            <Header>
                <OrgImg src={user!.logo} />
                <LblHint>{strings.postHint}</LblHint>
            </Header>
            <TextInput
                variant="outlined"
                multiline
                rows={6}
                value={body}
                onChange={({ target: { value } }) => setBody(value)}
                error={errors.body !== undefined}
                helperText={errors.body}
                placeholder={strings.typeSomething}
            />
            {image && <p>{image.name}</p>}
            <BtnsView>
                <input
                    name="img-input"
                    accept="image/png, image/jpeg"
                    style={{ display: 'none' }}
                    type="file"
                    onChange={({ target: { files } }) =>
                        setImage(files ? files[0] : null)
                    }
                    ref={imageInpt}
                />
                <label htmlFor="img-input">
                    <BtnAddImg
                        onClick={e =>
                            imageInpt.current && imageInpt.current.click()
                        }
                        variant="outlined"
                        disabled={loading}
                    >
                        {strings.addImage}
                    </BtnAddImg>
                </label>

                <Btn
                    variant="contained"
                    color="primary"
                    disabled={loading}
                    onClick={handleSubmit}
                >
                    {strings.publish}
                </Btn>
            </BtnsView>
        </Container>
    );
};

export default AddPostCard;
