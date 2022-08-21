import React from 'react';

// mui components
import { Box , List, ListItem, Divider } from '@mui/material';

// components
import FilterAccordion from '@components/postsPage/FilterAccordion';

// library
import { faFilter, faArrowDownAZ } from '@fortawesome/free-solid-svg-icons';

// next
import Link from 'next/link';
import { useRouter } from 'next/router';
import Filters from './Filters';

const sortOptions = [
    { title: "بیشترین زمان", id: "most" },
    { title: "جدیدترین", id: "newest" },
    { title: "محبوب ترین", id: "popular" }
]

const DesktopFilterBar = ({ categoriesData }) => {

    const router = useRouter()

    return (
        <Box width="250px" bgcolor="primary.main" borderRadius={3} position="sticky" top={80} display={{ xs: "none", md: "block" }} >
            {/* all filters */}
            <Filters categoriesData={categoriesData} />
        </Box>
    );
};

export default DesktopFilterBar;

