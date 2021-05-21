export type TypePost = {
    body: string;
    createdAt: string;
    id: string;
    image: string | null;
    likes: string[];
    orgId: string;
    orgLogo: string;
    orgName: string;
};

export type TypePostReq = {
    body: string;
    orgLogo: string;
    orgName: string;
};
