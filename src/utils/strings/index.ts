import ptBr from './pt-br';
import { TypeStrings } from '../../models/ui';

const getStrings = (language: string): TypeStrings => {
    switch (language) {
        default:
            return ptBr;
    }
};

export default getStrings;
