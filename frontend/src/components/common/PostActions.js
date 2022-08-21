import React from 'react';

// mui components
import { Box, Typography, Button } from '@mui/material';

// styled components
import { PostActionButton } from '@assets/styles/common/postCard';

// library
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart, faBookmark as solidBookMark, faComment, faArrowLeft, faClock } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart, faBookmark as regularBookMark } from "@fortawesome/free-regular-svg-icons";
import axios from 'axios';

// helper
import { notify, updatePage } from '@helper/functions';

// next
import { useRouter } from 'next/router';

const PostActions = ({ postData: { likesCount, commentsCount, isBookmarked, isLiked, readingTime, _id } }) => {

    const router = useRouter()

    const fetchHandler = (url) => {
        // url is for avoid from writing another function
        axios.put(`/posts/${url}/${_id}`)
            .then(response => {
                if(response.data.success) {
                    notify("success", response.data.message)
                    updatePage(router)
                }
                else if (!response.data.success) notify("error", response.data.message)
            })
            .catch(() => notify("error", "خطایی در برقرای ارتباط با سرور پیش آمد"))
    }
    
    return (
        <Box display="flex" alignItems="center">
            <Box display="flex" alignItems="center" columnGap={1} px={1}>
                <FontAwesomeIcon icon={faClock} color="#623DFC" />
                <Typography fontSize=".9rem" color="text.muted"> { readingTime.toLocaleString("fa-Ir") } </Typography>
            </Box>
            <PostActionButton color="secondary" size='large'>
                <FontAwesomeIcon icon={faComment} color="#0bd1d1" />
                <Typography color="text.muted" fontSize=".9rem" component="span"> { commentsCount.toLocaleString("fa-Ir") } </Typography>
            </PostActionButton>
            <PostActionButton color="error" onClick={() => fetchHandler("like")}>
                <FontAwesomeIcon icon={isLiked ? solidHeart : regularHeart} color="#bd160d" />
                <Typography color="text.muted" fontSize=".9rem" component="span"> { likesCount.toLocaleString("fa-Ir") } </Typography>
            </PostActionButton>
            <Button color="info" sx={{ py: 1, px: 1, minWidth: "20px"}} onClick={() => fetchHandler("bookmark")}>
                <FontAwesomeIcon icon={isBookmarked ? solidBookMark : regularBookMark} color="#623DFC" />
            </Button>
        </Box>
    );
};

export default PostActions;