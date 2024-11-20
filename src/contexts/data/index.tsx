import React, {
    createContext,
    useState,
    useCallback,
    Dispatch,
    SetStateAction,
} from 'react';

import { TypeAddOpp, TypeOpp } from '../../models/opp';
import { TypePost, TypePostReq } from '../../models/post';

import { oppApi, postApi, registrationsApi } from '../../services';

type TypeDataContext = {
    opps: TypeOpp[];
    opp: TypeOpp | null;
    setOpp: Dispatch<SetStateAction<TypeOpp | null>>;
    posts: TypePost[];
    loading: boolean;
    loadOpps: () => void;
    addOpp: (newOpp: TypeAddOpp, images?: File[]) => Promise<boolean>;
    removeOpp: (oppId: string) => Promise<boolean>;
    toggleOpp: () => void;
    editOpp: (oppId: string, newData: TypeOpp) => Promise<boolean>;
    loadPosts: (orgId: string) => void;
    addPost: (newPost: TypePostReq, image: File | null) => Promise<boolean>;
    removePost: (postId: string) => void;
    loadRegistrations: () => void;
};

const DataContext = createContext<TypeDataContext>({} as TypeDataContext);

export const DataProvider: React.FC = ({ children }) => {
    const [opps, setOpps] = useState<TypeOpp[]>([]);
    const [opp, setOpp] = useState<TypeOpp | null>(null);
    const [posts, setPosts] = useState<TypePost[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const loadOpps = useCallback(async () => {
        try {
            setLoading(true);

            const { data } = await oppApi.getOpps();

            setOpps(data);
        } catch (err:any) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }, []);

    const addOpp = useCallback(
        async (newOpp: TypeAddOpp, images?: File[]): Promise<boolean> => {
            try {
                const { data } = await oppApi.addOpp(newOpp);

                if (images && images.length > 0) {
                    const formData = new FormData();
                    images.forEach(image => {
                        formData.append('image', image, image.name);
                    });

                    console.log(data);
                    const res = await oppApi.uploadImages(data, formData);
                    console.log(res);
                }

                return Promise.resolve(true);
            } catch (err:any) {
                console.log(err);

                return Promise.resolve(false);
            }
        },
        []
    );

    const removeOpp = useCallback(async (oppId: string): Promise<boolean> => {
        try {
            await oppApi.removeOpp(oppId);

            return Promise.resolve(true);
        } catch (err:any) {
            console.log(err);
            return Promise.resolve(false);
        }
    }, []);

    const toggleOpp = useCallback(async () => {
        try {
            if (opp!.open) await oppApi.closeOpp(opp!.id);
            else await oppApi.openOpp(opp!.id);
            setOpp({ ...opp!, open: !opp!.open });
        } catch (err:any) {
            console.log(err);
        }
    }, [opp]);

    const editOpp = useCallback(
        async (oppId: string, newData: TypeOpp): Promise<boolean> => {
            try {
                await oppApi.editOpp(oppId, newData);
                return Promise.resolve(true);
            } catch (err:any) {
                console.log(err);
                return Promise.resolve(false);
            }
        },
        []
    );

    const loadRegistrations = useCallback(async () => {
        if (!opp) return;
        try {
            const { data } = await registrationsApi.getRegistrations(opp.id);
            setOpp({ ...opp, registrations: data.registrations });
        } catch (err:any) {
            console.log(err);
        }
    }, [opp]);

    const loadPosts = useCallback(async () => {
        try {
            setLoading(true);

            const { data } = await postApi.getPosts();
            setPosts(data);
        } catch (err:any) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }, []);

    const addPost = useCallback(
        async (newPost: TypePostReq, image: File | null): Promise<boolean> => {
            try {
                const { data } = await postApi.addPost(newPost);

                if (image) {
                    const formData = new FormData();
                    formData.append('image', image, image.name);

                    await postApi.uploadPostImg(data, formData);
                }

                return Promise.resolve(true);
            } catch (err:any) {
                console.log(err);
                return Promise.resolve(false);
            }
        },
        []
    );

    const removePost = useCallback(
        async (postId: string) => {
            try {
                await postApi.removePost(postId);
                loadPosts();
            } catch (err:any) {
                console.log(err);
            }
        },
        [loadPosts]
    );

    return (
        <DataContext.Provider
            value={{
                opps,
                opp,
                setOpp,
                posts,
                loading,
                loadOpps,
                addOpp,
                removeOpp,
                toggleOpp,
                editOpp,
                loadPosts,
                addPost,
                removePost,
                loadRegistrations,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

export default DataContext;
