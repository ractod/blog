import React from "react";

// mui components
import { Pagination, PaginationItem } from "@mui/material";

// next
import Link from "next/link";
import { useRouter } from "next/router";

const PaginationComponent = ({ page, count }) => {

    const router = useRouter()

    const changeHandler = (event, value) => {
        router.query.page = value
        router.push(router)
    }

    return (
        <Pagination
            dir="ltr"
            color="primary"
            page={page}
            count={count}
            onChange={changeHandler}
        />
    );
};

export default PaginationComponent;
