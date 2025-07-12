import { Card, CardContent, CardActions, Button, Typography } from '@mui/material';

interface ProjectProps {
  title: string;
  description: string;
  link: string;
}

export function ProjectComponent({ title, description, link }: ProjectProps) {
  return (
    <Card sx={{ maxWidth: 345, m: 2, flex: '1 1 300px' }} elevation={3}>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" color="text.secondary">{description}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={link} target="_blank">Visit</Button>
      </CardActions>
    </Card>
  );
}
