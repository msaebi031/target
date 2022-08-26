import { Avatar, Box, Button, Typography } from "@mui/material";
import { Fragment } from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
const Member = () => {
  const items = [
    {
      name: "علی اکبر اسماعیلی",
      p: "طراح و توسعه دهنده وب با ۲ سال فعالیت در این زمینه",
      src: "/img/work/1.png",
      adress: "https://esmaely.yasser.com",
    },
    {
      mt: 9,
      name: "محمد مهدی صائبی",
      p: "طراح و توسعه دهنده وب با ۲ سال فعالیت در این زمینه",
      src: "/img/work/1.png",
      adress: "https://esmaely.yasser.com",
      pt: 10,
    },
  ];
  return (
    <Box mt={20} className="bg-dark">
      <Box className="d-flex align-center border-box justify-between">
        {items.map((item, index) => (
          // <Grid2 key={index} mt={item.mt} xs={6} item>/
          <Box py={4} px={2} className="d-flex align-center border-box">
            <Avatar
              sx={{ height: "105px", width: "105px", ml: 2.5 }}
              src={item.src}
              alt={item.name}
              className="img-border"
            />
            <Box>
              <Typography
                component="h2"
                color="light.main"
                variant="body2"
                className="font-bold"
              >
                {item.name}
              </Typography>
              <Typography
                py={2}
                component="p"
                color="light.light"
                variant="body2"
                className="font-light"
              >
                {item.p}
              </Typography>
              <Button
                sx={{ color: "light.main" }}
                size="small"
                color="success"
                variant="contained"
                href={item.adress}
              >
                مشاهده رزومه
              </Button>
            </Box>
          </Box>
          // </Grid2>
        ))}
      </Box>
    </Box>
  );
};

export default Member;
