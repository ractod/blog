import React from 'react';

// mui components
import { AccordionSummary, AccordionDetails, Typography, Box, List, ListItem, Divider } from '@mui/material';

// styles component
import { StyledFilterAccordion } from '@assets/styles/postsPage';

// library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

// next
import Link from 'next/link';

const FilterAccordion = ({ icon, data, title, children, defaultExpanded }) => {
    return (
        // raw accordion for filter
        <StyledFilterAccordion disableGutters defaultExpanded={defaultExpanded}>
            
                <AccordionSummary expandIcon={<FontAwesomeIcon icon={faAngleDown} color="#fff" />} >
                    <Box display="flex" alignItems="center">
                        <FontAwesomeIcon icon={icon} />
                        <Typography component="span" fontWeight="600" mr={1}>{ title }</Typography>
                    </Box>
                </AccordionSummary>

                <AccordionDetails sx={{ p: 0, bgcolor: "secondary.main" }}>
                    { children }
                </AccordionDetails>

        </StyledFilterAccordion>
    );
};

export default FilterAccordion;