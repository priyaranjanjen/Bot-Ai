import { Typography, Box, Stack} from "@mui/material";

export default function InitialCard({heading, subtext}){
    return(
        <Stack 
            bgcolor={'primary.light'}
            borderRadius={2}
            boxShadow={'0 0 12px rgba(0,0,0,0.1)'}
        >
            <Box
                p={3}
            >
                <Typography 
                    variant="h2"
                    fontWeight={700}
                    fontSize={{xs:14,md:20}}
                    mb={1}
                >
                    {heading}
                </Typography>

                <Typography
                    color={'text.secondary'}
                    fontSize={{xs:10, md:16}}
                >
                    {subtext}
                </Typography>
            </Box>
        </Stack>
    )
}