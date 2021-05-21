import React, {
    createContext,
    useState,
    useCallback,
    Dispatch,
    SetStateAction,
} from 'react';

import { TypeOpp } from '../../models/opp';
import { TypePost } from '../../models/post';

import { oppApi, postApi } from '../../services';

type TypeDataContext = {
    opps: TypeOpp[];
    opp: TypeOpp | null;
    setOpp: Dispatch<SetStateAction<TypeOpp | null>>;
    posts: TypePost[];
    loading: boolean;
    loadOpps: (orgId: string) => void;
    loadPosts: (orgId: string) => void;
};

const DataContext = createContext<TypeDataContext>({} as TypeDataContext);

export const DataProvider: React.FC = ({ children }) => {
    const [opps, setOpps] = useState<TypeOpp[]>([]);
    const [opp, setOpp] = useState<TypeOpp | null>(null);
    const [posts, setPosts] = useState<TypePost[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const loadOpps = useCallback(async (orgId: string) => {
        try {
            setLoading(true);

            const { data } = await oppApi.getOpps(orgId);

            setOpps(data);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }, []);

    const loadPosts = useCallback(async (orgId: string) => {
        try {
            setLoading(true);

            const { data } = await postApi.getPosts(orgId);
            setPosts(data);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }, []);

    return (
        <DataContext.Provider
            value={{
                opps,
                opp,
                setOpp,
                posts,
                loading,
                loadOpps,
                loadPosts,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

export default DataContext;
