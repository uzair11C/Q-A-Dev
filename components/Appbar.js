import { useState } from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Button, MenuItem } 
from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link'

const pages = ['Home', 'About', 'Contact'];

const Appbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <Typography
            variant="h4"
            noWrap
            component="h4"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </Typography> */}

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
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
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography variant='body1' textAlign="center">
                    <Link href='/'>Home</Link>
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography variant='body1' textAlign="center">
                    <Link href='/about'>About</Link>
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography variant='body1' textAlign="center">
                    <Link href='/contact'>Contact</Link>
                  </Typography>
                </MenuItem>
              {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))} */}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="h6"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 600,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Q-A App
          </Typography>
          <Box sx={{ width:'100%', display: { xs: 'none', md: 'flex' }, justifyContent:'center' }}>
            <Typography
                variant='h5' component='h5'
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', margin:'10px' }}
              >
                <Link href='/'>Home</Link>
              </Typography>
              <Typography
                variant='h5' component='h5'
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', margin:'10px' }}
              >
                <Link href='/about'>About</Link>
              </Typography>
              <Typography
                variant='h5' component='h5' 
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block',margin:'10px' }}
              >
                <Link href='/contact'>Contact</Link>
              </Typography>
            {/* {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))} */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Appbar;
