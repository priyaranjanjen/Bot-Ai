import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react"
import Navbar from "../../components/navbar/navbar";
import HistoryCard from "../../components/historyCard/historyCard";

export default function History(){
    const [chats, setChats] = useState([]);

    useEffect(() => {
        const savedChats = JSON.parse(localStorage.getItem("chats")) || [];
        
        if(savedChats.length > 0){
            setChats(savedChats);
        }

    },[])

    return(

        <Box
            height={'100vh'}
            overflow={'hidden'}
            sx={{
                "&::-webkit-scrollbar": {
                    width: "10px",
                },
                "&::-webkit-scrollbar-track": {
                    boxShadow: "inset 0 0 8px rgba(0,0,0,0.1)",
                    borderRadius: "8px",
                },
                "&::-webkit-scrollbar-thumb": {
                    backgroundColor: "rgba(151, 133, 186,0.4)",
                    borderRadius: "8px",
                },
            }}
        >

        <Navbar/>
        
        <Box p={{xs:1, md:3}}>
            <Typography variant="h2" fontWeight={500} textAlign={'center'} mb={3}>
                Conversation History
            </Typography>

            {
                chats.length == 0 && (
                    <Typography
                        textAlign={'center'}
                        p={3}
                        bgcolor={'primary.light'}
                        borderRadius={2}
                    >
                        No Saved Chats
                    </Typography>
                )
            }

            {
                chats.length > 0 && (
                    <HistoryCard chats={chats}/>
                )
            }
        </Box>


        </Box>

    )
}