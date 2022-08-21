import React from 'react';

// mui components
import { Container } from '@mui/system';
import PostHeaderSec from '@components/postPage/PostHeaderSec';

// components
import Comment from '@components/postPage/Comment';

// library
import axios from 'axios';
import { Box, Grid, Typography } from '@mui/material';
import PostCard from '@components/common/PostCard';
import CommentForm from '@components/postPage/CommentForm';
import RelatedSec from '@components/postPage/RelatedSec';
import PostActions from '@components/common/PostActions';

// next
import Head from 'next/head';

const PostPage = ({ postData }) => {
    return (
        <>
            <Head>  
                <title> بلاگ تود | {postData.title} </title>
            </Head>
            <Container fixed component="main" sx={{ mt: 5, mb: 15, minHeight: '100vh' }}>
                <PostHeaderSec postData={postData} />
                <Box component="section" mt={5}>
                    <PostActions postData={postData} size="large" />
                    <Typography component="h1" variant='h5' fontWeight="bold" my={2}> { postData.title } </Typography>
                    <Typography > { postData.text } </Typography>
                </Box>
                { postData.related.length > 0 && <RelatedSec postData={postData} /> }
                <Box component="section" mt={5} >
                    <Typography component="h2" variant='h6' fontWeight="bold" > نظرات </Typography>
                    <Box mt={1}>
                        { postData.comments.map(comment => <Comment key={comment._id} commentData={comment} postId={postData._id} allComments={postData.comments} />) }
                    </Box>
                    <CommentForm postId={postData._id} />
                </Box>
            </Container>
        </>
    );
};

export default PostPage;

export const getServerSideProps = async context => {
    try {
        const { data } = await axios.get(`/posts/${context.params.postId}`, {headers: { Cookie: context.req.headers.cookie || '' }})
        return {
            props: { postData: data.data }
        }
    } catch {
        // if post didn't find redirect user to 404
        return { redirect: { destination: "/404", permanent: false } }
    }
}