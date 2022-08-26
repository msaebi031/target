import { Box, Grid, Typography } from "@mui/material";
import PolylineIcon from "@mui/icons-material/Polyline";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import CodeOffIcon from "@mui/icons-material/CodeOff";
import Grid2 from "@mui/material/Unstable_Grid2";
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
    <Grid2
      mt={7}
      spacing={{ xs: 0, sm: 5, md: 7, lg: 15 }}
      rowSpacing={{ xs: 3, sm: 4, md: 6, lg: 10 }}
      container
    >
      {items.map((item, index) => (
        <Grid2 key={index} item xs={12} sm={6}>
          <Box
            height="65%"
            p={4}
            className="border-box bg-dark"
            textAlign="center"
          >
            <Box color="success.main">{item.icon}</Box>
            <Typography
              mt={2}
              className="font-bold"
              variant="h6"
              component="h6"
              color="light.main"
            >
              {item.name}
            </Typography>
            <Typography
              lineHeight={1.8}
              mt={1.6}
              className="font-light"
              variant="body2"
              component="p"
              color="light.contrastText"
            >
              {item.p}
            </Typography>
          </Box>
        </Grid2>
      ))}
    </Grid2>
  );
};

export default Content;
