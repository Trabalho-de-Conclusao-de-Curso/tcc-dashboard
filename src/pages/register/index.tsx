import React, { useState } from 'react';
import { Grid, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import { TypeRegisterData } from '../../models/auth';
import UnAuthLayout from '../../layouts/unAuthLyt';

import {
    Container,
    Content,
    LblAccess,
    LblRegister,
    LblWelcome,
    SideView,
    TextInput,
    Link,
    LblError,
} from './styles';

import useUi from '../../contexts/ui/useUi';
import useAuth from '../../contexts/auth/useAuth';

const Index: React.FC = () => {
    const { strings } = useUi();
    const { register } = useAuth();
    const history = useHistory();

    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [regData, setRegData] = useState<TypeRegisterData>({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleErros = (): boolean => {
        const mErros: { [key: string]: string } = {};

        if (regData.name.length === 0) mErros.name = strings.mustNotBeEmpty;
        if (regData.email.length === 0) mErros.email = strings.mustNotBeEmpty;
        if (regData.password.length === 0)
            mErros.password = strings.mustNotBeEmpty;
        if (regData.confirmPassword.length === 0)
            mErros.confirmPassword = strings.mustNotBeEmpty;
        if (regData.password.length > 0 && regData.confirmPassword.length > 0)
            if (regData.confirmPassword !== regData.password)
                mErros.confirmPassword = strings.passwordsMustMatch;

        setErrors(mErros);

        if (Object.keys(mErros).length > 0) return false;
        return true;
    };

    const handleSubmit = async () => {
        if (!handleErros()) return;

        setLoading(true);

        const response = await register(regData);

        if (!response.success) {
            switch (response.error!) {
                default:
                    setErrors({ default: strings.somethingWentWrong });
                    break;
                case 1:
                    setErrors({ email: strings.invalidEmail });
                    break;
                case 2:
                    setErrors({ email: strings.emailAlreadyUsed });
                    break;
                case 3:
                    setErrors({ password: strings.weakPassword });
                    break;
            }
        }

        setLoading(false);
        if (response.success) history.push('/login');
    };

    const handleChange = (value: string, field: string) => {
        setRegData({
            ...regData,
            [field]: value,
        });
    };

    return (
        <UnAuthLayout>
            <Container container>
                <Grid item md={1} />
                <Content item md={4}>
                    <LblAccess>{strings.signUp}</LblAccess>
                    <TextInput
                        label={strings.socialProject}
                        variant="outlined"
                        error={errors.name !== undefined}
                        helperText={errors.name}
                        onChange={({ target: { value } }) =>
                            handleChange(value, 'name')
                        }
                    />
                    <TextInput
                        label={strings.email}
                        variant="outlined"
                        error={errors.email !== undefined}
                        helperText={errors.email}
                        onChange={({ target: { value } }) =>
                            handleChange(value, 'email')
                        }
                    />
                    <TextInput
                        label={strings.password}
                        variant="outlined"
                        error={errors.password !== undefined}
                        helperText={errors.password}
                        onChange={({ target: { value } }) =>
                            handleChange(value, 'password')
                        }
                        type="password"
                    />
                    <TextInput
                        label={strings.confirmPassword}
                        variant="outlined"
                        error={errors.confirmPassword !== undefined}
                        helperText={errors.confirmPassword}
                        onChange={({ target: { value } }) =>
                            handleChange(value, 'confirmPassword')
                        }
                        type="password"
                    />
                    {errors.default && <LblError>{errors.default}</LblError>}
                    <div style={{ height: 24 }} />
                    <Button
                        size="large"
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={handleSubmit}
                        disabled={loading}
                    >
                        {strings.signUp}
                    </Button>
                </Content>
                <SideView item md={7}>
                    <LblWelcome>{strings.welcome}</LblWelcome>
                    <LblRegister>
                        {`${strings.alreadyRegistered} `}
                        <Link href="/register">{strings.signIn}</Link>
                    </LblRegister>
                </SideView>
            </Container>
        </UnAuthLayout>
    );
};

export default Index;
