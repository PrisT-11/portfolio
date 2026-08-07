import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';

function NavBar() {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 70;
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    };

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    return (
        <AppBar position="sticky">
            <Container maxWidth="100%">
                <Toolbar>
                    <Button disableRipple onClick={() => scrollToSection('top')}
                        sx={{ color: 'white', display: { xs: 'none', md: 'flex' }, onClick: { backgroundColor: 'transparent' }}}>
                        <Typography
                            variant="h6"
                            noWrap
                            sx={{
                                mr: 2,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Priscilla Thung
                        </Typography>
                    </Button>

                    <Box sx={{ flexGrow: 1, justifyContent: "flex-end", display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            onClick={() => scrollToSection('portfolio')}
                            sx={{ my: 2, color: 'white', display: 'block', padding: "20px", margin: "0" }}
                        >
                            Portfolio
                        </Button>
                        <Button
                            onClick={() => scrollToSection('contact')}
                            sx={{ my: 2, color: 'white', display: 'block', padding: "20px", margin: "0" }}
                        >
                            Contact
                        </Button>
                    </Box>

                    <Button disableRipple onClick={() => scrollToSection('top') }
                        sx={{ color: 'white', display: { xs: 'flex', md: 'none' }, onClick: { backgroundColor: 'transparent' } }}>
                        <Typography
                            variant="h5"
                            noWrap
                            sx={{
                                mr: 2,
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Priscilla Thung
                        </Typography>
                    </Button>

                    <Box sx={{ flexGrow: 1, justifyContent: "flex-end", display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            <MenuItem key="Portfolio" onClick={() => {
                                handleCloseNavMenu();
                                scrollToSection('portfolio');
                            }}>
                                <Typography sx={{ textAlign: 'center' }}>Portfolio</Typography>
                            </MenuItem>
                            <MenuItem key="Contact" onClick={() => {
                                handleCloseNavMenu();
                                scrollToSection('contact');
                            }}>
                                <Typography sx={{ textAlign: 'center' }}>Contact</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default NavBar;
