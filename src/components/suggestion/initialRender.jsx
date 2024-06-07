import { Box, Grid, Stack, Typography } from "@mui/material";
import logo from '../../assets/logo.png'
import InitialCard from "./card";

export default function InitialRender(){

    const initialData = [
        {
            heading: 'Hi, what is the weather',
            subtext: 'Get immediate AI generated response'
        },
        {
            heading: 'Hi, what is my location',
            subtext: 'Get immediate AI generated response'
        },
        {
            heading: 'Hi, what is the temperature',
            subtext: 'Get immediate AI generated response'
        },
        {
            heading: 'Hi, how are you',
            subtext: 'Get immediate AI generated response'
        },
    ]

    return(
        <>
            <Stack
                height={'100%'}
                justifyContent={'flex-end'}
                alignItems={'center'}
                m={{xs:1, md:3}}
            >
                <Stack
                    alignItems={'center'}
                    m={5}
                >
                    <Typography variant="h1" m={2 }>
                        How Can I Help You Today ?
                    </Typography>
                    <Box 
                        component={'img'}
                        src={logo}
                        height={100}
                        width={100}    
                    />

                </Stack>
                <Grid container spacing={{ xs: 1, md: 3 }}>
                    {
                        initialData.map((item)=>(
                            <Grid item 
                                key={item.heading}
                                xs={12} md={6}
                            >
                                <InitialCard heading={item.heading} subtext={item.subtext}/>
                            </Grid>
                        ))
                    }

                </Grid>
            </Stack>
        </>
    )
}