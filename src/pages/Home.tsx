import { Container, Typography, Button, Box } from '@mui/material';

export default function Home() {
  return (
    <Container sx={{ mt: 4, textAlign: 'center' }}>
      <Typography variant="h3" gutterBottom>Taylor Noble</Typography>
      <Typography variant="h6" gutterBottom>Web Developer</Typography>
      <Box sx={{ animation: 'fadeIn 0.5s ease-in', mt: 2 }}>
        <Button
          variant="contained"
          href="https://www.linkedin.com/in/mrtaylornoble/"
          target="_blank"
        >
          View LinkedIn
        </Button>
      </Box>
    </Container>
  );
}
