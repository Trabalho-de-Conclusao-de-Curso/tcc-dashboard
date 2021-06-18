import { TypeInterests } from './auth';

export type TypeOpp = {
    address: string;
    createdAt: string;
    description: string;
    duration: string;
    id: string;
    interests: TypeInterests;
    likes: string[];
    name: string;
    open: boolean;
    organization: string;
    period: string;
    photos: string[];
    rating: number;
    requirements: string;
    usersRegistered: string[];
    registrations: TypeRegistration[];
};

export type TypeRegistration = {
    presentation: string;
    userName: string;
    userPhoto: string;
    userUid: string;
    selected?: boolean;
};

export type TypeUser = {
    accountFilled: boolean;
    bornDay: string;
    course: string;
    email: string;
    facebook: string;
    favoritesOpportunities: string[];
    gender: string;
    id: string;
    institution: string;
    interests: TypeInterests;
    languages: string[];
    linkedin: string;
    name: string;
    nationality: string;
    photo: string;
    presentation: string;
    skills: string[];
    twitter: string[];
};

export type TypeSelectUserData = {
    userId: string;
    oppId: string;
};

export type TypeAddOpp = {
    interests: TypeInterests;
    description: string;
    address: string;
    name: string;
    requirements: string;
    duration: string;
    period: string;
    photos: string[];
};
