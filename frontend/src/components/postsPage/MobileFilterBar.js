import React, {useState} from 'react';

// mui componets
import { Button, Drawer, IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';

// components
import Filters from './Filters';

// library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faXmark } from '@fortawesome/free-solid-svg-icons';

const MobileFilterBar = ({ categoriesData }) => {

    const [isOpen, setIsOpen] = useState(false)

    const closeHandler = () => setIsOpen(false)

    return (
        <Box display={{ xs: "block", md: "none" }}>
            <Button variant="outlined" sx={{ borderRadius: 6 }} onClick={() => setIsOpen(true)}>
                فیلتر
                <FontAwesomeIcon icon={faFilter} style={{ marginRight: "10px" }} />
            </Button>

            <Drawer
                open={isOpen}
                anchor='bottom'
                onClose={closeHandler}
                PaperProps={{ sx: { width: "100vw", minHeight: "50vh", py: 2, px: .5} }}
            >
                
                <Box display='flex' alignItems="center" justifyContent="space-between" mb={3} px={1}>
                    <Typography component="span" variant='h5' fontWeight="600"> فیلتر </Typography>
                    <IconButton size="large" onClick={closeHandler}>
                        <FontAwesomeIcon icon={faXmark} color="#000" />
                    </IconButton>
                </Box>

                <Filters categoriesData={categoriesData} setIsOpen={setIsOpen} />
            </Drawer>

        </Box>
    );
};

export default MobileFilterBar;