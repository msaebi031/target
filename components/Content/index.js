import { Box, Grid, Typography } from "@mui/material";
import PolylineIcon from "@mui/icons-material/Polyline";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import CodeOffIcon from "@mui/icons-material/CodeOff";

const Content = () => {
  const items = [
    {
      icon: <PolylineIcon fontSize="large" />,
      name: "تعداد سایت",
      p: "تیم ما تا به حال 25 سایت موفق روی گوگل طراحی کرده است",
    },
    {
      icon: <CodeOffIcon fontSize="large" />,
      name: "طراح سایت",
      p: "طراحی وساخت انواع سایت ها با بهترین کیفیت",
    },
    {
      icon: <ShowChartIcon fontSize="large" />,
      name: "تجربه کاری",
      p: "ما یک تیم کاری با تجربه هستیم که بیش از 2 سال هست بصورت حرفه ای در این زمینه کار می کنیم",
    },
    {
      icon: <PeopleOutlineIcon fontSize="large" />,
      name: "تیم قوی",
      p: "گروه ما شامل ی تیم بسیار قوی است که در زمینه های مختلف حرفه ای هستند",
    },
  ];

  return (
    <Grid spacing={3} container>
      {items.map((item, index) => (
        <Grid mt={10} key={index} item xs={6}>
          <Box p={4} className="border-box" textAlign="center">
            <Box color="success.main">{item.icon}</Box>
            <Typography
              mt={2}
              className="font-bold"
              variant="body1"
              component="h6"
              color="light.main"
            >
              {item.name}
            </Typography>
            <Typography
              mt={1.6}
              className="font-light"
              variant="body2"
              component="p"
              color="light.contrastText"
            >
              {item.p}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default Content;
