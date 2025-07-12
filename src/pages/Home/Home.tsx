import { Container, Typography, Button, Box } from '@mui/material';
import './Home.css';

export default function Home() {
  return (
    <Container sx={{ mt: 4, textAlign: 'center' }}>
      <Typography variant="h3" gutterBottom>
        Taylor Noble
      </Typography>
      <Typography variant="h6" gutterBottom>
        Web Developer
      </Typography>

      {/* About Me Section */}
      <Box className="about-box">
        <Typography variant="h5" gutterBottom>
          About Me
        </Typography>
        <Typography variant="body1" className="about-text">
          I've been passionate about programming since the MySpace days, where I first started experimenting with code. I earned my BSc in Computer Science from UNCW, and for nearly 7 years, I’ve worked as a full-stack developer at a large corporation.
          <br /><br />
          Outside of tech, I live with my partner, two cats, and a dog. I enjoy playing pickleball, lifting weights, and spending time outdoors.
        </Typography>
      </Box>

      {/* LinkedIn Button */}
      <Box className="linkedin-button">
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
