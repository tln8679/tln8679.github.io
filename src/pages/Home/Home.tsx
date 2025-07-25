import {
  Container,
  Typography,
  Avatar,
  Stack,
  Box,
  Grid,
} from "@mui/material";
import { ProjectComponent } from "../../components/ProjectComponent";
import "./Home.css";

export default function Home() {
  const projects = [
    {
      title: "Retrospective Hub",
      description: "Team retrospectives made easy.",
      link: "http://retrospectivehub.com/",
    },
    {
      title: "Furlancer",
      description: "A place to learn about cats and dogs.",
      link: "https://furlancer.com",
    },
    {
      title: "Taylor's Photos",
      description: "Best photos from my gallery!",
      link: "https://taylorsphotos.pages.dev/astro-photography-portfolio",
    },
    {
      title: "React Calculator",
      description: "A clean React‑TS calculator app.",
      link: "https://tln8679.github.io/my-react-caclculator/",
    },
  ];

  return (
    <Container sx={{ mt: 4, textAlign: "center" }}>
      <Stack spacing={8} alignItems="center">
        {/* Profile Section */}
        <Stack spacing={3} alignItems="center">
          <Avatar
            alt="Taylor Noble"
            src="/tnheadshot.png"
            sx={{ width: 150, height: 150 }}
            className="profile-avatar"
          />
          <Typography variant="h2" className="fade-slide">
            Taylor Noble
          </Typography>
          <Typography
            variant="h6"
            className="fade-slide"
            sx={{ animationDelay: "0.1s" }}
          >
            Web Developer
          </Typography>
        </Stack>

        {/* About Me Section */}
        <Box
          id="about"
          className="about-box fade-slide"
          sx={{ animationDelay: "0.2s", maxWidth: 800, width: "100%" }}
        >
          <Stack spacing={2}>
            <Typography variant="h3" className="fade-slide" gutterBottom>
              About Me 💻
            </Typography>
            <Typography variant="body1" className="about-text">
              I've been passionate about programming since the MySpace days, where
              I first started experimenting with code. I earned my BSc in Computer
              Science from UNCW 🎓, and for nearly 7 years, I’ve worked as a
              full-stack developer at a large corporation.
              <br />
              <br />
              Outside of tech, I live with my fiancée 💍, two cats 🐱🐱, and a dog 🐶.
              I enjoy playing pickleball 🏓, lifting weights 🏋️, and spending
              time outdoors 🌲.
            </Typography>
          </Stack>
        </Box>

        {/* Projects Section */}
        <Box
          id="projects"
          className="about-box fade-slide"
          sx={{ animationDelay: "0.2s", maxWidth: 800, width: "100%" }}
        >
          <Stack spacing={2}>
            <Typography variant="h3" gutterBottom>
              Projects 💼
            </Typography>
            <Grid container spacing={2} sx={{ padding: 2 }} justifyContent="center" alignItems="stretch">
              {projects.map((p) => (
                <Grid item key={p.title} xs={10} sm={6} md={4} >
                  <ProjectComponent {...p} />
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}
