import { useContext } from 'react';
import DataContext from './index';

const useData = () => {
    const context = useContext(DataContext);
    return context;
};

export default useData;
