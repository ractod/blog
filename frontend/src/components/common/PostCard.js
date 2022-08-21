import React from "react";

// mui components
import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Grid,
    Typography,
} from "@mui/material";

// styled components
import { CardTitle, GoToBlogLink } from "@assets/styles/common/postCard";

// next
import Link from "next/link";
import Image from "next/image";

// helper
import PostActions from "./PostActions";

const PostCard = ({ xs, sm, lg, postData ,postData: { _id, titleBrief, author, coverImage } }) => {

    return (
        <Grid item xs={xs} sm={sm} lg={lg}>
            <Card sx={{ borderRadius: 2 }}>

                <CardMedia sx={{ aspectRatio: "16/9", position: 'relative' }}>
                    <Link href={`/post/${_id}`}>
                        <a>
                            <Image src={coverImage} alt="post cover" layout="fill" objectFit="cover" />
                        </a>
                    </Link>
                </CardMedia>

                <CardContent>
                    <Link href={`/post/${_id}`}>
                        <CardTitle>  { titleBrief } </CardTitle>
                    </Link>
                </CardContent>

                <Link href={`/post/${_id}`}>
                    <a>
                        <CardHeader
                            avatar={<Avatar sx={{ ml: 2 }}></Avatar>}
                            sx={{ p: 0}}
                            title={author.name}
                        />
                    </a>
                </Link>
                <CardActions sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    
                    <PostActions postData={postData} />

                    <Typography color="text.muted" component={Link} href={`/post/${_id}`}>
                        <GoToBlogLink>
                            دیدن مقاله  
                        <FontAwesomeIcon icon={faArrowLeft}/>
                        </GoToBlogLink>
                    </Typography>

                </CardActions>
            </Card>
        </Grid>
    );
};

export default PostCard;
