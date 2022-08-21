import React, { useState, useEffect } from 'react';

// mui components
import { Grid, List, ListItem, Typography } from '@mui/material';
import Box from "@mui/material/Box"
import { Container } from '@mui/system';

// styled components
import { StyledLink } from '@assets/styles/layout';

// images
import wave from "@assets/images/wave.png"
import logo from "@assets/images/logo.png"

// library
import axios from 'axios';

// next
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {

    const [postsData, setPostsData] = useState([])

    useEffect(() => {
        axios.get("/posts?sort=popular")
            .then(response => setPostsData(response.data.data.docs))
    }, [])

    return (
        <Box component="footer" sx={{ filter: "drop-shadow(0 10px 10px #000)", mt: 5 }}>

            <Image src={wave} alt="wave" layout='responsive'/>

            <Box bgcolor="light.main" p={3}>
                <Container fixed>
                    <Grid container spacing={3}>
                        <Grid item xs={12} lg={4}>
                            <Box display="flex" alignItems="center" columnGap={1}>
                                <Image src={logo} alt="logo" width={35} height={35} />
                                <Typography component="span" variant="h6" fontWeight="bold" > بلاگ تود </Typography>
                            </Box>
                            <Typography mt={1}>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم 
                                از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها
                                و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی
                                مورد نیاز، و کاربردهای متنوع با هدف بهبو
                                د ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال
                                و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم   
                            </Typography>
                        </Grid>

                        <Grid item xs={12} md={6} lg={4}>
                            <Typography component="span" variant="h6" fontWeight="bold">
                                محبوب ترین مقالات
                            </Typography>
                            <List disablePadding>
                                {
                                    postsData.map((post, index) => index < 4 && 
                                        <ListItem key={post._id} sx={{ textAlign: "right" }} disableGutters>
                                            <Link href={`/post/${post._id}`}>
                                                <StyledLink> { post.titleBrief } </StyledLink>
                                            </Link>
                                        </ListItem>
                                    )
                                }
                            </List>
                        </Grid>

                        <Grid item xs={12} md={6} lg={4}>
                            <Typography component="span" variant="h6" fontWeight="bold">
                                 صفحات 
                            </Typography>
                            <List disablePadding>
                                <ListItem disableGutters>
                                    <Link href="/">
                                        <StyledLink>خانه</StyledLink>
                                    </Link>
                                </ListItem>
                                <ListItem disableGutters>
                                    <Link href="/posts">
                                        <StyledLink>مقالات</StyledLink>
                                    </Link>
                                </ListItem>
                                <ListItem disableGutters>
                                    <Link href="/signin">
                                        <StyledLink>ورود</StyledLink>
                                    </Link>
                                </ListItem>
                                <ListItem disableGutters>
                                    <Link href="/signup">
                                        <StyledLink>ساخت حساب</StyledLink>
                                    </Link>
                                </ListItem>
                            </List>
                        </Grid>

                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default Footer;