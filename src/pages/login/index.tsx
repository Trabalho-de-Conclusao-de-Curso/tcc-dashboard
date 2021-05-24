import React, { useState } from 'react';
import { Grid, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import { TypeLoginData } from '../../models/auth';
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
    const { login } = useAuth();
    const history = useHistory();

    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [regData, setRegData] = useState<TypeLoginData>({
        email: '',
        password: '',
    });

    const handleErros = (): boolean => {
        const mErros: { [key: string]: string } = {};

        if (regData.email.length === 0) mErros.email = strings.mustNotBeEmpty;
        if (regData.password.length === 0)
            mErros.password = strings.mustNotBeEmpty;

        setErrors(mErros);

        if (Object.keys(mErros).length > 0) return false;
        return true;
    };

    const handleSubmit = async () => {
        if (!handleErros()) return;

        setLoading(true);

        const response = await login(regData);

        if (!response.success) {
            switch (response.error!) {
                default:
                    setErrors({ default: strings.somethingWentWrong });
                    break;
                case 1:
                    setErrors({ email: strings.invalidEmail });
                    break;
                case 2:
                    setErrors({ default: strings.wrongEmailOrPassword });
                    break;
                case 3:
                    setErrors({ default: strings.tooManyTries });
                    break;
                case 4:
                    setErrors({ default: strings.verifyEmail });
                    break;
            }
        }

        setLoading(false);
        if (response.success) history.push('/');
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
                    <LblAccess>{strings.appName}</LblAccess>
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
                    {errors.default && <LblError>{errors.default}</LblError>}
                    <div style={{ height: 24 }} />
                    <Button
                        size="large"
                        variant="contained"
                        color="primary"
                        fullWidth
                        disabled={loading}
                        onClick={handleSubmit}
                    >
                        {strings.login}
                    </Button>
                </Content>
                <SideView item md={7}>
                    <LblWelcome>{strings.welcome}</LblWelcome>
                    <LblRegister>
                        {`${strings.newHere} `}
                        <Link href="/register">{strings.signUp}</Link>
                    </LblRegister>
                </SideView>
            </Container>
        </UnAuthLayout>
    );
};

export default Index;
