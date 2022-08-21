import styled from "@emotion/styled";
import { ListItemText, Typography } from "@mui/material";

const NavLink = styled("a")(({ theme }) => ({
    margin: "0 10px",
    padding: "10px 15px",
    borderRadius: "10px",
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    transition: "all .15s linear",

    ":hover": {
        backgroundColor: theme.palette.light.main,
        color: theme.palette.primary.main,
    }
}))

// Footer.js
const BlogCardTitle = styled(Typography)({
    display: "-webkit-box",
    overflow: "hidden",
    textOverflow: "ellipsis",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: "2",
})

const StyledLink = styled("a")(({ theme }) => ({
    width: "100%",
    padding: "8px",
    borderRadius: "5px",
    borderRight: `6px solid ${theme.palette.secondary.main}`,
    color: theme.palette.text.secondary,
    textAlign: "right",
    backgroundColor: theme.palette.primary.light,
    transition: "all .15s linear",
    
    ":hover": { backgroundColor: theme.palette.primary.main, }
}))

export { NavLink, BlogCardTitle, StyledLink  }