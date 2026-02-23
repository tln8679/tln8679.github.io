import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        mt: 4,
        textAlign: "center",
        bgcolor: "background.paper",
        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
      }}
    >
      <Typography variant="body2" color="text.secondary">
        © Taylor Noble 2025
      </Typography>
    </Box>
  );
}
