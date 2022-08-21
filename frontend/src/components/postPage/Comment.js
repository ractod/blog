import React, { useState } from 'react';

// mui components
import { Button, Typography, Box, Avatar} from '@mui/material';

// styled components
import { CommentContainer, AuthorContainer } from '@assets/styles/postPage';
import CommentForm from './CommentForm';

const Comment = ({ commentData: { writer, content, _id }, postId, allComments, isReply = false }) => {

    const [isReplying, setIsReplying] = useState(false)
    const [isShowingReplies, setIsShowingReplies] = useState(false)

    const repliesComments = allComments.filter(comment => comment.responseTo == _id)
    
    return (
        <Box ml={ isReply ? 5 : 0 }  >

            <CommentContainer>
                <AuthorContainer> 
                    <Avatar  />
                    <Typography fontWeight='medium' > { writer.name } </Typography>
                </AuthorContainer>

                <Box p={3}>
                    <Typography mt={2}> { content } </Typography>

                    <Box display="flex" alignItems="center" justifyContent="space-between" mt={2}>
                        <Button onClick={() => setIsReplying(prevSate => !prevSate)} >
                            { isReplying ? "منصرف شدم" : `پاسخ به ${writer.name}` }
                        </Button>
                        {/* if there is no reply don't show this part */}
                        {
                            repliesComments.length > 0 &&
                            <Button onClick={() => setIsShowingReplies(prevState => !prevState)} color="secondary">
                                { isShowingReplies ? `پنهان کردن پاسخ ها` : `نمایش  ${repliesComments.length} پاسخ ` }
                            </Button>
                        }
                    </Box>
                    
                    {/* if usre wants to reply show this part */}
                    { isReplying && <CommentForm postId={postId} responseTo={_id} /> }
                </Box>
            </CommentContainer>
            {/* if user wants to see replies to this comment show this part */}
            {isShowingReplies &&
                // map to the all comments and showing the replies to this comment 
                repliesComments.map(comment => <Comment key={comment._id} commentData={comment} postId={postId} allComments={allComments} isReply={true} />)
            }
        </Box>
    );
};

export default Comment;