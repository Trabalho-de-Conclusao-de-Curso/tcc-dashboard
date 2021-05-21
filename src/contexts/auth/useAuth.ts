import { useContext } from 'react';
import AuthContext from './index';

const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
};

export default useAuth;
