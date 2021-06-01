import React, { useEffect } from 'react';
import useAuth from '../../contexts/auth/useAuth';
import useData from '../../contexts/data/useData';

import AuthLayout from '../../layouts/authLyt';

const index: React.FC = () => {
    const { user } = useAuth();
    const { loadOpps, opps } = useData();

    useEffect(() => {
        loadOpps(user!.id);
    }, []);

    return (
        <AuthLayout>
            <div>Opps</div>
        </AuthLayout>
    );
};

export default index;
