import { AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography } from '@mui/material';
import { NavListDrawer } from './NavListDrawer';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';

export const Navbar = ({ navArrayLinks }) => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2, display: { xs: 'flex', sm: 'none' } }}
                        onClick={() => setOpen(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
                        {navArrayLinks.map((item) => (
                            //Hay que poner un componente "NavLink" para hacer los enlaces asi no se recarga la pagina como al poner un href. Con "NavLink", que es un compoenente lde react-router, solo de repinta la pagina, y con "to" se le diceque componente nuevo cargar.
                            <Button color="inherit" key={item.title} component={NavLink} to={item.path}>
                                {item.title}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer
                open={open}
                anchor="left"
                onClose={() => setOpen(false)}
                sx={{ display: { xs: 'flex', sm: 'none' } }} //para que cuando se muestre el menu de hamburguesa y se estire la pagina a lo ancho no queden los dos menues a la vista, el de hamburguesa se quita
            >
                <NavListDrawer navArrayLinks={navArrayLinks} setOpen={setOpen} />
            </Drawer>
        </>
    );
};
