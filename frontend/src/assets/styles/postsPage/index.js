import styled from "@emotion/styled";
import { Accordion } from "@mui/material";
import { Container } from "@mui/system";

const Main = styled(Container)(({ theme }) => ({
    minHeight: "100vh",
    display: "flex",
    gap: "8px",
    flexDirection: "column",
    margin: "40px auto 120px",
    [theme.breakpoints.up("md")]: { flexDirection: "row" }
}));

const StyledFilterAccordion = styled(Accordion)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.secondary,
    ":not(:last-child)": {
        borderBottom: `2px solid ${theme.palette.yellow.main}`,
    },
    "::before": { display: "none !important" },
}));

export { StyledFilterAccordion, Main };
