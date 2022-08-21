import { createTheme } from "@mui/material/styles";

const palette = {
    primary: { main: "#361d9c" },
    secondary: { main: "#1e8199" },
    yellow: { main: "#FCC602" },
    light: {
        main: "#fff",
        light: "#ffffff55",
    },
    text: {
        primary: "#000",
        secondary: "#fff",
        muted: "#8e8e8f",
    },
    background: {
        default: "#e7e5e5",
    },
}

const breakpoints = {
    values: {
        xs: 0,
        sm: 480,
        md: 900,
        lg: 1200,
        xl: 1360,
    },
}

const typography = {
    fontWeightLight: "100",
    fontWeightRegular: "300",
    fontWeightMedium: "600",
    fontWeightBold: "900",
}

const components = {
    MuiContainer: {
        styleOverrides: {
            fixed: ({ theme }) => ({
                [theme.breakpoints.up("xs")]: {
                    maxWidth: "none",
                    padding: "0 10px",
                },
                [theme.breakpoints.up("md")]: { padding: "0 20px", },
                [theme.breakpoints.up("lg")]: { padding: "0 30px" },
                [theme.breakpoints.up("xl")]: {
                    maxWidth: "1360px",
                    padding: "0 40px",
                },
            })
        },
    },

    MuiIconButton: {
        styleOverrides: {
            sizeLarge: {
                fontSize: "1.5rem",
                width: "fit-content",
                padding: "0",
            },
            sizeMedium: {
                fontSize: "1rem",
                width: "35px",
                height: "35px"
            },
        },
    },

    MuiButton: {
        styleOverrides: {
            root: {
                borderRadius: "5px",
                boxShadow: "none",
                padding: "8px 22px",
            },
        },
        variants: [
            {
                props: { variant: "contained" },
                style: {
                    background:
                        "linear-gradient(90deg, #1e8199 0%, #361d9c 88%)",
                },
            },
            {
                props: { variant: "outlined" },
                style: ({ theme, ownerState }) => ({
                    borderWidth: "2px !important",
                    ":hover": {
                        backgroundColor: theme.palette[ownerState.color].main,
                        color: "#fff"
                    },
                }),
            },
        ],
    },
    
    MuiCssBaseline: {
        styleOverrides: {
            html: {
                fontSize: "calc(12px + .3vw)",
                direction: "rtl",
            },
            body: {
                minHeight: "100vh",
                overflowX: "hidden",
            },
            "*": {
                margin: 0,
                padding: 0,
                boxSizing: "border-box",
                fontFamily: "Vazir !important",
            },
            a: {
                color: "inherit",
                textDecoration: "none",
                cursor: "pointer",
            }
        },
    },
}

const theme = createTheme({
    palette,
    breakpoints,
    typography,
    components
});

export default theme;
