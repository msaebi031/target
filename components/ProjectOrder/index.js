import { Box, Button, Grid, Typography } from "@mui/material";

const ProjectOrder = () => {
  return (
    <Box className="border-box bg-dark" my={14} id="OrderProject">
      <Grid
        className="d-flex justify-center"
        container
        textAlign={{ xs: "center", md: "right" }}
        spacing={{ md: 3, lg: 4 }}
        p={4}
      >
        <Grid mt={{ xs: 4, md: 0 }} item xs={10} sm={8} md={6}>
          <Box
            component="img"
            src={"/img/projectorde.png"}
            alt="سفارش پروژه"
            className="w-100"
          />
        </Grid>
        <Grid mt={{ md: 0, lg: 4 }} item xs={12} md={6}>
          <Typography
            component="h3"
            className="font-bold"
            color="light.main"
            variant="h5"
            py={2}
          >
            سفارش پروژه
          </Typography>
          <Typography
            component="p"
            color="light.light"
            variant="body2"
            className="font-light"
          >
            برای سفارش پروژه فقط کافیست به آیدی تلگرام زیر بروید و پروژه خود را
            سفارش دهیدبرای سفارش پروژه فقط کافیست به آیدی تلگرام زیر بروید و
            پروژه خود را سفارش دهیدبرای سفارش پروژه فقط کافیست به آیدی تلگرام
            زیر بروید و پروژه خود را سفارش دهیدبرای سفارش پروژه فقط کافیست به
            آیدی تلگرام زیر بروید و پروژه خود را سفارش دهید
          </Typography>
          <Box mt={3}>
            <Button
              // mt={2}
              // className="btn-header z-index"
              sx={{ color: "light.main" }}
              // size="large"
              color="success"
              variant="contained"
            >
              سفارش پروژه
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProjectOrder;
