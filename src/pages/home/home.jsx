import { Stack } from "@mui/material";
import Navbar from "../../components/navbar/navbar";
import InitialRender from "../../components/suggestion/initialRender";
import Input from "../../components/inputSection/input";
import data from '../../aiData/sampleData.json';
import { useState } from "react";
import { useOutletContext } from "react-router-dom";

export default function Home(){

    const {chat, setChat} = useOutletContext()
    const [chatId, setChatId] = useState(1);
    
    const generateResponse = (input) => {
        // console.log(input);
        const response = data.find((item) => input.toLowerCase() == item.question.toLowerCase())

        let answer = response ? response.response : "Sorry, Did not understand your query!";

        const newChats = [
            {
                type: "human",
                text: input,
                time: new Date(),
                id: chatId,
            },
            {
                type: "AI",
                text: answer,
                time: new Date(),
                id: chatId + 1,
            },
        ]

        setChat((prev) => [...prev, ...newChats]);

        setChatId((prev) => prev + 2);

    }

    return(
        <Stack 
            height={'100vh'}
        >
            <Navbar/>

            {
                chat.length === 0 && (
                    <InitialRender/>
                )
            }
            <Input generateResponse={generateResponse}/>
        </Stack>
    )
}