import {
  Container,
  Typography,
  Button,
  Box,
  Avatar,
  Stack,
} from "@mui/material";
import "./Home.css";

export default function Home() {
  return (
    <Container sx={{ mt: 4, textAlign: "center" }}>
      <Stack spacing={3} alignItems="center">
        {/* Profile Photo */}
        <Avatar
          alt="Taylor Noble"
          src="/me.jpg"
          sx={{ width: 150, height: 150 }}
          className="profile-avatar"
        />

        <Typography variant="h3" className="fade-slide">
          Taylor Noble
        </Typography>

        <Typography
          variant="h6"
          className="fade-slide"
          sx={{ animationDelay: "0.1s" }}
        >
          Web Developer
        </Typography>

        {/* About Me Section */}
        <Box className="about-box fade-slide" sx={{ animationDelay: "0.2s" }}>
          <Typography variant="h5" gutterBottom>
            About Me 💻
          </Typography>
          <Typography variant="body1" className="about-text">
            I've been passionate about programming since the MySpace days, where
            I first started experimenting with code. I earned my BSc in Computer
            Science from UNCW 🎓, and for nearly 7 years, I’ve worked as a
            full-stack developer at a large corporation.
            <br />
            <br />
            Outside of tech, I live with my fiancée 💍, two cats 🐱🐱, and a dog
            🐶. I enjoy playing pickleball 🏓, lifting weights 🏋️, and spending
            time outdoors 🌲.
          </Typography>
        </Box>

        {/* LinkedIn Button */}
        <Box
          className="linkedin-button fade-slide"
          sx={{ animationDelay: "0.3s" }}
        >
          <Button
            variant="contained"
            href="https://www.linkedin.com/in/mrtaylornoble/"
            target="_blank"
          >
            View LinkedIn
          </Button>
        </Box>
      </Stack>
    </Container>
  );
}
