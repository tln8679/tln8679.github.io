import { Grid, Container } from '@mui/material';
import { ProjectComponent } from '../components/ProjectComponent';

export default function Projects() {
  const projects = [
    {
      title: 'Retrospective Hub',
      description: 'Team retrospectives made easy.',
      link: 'http://retrospectivehub.com/'
    },
    {
      title: 'React Calculator',
      description: 'A clean React‑TS calculator app.',
      link: 'https://tln8679.github.io/my-react-caclculator/'
    }
  ];

  return (
    <Container sx={{ mt: 4 }}>
      <Grid container spacing={2} justifyContent="center">
        {projects.map((p) => (
          <Grid item key={p.title}>
            <ProjectComponent {...p} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
