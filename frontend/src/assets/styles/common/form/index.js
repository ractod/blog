import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconButton } from "@mui/material";
import { Box } from "@mui/system";

const FormSection = styled(Box)(({ theme }) => ({
    width: "100%" ,
    position: "relative",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "40px 0",
    padding: "25px 10px",
    borderBottomLeftRadius: "10px",
    borderBottomRightRadius: "10px",
    backgroundColor: theme.palette.light.light,
    backdropFilter: "blur(10px)",
    boxShadow: theme.shadows[3],
    "::before": {
        content: "''",
        position: "absolute",
        width: "110%",
        height: "6px",
        right: "-5%",
        top: 0,
        borderRadius: "10px",
        backgroundColor: theme.palette.yellow.main,
    },
    [theme.breakpoints.up("md")]: { width: "65%" },
    [theme.breakpoints.up("lg")]: { width: "50%" },
}))

const Input = styled("input")(({ theme }) => ({
    display: "block",
    width: "100%",
    padding: "8px 5px",
    borderRadius: "10px",
    border: `2px solid ${theme.palette.secondary.dark}`,
    outline: "none",
    transition: "all .15s linear",
    ":focus": { boxShadow: `0px 0px 3px 2px ${theme.palette.secondary.main}` },
}))

const PasswordEye = styled(IconButton)(({ theme }) => ({
    position: "absolute", 
    left: "10px", 
    top: "50%", 
    color: theme.palette.primary.main ,
    transform: "translateY(-50%)", 
    cursor: "pointer"
}))

export { FormSection, Input, PasswordEye }