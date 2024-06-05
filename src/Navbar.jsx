import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-dark sticky-top">
      <Container>
        <Navbar.Brand href="#home">To-Do-App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">LOGIN</Nav.Link>
            <Nav.Link href="#link">REGISTER</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;


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
