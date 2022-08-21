import React, { useContext, useState } from 'react';

// mui components
import { Box, Typography } from '@mui/material';
import { Container } from '@mui/system';

// components
import { FormSection, Input, PasswordEye } from '@assets/styles/common/form';

// images
import deviceImage from "@assets/images/signinBg.png"
import logo from "@assets/images/logo.png"

// library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import ReCAPTCHA from 'react-google-recaptcha';
import { useFormik } from 'formik';
import * as Yup from "yup"

// context
import { AuthContext } from '@context/AuthProvider';
import { LoadingButton } from '@mui/lab';

// next
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

// helper
import { removeSpaces } from '@helper/functions';

const initialValues = {
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    reCaptcha: ""
}

const validationSchema = Yup.object({
    name: Yup.string().required("نام الزامی می باشد"),
    email: Yup.string().email("یک ایمیل معتبر وارد کنید").required("ایمیل الزامی می باشد"),
    phoneNumber: Yup.string().matches(/09(1[0-9]|3[1-9])[0-9]{7}/, "یک شماره موبایل معتبر وارد کنید").required("شماره موبایل الزامی می باشد"),
    password: Yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, "رمز عبور باید حداقل 8 حرف و دارای یک عدد باشد").required("رمز عبور الزامی می باشد"),
    reCaptcha: Yup.string().required("لطفا captcha را کامل کنید")
})

const SigninPage = () => {

    const { authData, dispatch } = useContext(AuthContext)

    const [isShowingPass, setIsShowingPass] = useState(false)

    const onSubmit = values => {
        const valuesCopy = {...values}
        // avoid sending reCaptcha value to backend
        delete valuesCopy.reCaptcha
        dispatch({ type: "SIGNUP", payload: removeSpaces(valuesCopy) })
    }

    const formik = useFormik({ initialValues, validationSchema, validateOnBlur: true, validateOnChange: true, validateOnMount: true, onSubmit })

    // handling the submit of reCaptcha
    const reCaptchaHandler = value => formik.setValues({ ...formik.values, reCaptcha: value })

    return (
        <>
            <Head>
                <title> بلاگ تود | ثبت نام </title>
            </Head>
            <Box component="main" minHeight="100vh" sx={{ background: `url(${deviceImage.src}) center/cover` }}>
                <Container fixed component="section" sx={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <FormSection onSubmit={formik.handleSubmit}>

                        <Box display="flex" flexDirection="column" alignItems="center" mb={3}>
                            <Image src={logo.src} alt="logo" width={50} height={50} />
                            <Typography componet="h2" variant="h6" fontWeight="medium" mt={1}> بلاگ تود </Typography>
                        </Box>

                        <Box component="form" onSubmit={formik.handleSubmit} width={{ xs: "90%", md: "70%", lg: "60%" }}>
                            <Box mt={2}>
                                <Typography component="label" mb={.5}> نام و نام خانوادگی</Typography>
                                <Input type="text" placeholder="نام و نام خانوادگی"  {...formik.getFieldProps("name")} />
                                { formik.errors.name && formik.touched.name && <Typography color="error"> { formik.errors.name } </Typography> }
                            </Box>

                            <Box mt={2}>
                                <Typography component="label" mb={.5}> ایمیل</Typography>
                                <Input type="email" placeholder="ایمیل"  {...formik.getFieldProps("email")} />
                                { formik.errors.email && formik.touched.email && <Typography color="error"> { formik.errors.email } </Typography> }
                            </Box>

                            <Box mt={2}>
                                <Typography component="label" mb={.5}> شماره موبایل</Typography>
                                <Input type="text" placeholder="شماره موبایل"  {...formik.getFieldProps("phoneNumber")} />
                                { formik.errors.phoneNumber && formik.touched.phoneNumber && <Typography color="error"> { formik.errors.phoneNumber } </Typography> }
                            </Box>

                            <Box mt={2}>
                                <Typography component="label" mb={.5}> رمز عبور </Typography>
                                <Box width="100%" position="relative">
                                    <Input type={isShowingPass ? "text" : "password"} placeholder="رمز عبور" {...formik.getFieldProps("password")} />
                                    <PasswordEye onClick={() => setIsShowingPass(prevState => !prevState)}>
                                        <FontAwesomeIcon icon={isShowingPass ? faEyeSlash : faEye}  />
                                    </PasswordEye>
                                </Box>
                                { formik.errors.password && formik.touched.password && <Typography color="error"> { formik.errors.password } </Typography> }
                            </Box>

                            <Box mt={2}>
                                <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_CAPTCHA_KEY} onChange={reCaptchaHandler} />
                                { formik.errors.reCaptcha && formik.touched.reCaptcha && <Typography color="error"> { formik.errors.reCaptcha } </Typography> }
                            </Box>

                            <Typography mt={1}>
                                آیا حساب دارید؟
                                <Link href="/signin"><a style={{ marginRight: "5px", color: "#623dfcff"  }}>ورود</a></Link>
                            </Typography>

                            <LoadingButton loading={authData.loading} variant='contained' type="submit"  disabled={!formik.isValid}  sx={{ mt: 4, width: "100%" }} > ورود </LoadingButton>
                        </Box>  
                    </FormSection>
                </Container>
            </Box>
        </>
    );
};

export default SigninPage;

export const getServerSideProps = context => {
    // if user is logged in can't access this page
    if( context.req.cookies.userToken ) {
        return { redirect: { destination: "/", permanent: false } }
    }
    return { props: {} }
}