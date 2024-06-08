/* eslint-disable no-unused-vars */
import { Stack } from "@mui/material";
import Navbar from "../../components/navbar/navbar";
import InitialRender from "../../components/suggestion/initialRender";
import Input from "../../components/inputSection/input";
import data from '../../aiData/sampleData.json';
import { useRef, useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import ShowChats from "../../components/showChat/showChats";

export default function Home() {

    const { chats, setChats } = useOutletContext();
    const [chatId, setChatId] = useState(1);
    const [scrollToBottom, setScrollToBottom] = useState(false);
    const listRef = useRef(null);

    const generateResponse = (input) => {
        const response = data.find((item) => input.toLowerCase() === item.question.toLowerCase());

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
        ];

        setChats((prev) => [...prev, ...newChats]);
        setChatId((prev) => prev + 2);
        setScrollToBottom((prev) => !prev);
    };

    useEffect(() => {
        listRef.current?.lastElementChild?.scrollIntoView();
    }, [chats]);

    return (
        <Stack height={'100vh'}>
            <Navbar />

            {chats.length === 0 && <InitialRender />}

            {chats.length > 0 && (
                <Stack
                    direction={'column'}
                    px={{ xs: 1, md: 3 }}
                    ref={listRef}
                    sx={{
                        flexGrow: 1,
                        overflowY: "auto",
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
                    {chats.map((item, index) => (
                        <ShowChats key={index} chat={item} />
                    ))}
                </Stack>
            )}

            <Input
                chat={chats}
                clearChats={()=>setChats([])}
                setScroll={setScrollToBottom}
                generateResponse={generateResponse}
            />
        </Stack>
    );
}
