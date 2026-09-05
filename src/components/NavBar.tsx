import { AppBar, Toolbar, Typography, Button } from "@mui/material";

export default function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Taylor Noble
        </Typography>
        <Button color="inherit" sx={{ ml: 2 }} href="#about">
          Home
        </Button>
        <Button color="inherit" sx={{ ml: 2 }} href="#projects">
          Projects
        </Button>
        <Button
          color="inherit" 
          sx={{ ml: 2 }}
          href="https://www.linkedin.com/in/mrtaylornoble/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </Button>
      </Toolbar>
    </AppBar>
  );
}
