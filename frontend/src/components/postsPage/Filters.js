import React from 'react';

// mui components
import { List, ListItem, Divider, Typography, ListItemText } from '@mui/material';

// components
import FilterAccordion from '@components/postsPage/FilterAccordion';

// library
import { faFilter, faArrowDownAZ } from '@fortawesome/free-solid-svg-icons';
import queryString from "query-string"

// next
import Link from 'next/link';
import { useRouter } from 'next/router';

const sortOptions = [
    { title: "بیشترین زمان", id: "most" },
    { title: "کمترین زمان", id: "lowest" },
    { title: "جدیدترین", id: "newest" },
    { title: "قدیمی ترین", id: "oldest" },
    { title: "محبوب ترین", id: "popular" }
]

const Filters = ({ categoriesData, setIsOpen = false }) => {

    const router = useRouter()

    const clickHandler = () => {
        // if we are in mobile mode close the filter after clicking
        if( setIsOpen ) setIsOpen(false)
    }

    // for pushing user after choosing a sort
    const pushHandler = (event) => {
        router.query.sort = event.target.id
        router.push(router)
    }

    return (
        <>
            <FilterAccordion title="دسته بندی" icon={faFilter} defaultExpanded={!!router.query.categorySlug}>
                <List disablePadding>
                    <ListItem  
                        sx={{ ":not(:last-child)": { borderBottom: "1px solid #fff", bgcolor: !router.query.categorySlug ? "primary.dark" : ""} }}
                    >
                        <Link href="/posts" >
                            <a onClick={clickHandler}> همه مقالات </a>
                        </Link>
                    </ListItem>
        
                    { categoriesData.map(category => (
                        <ListItem 
                            key={category._id} 
                            sx={{ ":not(:last-child)": { borderBottom: "1px solid #fff" }, bgcolor: router.query.categorySlug == category.englishTitle ? "primary.dark" : "" }}
                        >
                            <Link href={`/posts/${category.englishTitle}`}  >
                                <a onClick={clickHandler}> { category.title } </a>
                            </Link>
                        </ListItem>
                    )) }
                </List>
            </FilterAccordion>

            <FilterAccordion data={categoriesData} title="مرتب سازی" icon={faArrowDownAZ}>
                <List disablePadding >
                    { 
                        sortOptions.map(sort => (
                            <ListItem 
                                key={sort.id}
                                sx={{ ":not(:last-child)": { borderBottom: "1px solid #fff" }, bgcolor: router.query.sort == sort.id ? "primary.dark" : "" }}
                            >
                                <Typography id={sort.id} onClick={pushHandler} sx={{ cursor: "pointer" }}> { sort.title } </Typography>
                            </ListItem>
                        ))
                    }
                </List>
            </FilterAccordion>
        </>
    );
};

export default Filters;

