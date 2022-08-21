import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import banner from "@assets/images/banner.jpg"

// Banner.js
const BannerContainer = styled(Box)(({ theme }) => ({
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px",
    background: `url(${banner.src}) center/cover`,
    fontWeight: "900",
    [theme.breakpoints.up("md")]: { 
        padding: 0,
        columnGap: "48px",
        background: "none"
    }
}))

const BannerTitle = styled(Typography)(({ theme }) => ({
    position: "relative",
    paddingBottom: "15px",
    color: theme.palette.text.primary.light,

    ":after": {
        content: "''",
        position: "absolute",
        right: "50%",
        bottom: 0,
        height: "5px",
        width: "40%",
        borderRadius: "10px",
        backgroundColor: theme.palette.primary.main,
        transform: "translateX(50%)"
    },

    [theme.breakpoints.up("md")]: {
        ":after": {
            right: 0,
            transform: "none"
        }
    }
}));

const BannerImgContainer = styled(Box)(({ theme }) => ({
    display: "none",
    position: "relative",

    [theme.breakpoints.up("md")]: {
        display: "block",
        minWidth: "40vw",
        height: "100vh"
    }
}))

const WhyUsTextContainer = styled(Box)(({ theme }) => ({
    marginTop: "35px",
    padding: "10px",
    borderRadius: "10px",
    background: `linear-gradient(14deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 88%)`,
    color: theme.palette.text.secondary
}))

// AboutUsSec.js
const AboutUsText = styled(Typography)(({ theme }) => ({
   
    color: theme.palette.text.secondary,
    borderRadius: "10px",
    marginTop: "24px",
    padding: "16px",
    background: `linear-gradient(14deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 88%)`,
}))

// OurFeaturesSec.js
const FeatureCard = styled(Box)(({ theme }) => ({
    padding: "15px",
    boxShadow: theme.shadows[2],
    borderRadius: "10px",
    borderRight: `3px solid ${theme.palette.primary.main}`,
    ":nth-of-type(2)": { margin: "20px 0" }
}))

export { BannerTitle,BannerImgContainer,  WhyUsTextContainer, BannerContainer, AboutUsText, FeatureCard };
