import React, { useState, useContext } from 'react';

// mui components
import { AppBar, Avatar, Button, IconButton, List, ListItem, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';

// styled components
import { NavLink } from '@assets/styles/layout';

// images
import logo from "@assets/images/logo.png"

// next 
import Image from 'next/image';
import Link from 'next/link';
import MobileMenu from './MobileMenu';

// library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

// context
import { AuthContext } from '@context/AuthProvider';

const Header = () => {

    const { authData, dispatch } = useContext(AuthContext)
    const [ isMenuOpen, setIsMenuOpen ] = useState(false)

    return (
        <AppBar sx={{ position: "sticky", top: 0, py: 1}}>
            <Container fixed sx={{display: "flex", alignItems: "center",justifyContent: "space-between"}}>
                
                <IconButton size="large" sx={{ display: { xs: "inline-flex", md: "none" } }} onClick={() => setIsMenuOpen(true)}>
                    <FontAwesomeIcon icon={faBars} color="#fff" />
                </IconButton>

                <Box component="nav" display={{ xs: "none", md: "flex" }} alignItems="center">

                    <Link href="/">
                        <a> <Image src={logo} alt="logo" width={40} height={40} /> </a>
                    </Link>

                    <List disablePadding sx={{display: { xs: "none", md: "flex" }, alignItems: "center", marginRight: 2}}>
                        <ListItem disablePadding >
                            <Link href="/">
                                <NavLink> خانه </NavLink>
                            </Link>
                        </ListItem>
                        <ListItem disablePadding >
                            <Link href="/posts">
                                <NavLink> مقالات </NavLink>
                            </Link>
                        </ListItem>
                    </List>

                </Box>

                <Box>
                    
                    {
                        authData.user && !authData.loading ?
                        // when the user is logged in
                        <Box display="flex" alignItems="center" columnGap={2}>
                            <Link href="/account">
                                <a style={{ display: "flex", alignItems: "center", columnGap: "8px" }}>
                                    <Typography> { authData.user.name } </Typography>
                                    <Avatar sx={{ width:  "35px", height: "35px" }}></Avatar>
                                </a>
                            </Link>
                            <Button variant="outlined" color="error" sx={{ color: "#fff" }} onClick={() => dispatch({ type: "LOGOUT" })}>خروج</Button>
                        </Box>
                        :
                        // when the user didn't login
                        <>
                            <Link href="/signin" passHref>
                                <Button variant="outlined" sx={{ color: "#fff" }} color="yellow" >ورود</Button>
                            </Link>
                            <Link href="/signup" passHref>
                                <Button variant='outlined' sx={{ color: "#fff", mr: 1 }} color="yellow"> ثبت نام </Button>
                            </Link>
                        </>
                    }
                </Box>

                <MobileMenu {...{ isMenuOpen, setIsMenuOpen, authData }} />
            </Container>
        </AppBar>
    );
};

export default Header;