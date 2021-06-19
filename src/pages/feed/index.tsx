import React, { useEffect } from 'react';

import AuthLayout from '../../layouts/authLyt';
import AddPostCard from '../../components/addPostCard';
import PostCard from '../../components/postCard';

import { Container, PostContainer } from './styles';

import useData from '../../contexts/data/useData';
import useAuth from '../../contexts/auth/useAuth';

const Index: React.FC = () => {
    const { user } = useAuth();
    const { posts, removePost, loadPosts } = useData();

    useEffect(() => {
        loadPosts(user!.id);
    }, [user]);

    return (
        <AuthLayout>
            <Container container justify="center">
                <Container item md={3} />
                <PostContainer item md={5}>
                    <AddPostCard />
                </PostContainer>
                <Container item md={3} />
                <Container item md={3} />
                <PostContainer item md={5}>
                    {posts.map(post => (
                        <PostCard
                            key={post.id}
                            post={post}
                            onDelete={() => removePost(post.id)}
                        />
                    ))}
                </PostContainer>
                <Container item md={3} />
            </Container>
        </AuthLayout>
    );
};

export default Index;
