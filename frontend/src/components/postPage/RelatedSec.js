import React from 'react';

// mui components
import { Box, Typography, Grid } from '@mui/material';

// component
import PostCard from '@components/common/PostCard';

const RelatedSec = ({ postData }) => {
    return (
        <Box component="section" mt={5}>
            <Typography component="h2" variant='h6' fontWeight="900">پست های مشابه</Typography>
            <Grid container spacing={4} mt={1}>
                { postData.related.map(post => <PostCard key={post._id} xs={12} sm={6} lg={4} postData={post} />) }
            </Grid>
        </Box>
    );
};

export default RelatedSec;