import { AppBar, Toolbar, Typography, Button } from '@mui/material';

export default function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Taylor Noble
        </Typography>
        <Button color="inherit" href="#home">Home</Button>
        <Button color="inherit" href="#projects">Projects</Button>
      </Toolbar>
    </AppBar>
  );
}
