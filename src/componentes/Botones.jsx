import { Box, Button, Container, createTheme, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

export const Botones = () => {
    return (
        <>
            <h1>App</h1>
            <Box
                sx={{
                    border: 4,
                    borderColor: 'peru',
                    p: 2,
                    bgcolor: 'secondary.main',
                    color: 'white',
                }}
            >
                <Typography variant="h6">Descripcion de la aplicación</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Button variant="contained" sx={{ alignSelf: 'flex-start' }}>
                        Mi Botón
                    </Button>
                    <Button variant="contained" color="info" sx={{ alignSelf: 'flex-start' }}>
                        Botón personalizado 1
                    </Button>
                    <Button
                        variant="contained"
                        color="info"
                        startIcon={<DeleteIcon />}
                        sx={{ alignSelf: 'flex-start' }}
                    >
                        Delete
                    </Button>
                    <Button variant="contained" endIcon={<SendIcon />} sx={{ alignSelf: 'flex-start' }}>
                        Send
                    </Button>
                </Box>
            </Box>
        </>
    );
};
