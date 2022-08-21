import React from "react";

// mui components
import Container from "@mui/material/Container";
import { Grid, Typography } from "@mui/material";

// images
import articleImage from "@assets/images/laptop-article.jpg";

// styled components
import { AboutUsText } from "@assets/styles/homePage";

// next
import Image from "next/image";

const AboutUsSec = () => {
    return (
        <Container fixed component="section" sx={{ mt: 15 }}>
            <Grid container spacing={6} alignItems="center">
                <Grid item xs={12} md={6} textAlign={{ xs: "center", md: "right" }}>
                    <Typography component="h4" variant="h4" fontWeight="bold">
                        درباره ما
                    </Typography>
                    <AboutUsText>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
                        بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و
                        برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با
                        هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت
                        و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
                        متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                        برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ
                        پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امی
                    </AboutUsText>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Image
                        src={articleImage}
                        style={{ borderRadius: "20px", width: "100%" }}
                        alt="article image"
                    />
                </Grid>
            </Grid>
        </Container>
    );
};

export default AboutUsSec;
