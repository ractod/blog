// mui
import theme from "@assets/theme/theme";
import { ThemeProvider } from "@mui/material";
import { CssBaseline } from "@mui/material";

// styles
import "@assets/styles/fonts/font.css";
import 'react-toastify/dist/ReactToastify.css';
import "@assets/styles/toastify/toastify.css"

// component
import LayOut from "@components/layout";

// images
import logo from "@assets/images/logo.png"

// context
import AuthProvider from "@context/AuthProvider";

// library
import { ToastContainer } from "react-toastify";
import axios from "axios";

// next
import Head from "next/head";

axios.defaults.baseURL = "http://localhost:5000/api";
axios.defaults.withCredentials = true;

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <link rel="icon" href={logo.src} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <AuthProvider>
                    <LayOut>
                        <Component {...pageProps} />
                    </LayOut>
                    <ToastContainer position="top-center" autoClose={2000} />
                </AuthProvider>
            </ThemeProvider>
        </>
    );
}

export default MyApp;
