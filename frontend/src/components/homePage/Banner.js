import React from "react";

// mui components
import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";

// images
import banner from "@assets/images/banner.jpg";

// styled component
import { BannerContainer, BannerImgContainer, BannerTitle, WhyUsTextContainer } from "@assets/styles/homePage";
// next
import Link from "next/link";
import Image from "next/image";

const Banner = () => {
    return (
        <BannerContainer component="section" >

            <BannerImgContainer>
                <Image src={banner} alt="banner" layout="fill" />
            </BannerImgContainer>
        
            <Box paddingLeft={{ xs: 0, md: 2 }} textAlign={{ xs: "center", md: "right" }}>

                <Box bgcolor={{ xs: "#fff", md: "transparent" }} p={{ xs: 2, md: 0 }} borderRadius={{ xs: 2, md: 0 }} >
                    <BannerTitle component="h1" variant="h3">
                        جدید ترین مقالات را بخوانید
                    </BannerTitle>
                    <Typography color="text.muted" mt={4}>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
                        بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و
                        برای شرایط
                    </Typography>
                </Box>

                <WhyUsTextContainer>
                    <Typography component="h2" variant="h5" fontWeight="medium"> چرا انتخاب ما درست است؟ </Typography>
                    <Typography mt={1}>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
                        بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و
                        برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با
                        هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت
                        و سه درصد گذشته حال و آینده، شناخت فراوان جامعه
                        چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
                        بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و
                        برای شرایط فعلی تکنولوژی
                    </Typography>
                </WhyUsTextContainer>

                <Box mt={4}>
                    <Link href="/posts" passHref>
                        <Button variant="contained" > شروع خواندن </Button>
                    </Link>
                    <Link href="/signup" passHref>
                        <Button variant="contained" sx={{ mr: 1 }}> ساخت حساب </Button>
                    </Link>
                </Box>
                
            </Box>

        </BannerContainer>
    );
};

export default Banner;
