import { Box, Button, Container, createTheme, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { Botones } from './componentes/Botones';
import { MediaCard } from './componentes/MediaCard';
import { Navbar } from './componentes/navbar/Navbar';

export const App = () => {
    return (
        <>
            <Container maxWidth="lg" sx={{ mt: 5 }}>
                {/* <Botones /> */}
                {/* <MediaCard /> */}
                <Navbar />
            </Container>
        </>
    );
};
