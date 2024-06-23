import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Switch from '@mui/material/Switch';

export default function MenuAppBar({ darkMode, handleThemeChange }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleHomeClick = () => {
    navigate('/')
    handleClose()
  }

  const handleGuideClick = () => {
    navigate('/guide');
    handleClose();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent" style={{boxShadow:'0px 0px 0px 0px'}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            To-Do-App
          </Typography>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleHomeClick}>Home</MenuItem>
            {/* <MenuItem onClick={handleClose}>My account</MenuItem> */}
            <MenuItem onClick={handleGuideClick}>Guide</MenuItem> 
            <MenuItem>
              <Switch checked={darkMode} onChange={handleThemeChange} />
              <span>{darkMode ? "Dark Mode" : "Light Mode"}</span>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}



// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import Container from '@mui/material/Container';
// import { useTheme, useMediaQuery } from '@mui/material';

// export default function Navbar() {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="sticky">
//         <Container maxWidth="lg"> 
//           <Toolbar>
//             <IconButton
//               size="large"
//               edge="start"
//               color="inherit"
//               aria-label="menu"
//               sx={{ mr: 2 }}
//             >
//               {/* <MenuIcon /> */}
//             </IconButton>
//             <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//               TO-DO-APP
//             </Typography>
//             {isMobile ? (
//               <Button color="inherit">LOGIN</Button>
//             ) : (
//               <Box>
//                 <Button color="inherit">LOGIN</Button>
//               </Box>
//             )}
//           </Toolbar>
//         </Container>
//       </AppBar>
//     </Box>
//   );
// }
