import React from 'react';

// mui components
import { Box, Container, Grid, Typography } from '@mui/material';

// components
import PostCard from '@components/common/PostCard';

// next
import Link from 'next/link';

// library
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const PopularBlosSec = ({ postsData }) => {
    return (
        <Container fixed sx={{ my: 15 }}>

            <Box display="flex" alignItems="center" justifyContent="space-between">
                <Typography component="h4" variant="h4" fontWeight="bold">
                    محبوب ترین مقالات
                </Typography> 
                <Typography component={Link} href="/posts">
                    <a style={{ display: "flex", alignItems: "center", columnGap: "10px" }}>
                        دیدن تمام مقالات
                        <FontAwesomeIcon icon={faArrowLeft}/>
                    </a>
                </Typography>
            </Box>

            <Grid container spacing={2} mt={4}>
                { postsData.map((post, index) => index < 4 && <PostCard key={post._id} xs={12} sm={6} lg={3} postData={post} />) }
            </Grid>

        </Container>
    );
};

export default PopularBlosSec;