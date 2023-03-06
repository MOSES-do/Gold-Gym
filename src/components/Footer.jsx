import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Logo from '../assets/images/Logo-1.png'

const Footer = () => {
    return (
        <Box sx={{ mt: "3rem" }}>
            <Stack justifyContent="center" gap="2rem" alignItems="center">
                <Stack direction="row" justifyContent="center" alignItems="center">
                    <img src={Logo} alt="Footer Logo" width="200px" height="40px" />
                </Stack>

                <Typography sx={{ textAlign: "center" }}>
                    Made with 💖 by Ace.io and taught by Javascript Mastery
                </Typography>
            </Stack>
        </Box>
    )
}

export default Footer