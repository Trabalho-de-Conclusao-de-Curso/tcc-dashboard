import React, { useRef, useState } from 'react';

import AuthLayout from '../../layouts/authLyt';

import {
    Container,
    SecondaryBtn,
    PrimaryBtn,
    TextInput,
    UserLogo,
    UserLogoView,
    SaveView,
    LblError,
} from './styles';

import OrgAppView from '../../components/orgAppView';
import InterestsSelector from '../../components/interestsSelector';

import { TypeEditProfile, TypeInterests } from '../../models/auth';
import useAuth from '../../contexts/auth/useAuth';
import useUi from '../../contexts/ui/useUi';

const Index: React.FC = () => {
    const { user, editUser } = useAuth();
    const { strings } = useUi();

    const logoRef = useRef<HTMLInputElement>(null);
    // const car1 = useRef<HTMLInputElement>(null);
    // const car2 = useRef<HTMLInputElement>(null);
    // const car3 = useRef<HTMLInputElement>(null);

    const [form, setForm] = useState<TypeEditProfile>({
        name: user!.name,
        phone: user!.phone ? user!.phone : '',
        address: user!.address ? user!.address : '',
        description: user!.description ? user!.description : '',
        interests: user!.interests
            ? user!.interests
            : {
                  environment: false,
                  humanRights: false,
                  education: false,
                  animals: false,
                  sports: false,
                  health: false,
                  arts: false,
                  others: false,
              },
    });

    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [changes, setChanges] = useState(false);
    const [logo, setLogo] = useState<any>(user!.logo);
    // const [photos, setPhotos] = useState<Array<File | null>>([
    //     null,
    //     null,
    //     null,
    // ]);

    const handleChange = (key: string, value: string | TypeInterests) => {
        setChanges(true);
        setForm({
            ...form,
            [key]: value,
        });
    };

    // const handleChoosePhoto = (img: File, position: number) => {
    //     setChanges(true);
    //     const aux = photos;
    //     aux[position] = img;
    //     setPhotos(aux);
    // };

    const handleChangeLogo = (img: File | null) => {
        setChanges(true);
        setLogo(
            img
                ? {
                      file: img,
                      url: URL.createObjectURL(img),
                  }
                : logo
        );
    };

    const onSave = async () => {
        const mErrors: { [key: string]: string } = {};
        if (form.name.trim().length === 0)
            mErrors.name = strings.mustNotBeEmpty;

        let hasSelected = false;
        const intKeys = Object.keys(form.interests);
        intKeys.forEach(key => {
            if (form.interests[key]) hasSelected = true;
        });
        if (!hasSelected) mErrors.interests = strings.mustSelectOneInt;

        setErrors(mErrors);

        if (Object.keys(mErrors).length > 0) return;

        setLoading(true);
        await editUser(form, logo.file ? logo.file : undefined);
        setLoading(false);
        setChanges(false);
    };

    return (
        <AuthLayout>
            <Container container spacing={2}>
                <Container item md={4}>
                    <OrgAppView item={user!} />
                </Container>
                <Container item md={8}>
                    <Container container spacing={2}>
                        <Container item md={6}>
                            <UserLogoView>
                                <UserLogo src={logo.url ? logo.url : logo} />
                                <input
                                    name="logo-inpt"
                                    accept="image/png, image/jpeg"
                                    style={{ display: 'none' }}
                                    type="file"
                                    onChange={({ target: { files } }) =>
                                        handleChangeLogo(
                                            files ? files[0] : null
                                        )
                                    }
                                    ref={logoRef}
                                />
                                <label htmlFor="logo-inpt">
                                    <SecondaryBtn
                                        onClick={() =>
                                            logoRef.current &&
                                            logoRef.current.click()
                                        }
                                        variant="outlined"
                                        disabled={loading}
                                    >
                                        {strings.changeImage}
                                    </SecondaryBtn>
                                </label>
                            </UserLogoView>
                        </Container>
                        <Container item md={6}>
                            <SaveView>
                                <PrimaryBtn
                                    variant="contained"
                                    color="primary"
                                    disabled={!changes || loading}
                                    onClick={onSave}
                                >
                                    {strings.save}
                                </PrimaryBtn>
                            </SaveView>
                        </Container>
                        <Container item md={6}>
                            <TextInput
                                variant="outlined"
                                label={strings.name}
                                value={form.name}
                                onChange={({ target: { value } }) =>
                                    handleChange('name', value)
                                }
                                error={errors.name !== undefined}
                                helperText={errors.name}
                            />
                            <TextInput
                                variant="outlined"
                                label={strings.description}
                                value={form.description}
                                onChange={({ target: { value } }) =>
                                    handleChange('description', value)
                                }
                                error={errors.description !== undefined}
                                helperText={errors.description}
                                multiline
                                rows={4}
                            />
                        </Container>
                        <Container item md={6}>
                            <TextInput
                                variant="outlined"
                                label={strings.address}
                                value={form.address}
                                onChange={({ target: { value } }) =>
                                    handleChange('address', value)
                                }
                                error={errors.address !== undefined}
                                helperText={errors.address}
                            />
                            <TextInput
                                variant="outlined"
                                label={strings.phone}
                                value={form.phone}
                                onChange={({ target: { value } }) =>
                                    handleChange('phone', value)
                                }
                                error={errors.phone !== undefined}
                                helperText={errors.phone}
                                inputMode="tel"
                            />
                        </Container>
                        <Container item md={12}>
                            <InterestsSelector
                                initialValue={form.interests}
                                onInterestsChange={int =>
                                    handleChange('interests', int)
                                }
                            />
                            {errors.interests && (
                                <LblError>{errors.interests}</LblError>
                            )}
                        </Container>
                    </Container>
                </Container>
            </Container>
        </AuthLayout>
    );
};

export default Index;
