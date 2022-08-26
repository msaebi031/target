import { Box, Grid } from "@mui/material";

const Nemone = () => {
  const items = [
    { src: "/img/work/1.png" },
    { src: "/img/work/2.png", pt: 10 },
    { src: "/img/work/3.png" },
    { src: "/img/work/4.png", pt: 10 },
  ];
  return (
    <Grid container>
      {items.map((item, index) => (
        <Grid item xs={12} md={6} key={index} p={7}>
          <Box pt={{ xs: 0, md: item.pt }}>
            <Box
              component="img"
              src={item.src}
              alt="نمونه کار"
              className="w-100 img-border"
            />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default Nemone;