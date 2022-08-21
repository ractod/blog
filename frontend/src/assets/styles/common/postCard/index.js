import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";

const CardTitle = styled("a")({
    display: "-webkit-box",
    fontWeight: "600",
    overflow: "hidden",
    textOverflow: "ellipsis",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: "2",
});

const PostActionButton = styled(Button)({
    minWidth: "auto",
    display: "flex",
    alignItems: "center",
    columnGap: "8px",
    padding: "4px 8px",
});

const GoToBlogLink = styled("a")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    columnGap: "10px",
    color: theme.palette.text.muted,
    transition: "all .15s linear",
    ":hover": { color: theme.palette.text.primary }
}));

export { CardTitle, PostActionButton, GoToBlogLink };
