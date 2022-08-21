import React from 'react';

// mui components
import { Container, Grid, Pagination } from '@mui/material';
import { Box } from '@mui/system';

// components
import DesktopFilterBar from '@components/postsPage/DesktopFilterBar';
import MobileFilterBar from '@components/postsPage/MobileFilterBar';
import PostCard from '@components/common/PostCard';
import PaginationComponent from '@components/common/PaginationComponent';

// styled component
import { Main } from '@assets/styles/postsPage';

// library
import axios from 'axios';
import queryString from "query-string"

// next
import Head from 'next/head';

const PostsPage = ({ postsData, categoriesData }) => {
    return (
        <>
            <Head>
                <title> بلاگ تود | مقالات </title>
            </Head>
            <Main fixed component="main">
                <Box component="section">
                    <DesktopFilterBar categoriesData={categoriesData} />
                    <MobileFilterBar categoriesData={categoriesData} />
                </Box>
                <Box component="section" flex={1}>
                    <Grid container spacing={1} >
                        { postsData.docs.map(post => <PostCard key={post._id} xs={12} sm={6} lg={4} postData={post} />) }
                    </Grid>
                    <Box display="flex" justifyContent="center" mt={5} >
                        <PaginationComponent page={postsData.page} count={postsData.totalPages} />
                    </Box>
                </Box>
            </Main>
        </>
    );
};

export default PostsPage;

export const getServerSideProps = async context => {
    try {
        const response = await axios.all([
            axios.get(`/posts?${queryString.stringify(context.query)}`,  {headers: { Cookie: context.req.headers.cookie || "" }}),
            axios.get("/post-category")
        ])
    
        return {
            props: { postsData: response[0].data.data, categoriesData: response[1].data.data }
        }
    } catch {
        // if posts didn't find redirect user to 404 
        return { redirect: { destination: "/404", permanent: false } }
    }
}