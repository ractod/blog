import React, { useEffect } from 'react';

// mui components
import { Divider, Drawer, IconButton, List, ListItem, Typography } from '@mui/material';
import { Box } from '@mui/system';

// library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

// next
import Link from 'next/link';
import { useRouter } from 'next/router';

const MobileMenu = ({ isMenuOpen, setIsMenuOpen, authData }) => {

    const router = useRouter()

    const closeHandler = () => setIsMenuOpen(false)
    
    useEffect(() => setIsMenuOpen(false), [router.pathname])

    return (
        <Drawer
            anchor='right'
            open={isMenuOpen}
            sx={{ display: { xs: "block", md: "none" } }}
            PaperProps={{ sx: { width: {xs: "90vw", md: "50vw"}, bgcolor: "primary.dark" } }}
            onClose={closeHandler}
        >
            <Box sx={{ color: "#fff" }} >

                {/* menu header */}
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", p: 2 }}>
                    <Typography component="h2" variant='h5' fontWeight="600">
                        منو
                    </Typography>
                    <IconButton size='large' onClick={closeHandler}>
                        <FontAwesomeIcon icon={faXmark} color="#fff" />
                    </IconButton>
                </Box>
                {/* menu links */}
                <List>
                    <ListItem sx={{ py: 2 }}>
                        <Link href="/" ><a> خانه </a></Link>
                    </ListItem>
                    <Divider sx={{ bgcolor: "light.light" }}/>
                    <ListItem sx={{ py: 2 }}>
                        <Link href="/posts" ><a> مقالات </a></Link>
                    </ListItem>
                    <Divider sx={{ bgcolor: "light.light" }} />
                    {
                        authData.user && !authData.loading 
                        // when the user is logged in 
                        ?
                        <ListItem sx={{ py: 2 }}>
                                <Link href="/account" ><a> اکانت </a></Link>
                        </ListItem>
                        :
                        // when the user didn't login
                        <>
                            <ListItem sx={{ py: 2 }}>
                                <Link href="/signin" ><a> ورود </a></Link>
                            </ListItem>
                            <Divider sx={{ bgcolor: "light.light" }} />
                            <ListItem sx={{ py: 2 }}>
                                <Link href="/signup" ><a> ثبت نام </a></Link>
                            </ListItem>
                        </>
                    }
                </List>
            </Box>
        </Drawer>
    );
};

export default MobileMenu;