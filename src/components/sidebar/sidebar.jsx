/* eslint-disable react/prop-types */
import { Button, Stack, Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import CloseIcon from '@mui/icons-material/Close';
import logo from '../../assets/logo.png';
import AddCommentIcon from '@mui/icons-material/AddComment';
import { Link } from "react-router-dom";

export default function Sidebar({ setChat, closeMenu }) {
  const isMobile = useMediaQuery('(max-width:900px)');

  return (
    <Box>
      {isMobile && (
        <Button
          endIcon={<CloseIcon />}
          sx={{
            width: 1,
            display: 'flex',
            justifyContent: 'flex-end',
          }}
          onClick={closeMenu}
        >
          Close
        </Button>
      )}

      <Link to={'/'} style={{ textDecoration: 'none' }}>
        <Stack
          onClick={() => {
            setChat([]);
            closeMenu();
          }}
          direction={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}
          p={2}
          sx={{
            bgcolor: 'secondary.main',
            '&:hover': {
              bgcolor: 'primary.main',
            },
            cursor: 'pointer',
          }}
        >
          <Stack direction={'row'} alignItems={'center'} gap={2}>
            <Box component={'img'} src={logo} height={40} width={40} />
            <Typography variant={'heading'} fontWeight={700} color={'text.primary'}>
              New Chat
            </Typography>
          </Stack>
          <AddCommentIcon sx={{ color: 'text.primary' }} />
        </Stack>
      </Link>

      <Box p={{ xs: 2, md: 3 }}>
        <Link to={'/history'} style={{ textDecoration: 'none' }}> {/* Corrected property name */}
          <Button
            sx={{
              width: 1,
              bgcolor: 'secondary.main',
              '&:hover': {
                bgcolor: 'primary.main',
              },
              p: 2,
              borderRadius: 2,
            }}
          >
            <Typography variant={'heading'} fontWeight={600} color={'text.primary'}>
              Past Conversations
            </Typography>
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
