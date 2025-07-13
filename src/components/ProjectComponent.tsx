import { Card, CardContent, CardActions, Button, Typography } from '@mui/material';

interface ProjectProps {
  title: string;
  description: string;
  link: string;
}

export function ProjectComponent({ title, description, link }: ProjectProps) {
  return (
    <Card
      sx={{
        width: 300,
        m: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
      elevation={3}
    >
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" color="text.secondary">{description}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={link} target="_blank" rel="noopener">
          Visit
        </Button>
      </CardActions>
    </Card>
  );
}
