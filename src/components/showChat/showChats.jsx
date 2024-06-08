/* eslint-disable react/prop-types */
import { Box, Stack, Typography } from "@mui/material";
import { format } from "date-fns";
import avtar from '../../assets/avtar.png';
import ai from '../../assets/logo.png';


export default function ShowChats({chat}){
    return(
        <Stack
            p={{ xs: 1, md: 2 }}
            boxShadow={"0 0 4px rgba(0,0,0,0.1)"}
            borderRadius={2}
            direction={"row"}
            spacing={{ xs: 1, md: 3 }}
            marginBottom={2}

        >
            <Box
                component={'img'}
                src={chat.type == "AI" ? ai : avtar}
                height={{ xs: 30, md: 68 }}
                width={{ xs: 30, md: 68 }}
                sx={{ objectFit: "cover" }}
                flexShrink={0}
            />
            <Box>
                <Typography>
                    {chat.type == "AI" ? "Soul AI" : "You"}
                </Typography>
                <Typography>
                    {chat.text}
                </Typography>
                <Typography fontSize={{ xs: 8, md: 12 }} color={"text.secondary"}>
                    {format(chat.time, "hh:mm a")}
                </Typography>
            </Box>

        </Stack>
    )
}