import styled from "@emotion/styled";
import { Box } from "@mui/system";

const CommentField = styled("textarea")(({ theme }) => ({
    width: "100%",
    minHeight: "200px",
    padding: "10px",
    borderRadius: "10px",
    border: `3px solid ${theme.palette.primary.main}`,
    resize: "vertical",
    transition: "all .15s linear",
    ":focus": { boxShadow: `0px 0px 3px 2px ${theme.palette.secondary.main}` },
}));

const CommentContainer = styled(Box)(({ theme }) => ({
    marginTop: "20px",
    borderTopLeftRadius: "10px",
    borderBottomLeftRadius: "10px",
    backgroundColor: theme.palette.light.main,
    borderRight: `4px solid ${theme.palette.primary.main}`,
    overflow: "hidden",
}));

const AuthorContainer = styled(Box)({
    display: "flex",
    alignItems: "center",
    columnGap: "16px",
    padding: "8px 24px",
    backgroundColor: "#361d9c66"
});

export { CommentField, CommentContainer, AuthorContainer };
