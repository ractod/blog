import React, { useState } from 'react';

// mui components
import { Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// library
import { useFormik } from 'formik';
import * as Yup from "yup"
import { CommentField } from '@assets/styles/postPage';
import axios from 'axios';
import { notify, updatePage } from '@helper/functions';

// next
import { useRouter } from 'next/router';

const validationSchema = Yup.object({
    text: Yup.string().trim().min(20, "متن حداقل باید 20 حرف باشد").required("متن الزامی می باشد")
})

const CommentForm = ({ postId, responseTo = null }) => {

    const router = useRouter()

    const [loading, setLoading] = useState(false)

    const onSubmit = values => {
        setLoading(true)
        axios.post("/post-comment/save-comment", {content: values.text, responseTo, postId})
            .then(response => {
                if(response.data.success) {
                    notify("success", "نظر شما با موفقیت ثبت شد")
                    updatePage(router)
                } else if(!response.data.success) {
                    notify("error", response.data.message)
                }
                setLoading(false)
            })
    }

    const formik = useFormik({ initialValues: { text: "" }, onSubmit, validationSchema, validateOnBlur: true, validateOnChange: true, validateOnMount: true })

    return (
        <form onSubmit={formik.handleSubmit} style={{ marginTop: "20px" }}>
            <CommentField placeholder="نظر خود را بنویسید" {...formik.getFieldProps("text")} />
            { formik.errors.text && formik.touched.text && <Typography sx={{ color: "error.main" }}> { formik.errors.text } </Typography> }
            <LoadingButton loading={loading} variant='contained' type="submit" sx={{ mt: 2 }} > ارسال نظر </LoadingButton>
        </form>
    );
};

export default CommentForm;