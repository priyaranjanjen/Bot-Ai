/* eslint-disable react/prop-types */
import { Stack, Typography, Box } from "@mui/material";
import { format, isEqual, startOfDay, addDays } from 'date-fns';
import ChattingCard from "./chattingCard";

export default function HistoryCard({ chats }) {

  const formatDate = (date) => {
    const today = startOfDay(new Date());
    const givenDate = startOfDay(date);

    if (isEqual(givenDate, today)) {
      return `Today's chats`;
    } else if (isEqual(givenDate, addDays(today, -1))) {
      return `Yesterday's chats`;
    } else {
      return format(givenDate, 'do LLL yyyy');
    }
  };

  console.log(chats);

  return (
    <Box>
      {chats.map((item, index) => (
        <Box key={index} mb={2}>
          <Typography variant="h6" fontWeight={700}>
            {formatDate(startOfDay(new Date(item.date)))}
          </Typography>
          <Stack spacing={{xs:1, md:2}}>
            {item.chat.map((item, index) => 
                <ChattingCard 
                    key={index} 
                    details={item}
                    readOnly={true}    
                /> )}
          </Stack>
          
        </Box>
      ))}
    </Box>
  );
}
