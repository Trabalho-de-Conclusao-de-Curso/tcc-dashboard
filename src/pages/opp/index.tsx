import React from 'react';
import useData from '../../contexts/data/useData';

import AuthLayout from '../../layouts/authLyt';

const Index: React.FC = () => {
    const { opp } = useData();
    return (
        <AuthLayout>
            <div>{JSON.stringify(opp)}</div>
        </AuthLayout>
    );
};

export default Index;
