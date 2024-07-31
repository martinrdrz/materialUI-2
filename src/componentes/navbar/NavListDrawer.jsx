import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { NavLink } from 'react-router-dom';

export const NavListDrawer = ({ navArrayLinks, setOpen }) => {
    return (
        <Box sx={{ width: 250 }}>
            <nav aria-label="secondary trash spam">
                <List>
                    {navArrayLinks.map((item) => (
                        <ListItem disablePadding key={item.title}>
                            <ListItemButton component={NavLink} to={item.path} onClick={() => setOpen(false)}>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.title} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </nav>
        </Box>
    );
};
