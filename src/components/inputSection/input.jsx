/* eslint-disable react/prop-types */
import { Box, Button, Stack, TextField } from "@mui/material";
import { useState } from "react";


export default function Input({generateResponse}){
    const [input, setInput] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        generateResponse(input);
        setInput('');
    }

    return(
        <Box flexShrink={0} marginBottom={{xs:1, md:3}} px={{xs:1, md:3}}>
            <Box component={'form'} onSubmit={handleSubmit}>
            <Stack
                    direction={'row'}
                    spacing={{ xs: .5, md: 2 }}
                >
                    <TextField
                        placeholder='Message Bot AI...'
                        sx={{
                            flex: 1,
                            bgcolor: 'primary.light',
                            borderRadius: 1,
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                  borderColor: 'secondary.main',
                                  borderWidth: '3px',
                                },
                                '&:hover fieldset': {
                                  borderColor: 'primary.dark',
                                },
                                '&.Mui-focused fieldset': {
                                  borderColor: 'primary.dark',
                                },
                                '& input': {
                                  fontSize: { xs: 12, md: 16 },
                                  paddingLeft: { xs: 1, md: 2 },
                                  paddingRight: { xs: 1, md: 2 },
                                },
                            },
                        }}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        required
                        // inputRef={inputRef}
                    />
                    <Button
                        variant='contained'
                        type='submit'
                        sx={{
                            fontSize: { xs: 12, md: 16 },
                            fontWeight: 700,
                            '@media (max-width:767px)': {
                                minWidth: 0,
                                paddingLeft: 1.5,
                                paddingRight: 1.5
                            }
                        }}
                    >
                        Ask
                    </Button>
                    <Button
                        variant='outlined'
                        onClick={() => setSuccess(!success)}
                        // disabled={!chat.length > 0}
                        sx={{
                            fontSize: { xs: 12, md: 16 },
                            '@media (max-width:767px)': {
                                minWidth: 0,
                                paddingLeft: 1.5,
                                paddingRight: 1.5
                            }
                        }}
                    >
                        Save
                    </Button>
                </Stack>
            </Box>
        </Box>
    )
}