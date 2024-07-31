import { Box, Button, Container, createTheme, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { Botones } from './componentes/Botones';
import { MediaCard } from './componentes/MediaCard';
import { Navbar } from './componentes/navbar/Navbar';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';

const navArrayLinks = [
    {
        title: 'Home',
        path: '/',
        icon: <InboxIcon />,
    },
    {
        title: 'Login',
        path: '/login',
        icon: <DraftsIcon />,
    },
    {
        title: 'Regiter',
        path: '/register',
        icon: <MenuIcon />,
    },
];

export const App = () => {
    return (
        <>
            <Navbar navArrayLinks={navArrayLinks} />
            <Container maxWidth="lg">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/*" element={<Navigate to="/" />} />
                </Routes>
            </Container>
        </>
    );
};
