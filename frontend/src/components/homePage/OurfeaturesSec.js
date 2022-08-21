import React from "react";

// mui components
import { Box, Container } from "@mui/system";
import { Grid, Typography } from "@mui/material";

// styled components
import { FeatureCard } from "@assets/styles/homePage";

// images
import featuresImage from "@assets/images/our-features.jpg";

const OurfeaturesSec = () => {
    return (
        <Container fixed component="section" sx={{ mt: 15 }}>
            <Grid container spacing={6} alignItems="center">

                <Grid item xs={12} md={6}>
                    <img
                        src={featuresImage.src}
                        alt="our features image"
                        style={{ borderRadius: "20px", width: "100%" }}
                    />
                </Grid>

                <Grid item xs={12} md={6}>
                    
                    <Typography component="h4" variant="h4" fontWeight="bold">
                        قابلیت های ما
                    </Typography>

                    <Box mt={2}>
                        <FeatureCard>
                            <Typography component="span" variant="h6" fontWeight="medium" >
                                جدیدترین ها
                            </Typography>
                            <Typography color="text.muted" mt={1}>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                                صنعت چاپ، و با استفاده از طراحان گرافیک است،
                                چاپگرها و متون بلکه روزنامه و مجله در ستون و
                            </Typography>
                        </FeatureCard>
                        <FeatureCard>
                            <Typography component="span" variant="h6" fontWeight="medium" >
                                بروزترین ها
                            </Typography>
                            <Typography color="text.muted" mt={1}>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                                صنعت چاپ، و با استفاده از طراحان گرافیک است،
                                چاپگرها و متون بلکه روزنامه و مجله در ستون و
                            </Typography>
                        </FeatureCard>
                        <FeatureCard>
                            <Typography component="span" variant="h6" fontWeight="medium" >
                                علمی ترین ها
                            </Typography>
                            <Typography color="text.muted" mt={1}>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                                صنعت چاپ، و با استفاده از طراحان گرافیک است،
                                چاپگرها و متون بلکه روزنامه و مجله در ستون و
                            </Typography>
                        </FeatureCard>
                    </Box>

                </Grid>
            </Grid>
        </Container>
    );
};

export default OurfeaturesSec;
