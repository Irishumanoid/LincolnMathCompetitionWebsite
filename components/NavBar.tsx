"use client";

import { Menu } from "@mui/icons-material";
import { Box, Typography, Divider, List, ListItem, ListItemButton, ListItemText, AppBar, Button, Drawer, IconButton, Toolbar } from "@mui/material";
import { useCallback, useMemo, useState } from "react";

const navItems = [
    {name: 'Home', href: '/'},
    {name: 'Information', href: '/info'},
];

export default function NavBar() {

    const [open, setOpen] = useState(false);

    const handleDrawerToggle = useCallback(() => {
        setOpen(state=>!state);
    }, [setOpen]);

    const drawer = useMemo(() => (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                Lincoln Math Comp
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.name} disablePadding>
                        <ListItemButton href={item.href} sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    ), [handleDrawerToggle]);
    
    return (
        <>
        <AppBar component="nav" position="sticky">
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <Menu />
                </IconButton>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                    <a href="/">Lincoln Math Comp</a>
                </Typography>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    {navItems.map((item) => (
                        <Button key={item.name} href={item.href} sx={{ color: '#fff' }}>
                            {item.name}
                        </Button>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
        <nav>
            <Drawer
                container={typeof window !== undefined ? () => window.document.body : undefined}
                variant="temporary"
                open={open}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
                }}
            >
                {drawer}
            </Drawer>
        </nav>
        </>
    );
}