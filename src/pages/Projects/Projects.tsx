import { Grid, Container } from '@mui/material';
import { ProjectComponent } from '../../components/ProjectComponent';

export default function Projects() {
  const projects = [
    {
      title: 'Retrospective Hub',
      description: 'Team retrospectives made easy.',
      link: 'http://retrospectivehub.com/'
    },
    {
      title: 'Furlancer',
      description: 'A place to learn about cats and dogs.',
      link: 'https://tln8679.github.io/furlancer/'
    },
    {
      title: 'React Calculator',
      description: 'A clean React‑TS calculator app.',
      link: 'https://tln8679.github.io/my-react-caclculator/'
    }
  ];

  return (
    <Container sx={{ mt: 4 }}>
      <Grid container spacing={2} justifyContent="center" alignItems="stretch">
        {projects.map((p) => (
          <Grid item key={p.title} sx={{ flexGrow: 0 }}>
            <ProjectComponent {...p} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
