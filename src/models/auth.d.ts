export type TypeUser = {
    accountFilled: boolean;
    address: string;
    country: string;
    description: string;
    email: string;
    id: string;
    interests: TypeInterests;
    logo: string;
    name: string;
    phone: string;
    photos: string[];
    rating: number;
};

export type TypeInterests = {
    [key: string]: boolean;
};

export type TypeLoginData = {
    name: string;
    email: string;
    id: string;
    photoUrl: string;
};

export type TypeRegisterData = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
};

export type TypeLoginRes = {
    token: string;
    userData: TypeUser;
};
