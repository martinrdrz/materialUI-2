import { Box, Button, Container, createTheme, Grid, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

export const Botones_1 = () => {
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
                <Grid container direction="column" spacing={2}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Button variant="contained">Mi Botón</Button>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Button variant="contained" color="info">
                            Botón personalizado 1
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Button variant="contained" color="info" startIcon={<DeleteIcon />}>
                            Delete
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Button variant="contained" endIcon={<SendIcon />}>
                            Send
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};
