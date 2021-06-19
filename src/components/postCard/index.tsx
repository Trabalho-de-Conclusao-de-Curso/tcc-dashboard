import React from 'react';
import { TypePost } from '../../models/post';

import {
    Container,
    OrgImg,
    Header,
    Divider,
    LblName,
    DeleteButton,
    DeleteIcon,
    HeaderLeft,
    Image,
    LblBody,
    LikesIcon,
    LblDate,
} from './styles';

type TypeProps = {
    onDelete: () => void;
    post: TypePost;
};

const PostCard: React.FC<TypeProps> = ({ onDelete, post }) => {
    const stringToDate = (value: string) => {
        const b: any = value.split(/\D+/);

        return new Date(
            Date.UTC(b[0], b[1] - 1, b[2], b[3], b[4], b[5], b[6])
        ).toDateString();
    };
    return (
        <Container>
            <Header>
                <HeaderLeft>
                    <OrgImg src={post.orgLogo} />
                    <div>
                        <LblName>{post.orgName}</LblName>
                        <LblDate>{stringToDate(post.createdAt)}</LblDate>
                    </div>
                </HeaderLeft>
                <DeleteButton onClick={onDelete}>
                    <DeleteIcon />
                </DeleteButton>
            </Header>
            {post.image && <Image src={post.image} />}
            <HeaderLeft>
                <LikesIcon />
                <LblBody>{post.likes.length}</LblBody>
            </HeaderLeft>
            <Divider />
            <LblBody>{post.body}</LblBody>
        </Container>
    );
};

export default PostCard;
