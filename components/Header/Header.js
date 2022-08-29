import { Box, Typography, Button, Container, IconButton } from "@mui/material";
import { useState } from "react";
import Modals from "../Modal";
import UnfoldMoreDoubleRoundedIcon from "@mui/icons-material/UnfoldMoreDoubleRounded";

const Headers = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
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
          pb={{ xs: 3, md: 4 }}
        >
          گروه طراحی و توسعه دهنده وب تارگت دیزاینر
        </Typography>
        <Button
          className="btn-header z-index"
          sx={{ color: "light.main" }}
          size="large"
          color="success"
          variant="contained"
          onClick={() => handleOpen()}
        >
          ثبت سفارش
        </Button>
        <Box className="btn-arrow" display={{ xs: "none", lg: "block" }}>
          <IconButton href="#Content" className="z-index">
            <UnfoldMoreDoubleRoundedIcon color="light" fontSize="large" />
          </IconButton>
        </Box>
      </Box>
      <Modals open={open} handleOpen={() => handleOpen()} />
    </Container>
  );
};

export default Headers;
