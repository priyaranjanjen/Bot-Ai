import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useOutletContext } from "react-router-dom";

export default function Navbar(){

    const {handleMobileMenu} = useOutletContext();
    const isMobile = useMediaQuery('(max-width:900px)');

    
    return(
        <Box>
            <Stack 
                direction={'row'} 
                gap={1} 
                alignItems={'center'}
                py={{xs:2, md:3}}
                px={{xs:2, md:3}}
            >

                {
                    isMobile && (
                        <MenuIcon 
                            onClick={() => handleMobileMenu(prev => !prev)}
                        />)
                }

                <Typography 
                    variant="h1"
                    sx={{
                        color:'primary.dark'
                    }}
                >
                    Bot AI
                </Typography>
            </Stack>
        </Box>
    )
}