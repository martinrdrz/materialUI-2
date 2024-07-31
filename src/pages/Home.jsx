import { Alert, Box, Button, Collapse, Snackbar } from '@mui/material';
import { useSnackbar } from 'notistack';
import { useState } from 'react';

export const Home = () => {
    const [open, setOpen] = useState(true);
    const [openMensaje, setOpenMensaje] = useState(false);
    const { enqueueSnackbar } = useSnackbar();

    const handleClick = () => {
        enqueueSnackbar('Notificaciones temporales', { variant: 'success' });
    };

    return (
        <>
            <h1>Home</h1>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Alert severity="success">This is a success Alert.</Alert>
                <Alert severity="info">This is an info Alert.</Alert>
                <Alert severity="warning">This is a warning Alert.</Alert>
                <Alert severity="error">This is an error Alert.</Alert>
                <Alert severity="warning" action={<Button color="inherit">Cerrar</Button>}>
                    This is a warning alert — check it out!
                </Alert>
                <Collapse in={open}>
                    <Alert severity="info" onClick={() => setOpen(false)}>
                        This is an info Alert.
                    </Alert>
                </Collapse>
                <Button
                    variant="contained"
                    color="primary"
                    sx={{ alignSelf: 'flex-start' }}
                    onClick={() => setOpenMensaje(true)}
                >
                    Monstrar mensajes emergente
                </Button>
                <Button variant="contained" color="secondary" sx={{ alignSelf: 'flex-start' }} onClick={handleClick}>
                    Monstrar mensajes emergente apilados
                </Button>
                <Snackbar
                    open={openMensaje}
                    autoHideDuration={2000}
                    onClose={() => setOpenMensaje(false)}
                    message="Mensaje temporal"
                />
            </Box>
        </>
    );
};
