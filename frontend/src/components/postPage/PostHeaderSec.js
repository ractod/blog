import React from 'react';

// mui components
import { Avatar, Box, Button, Typography } from '@mui/material';

// library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import axios from "axios"

// helper
import { notify, updatePage } from '@helper/functions';

// next
import { useRouter } from 'next/router';

const PostHeaderSec = ({ postData: { author, readingTime, createdAt, isBookmarked, _id } }) => {

    const router = useRouter()

    const bookmarkHandler = () => {
        axios.put(`/posts/bookmark/${_id}`)
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
        <Box component="section" display="flex" justifyContent="space-between" alignItems="center">
            <Box display="flex" alignItems="center">
                <Avatar sx={{ width: "60px", height: "60px" }}></Avatar>
                <Box mr={1}>
                    <Typography fontWeight="bold"> { author.name } </Typography>
                    <Typography color="text.muted"> { new Date(createdAt).toLocaleString("fa-IR").split("،")[0] } / { readingTime.toLocaleString("fa-IR") } دقیقه </Typography>
                </Box>
            </Box>
            {
                isBookmarked ?
                // if user bookmarked the post show this button 
                <Button variant="contained" onClick={bookmarkHandler} sx={{ background: "none", bgcolor: "primary.main", color: "text.secondary", borderRadius: 6 }}> 
                    حذف ذخیره 
                    <FontAwesomeIcon icon={faBookmark} style={{ marginRight: "10px" }} />
                </Button> :
                // if user didn't bookmark the post show this button 
                <Button variant="outlined" onClick={bookmarkHandler} sx={{ borderRadius: 6 }}> 
                    ذخیره 
                    <FontAwesomeIcon icon={faBookmark} style={{ marginRight: "10px" }} />
                </Button>
            }
        </Box>
    );
};

export default PostHeaderSec;