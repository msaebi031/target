import { Box, Typography, Button, Container } from "@mui/material";

const Headers = () => {
  return (
    <Container maxWidth="md">
      <Box textAlign="center" pt={{ xs: 5, sm: 7 }}>
        <Typography
          className="font-bold line-height-2"
          variant="h1"
          component="h1"
          color="light.main"
        >
          طراحی سایت مورد علاقه تون رو به ما بسپارید
        </Typography>
        <Typography
          variant="subtitle1"
          component="p"
          className="font-light"
          color="light.contrastText"
          py={2}
          pb={3}
        >
          گروه طراحی و توسعه دهنده وب تارگت دیزاینر
        </Typography>
        <Button
          href="https://t.me/Target_Designer"
          className="btn-header z-index"
          sx={{ color: "light.main" }}
          size="large"
          color="success"
          variant="contained"
        >
          ثبت سفارش
        </Button>
      </Box>
    </Container>
  );
};

export default Headers;
