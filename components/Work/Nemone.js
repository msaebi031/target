import { Box, Grid, Typography } from "@mui/material";

const Nemone = () => {
  const items = [
    { src: "/img/work/1.png", text: "ربات شلم" },
    { src: "/img/work/2.png", text: "فروشگاه", pt: 10 },
    { src: "/img/work/3.png", text: "رزومه شخصی" },
    { src: "/img/work/4.png", text: "دیجی پرنت", pt: 10 },
  ];
  return (
    <Grid container>
      {items.map((item, index) => (
        <Grid item xs={12} md={6} key={index} p={7}>
          <Box pt={{ xs: 0, md: item.pt }}>
            <Box className="nemone-container">
              <Box
                component="img"
                src={item.src}
                alt="نمونه کار"
                className="w-100 img-border nemone-image"
              />
              <Box className="nemone-middle">
                <Typography
                  component="p"
                  color="light.light"
                  variant="body1"
                  className="font-light nemone-text"
                >
                  {item.text}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default Nemone;
