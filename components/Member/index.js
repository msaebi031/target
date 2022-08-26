import { Avatar, Box, Button, Typography } from "@mui/material";
import { Fragment } from "react";

const Member = () => {
  const items = [
    {
      name: "علی اکبر اسماعیلی",
      p: "طراح و توسعه دهنده وب با ۲ سال فعالیت در این زمینه",
      src: "/img/work/1.png",
      adress: "https://esmaely.yasser.com",
    },
    {
      name: "محمد مهدی صائبی",
      p: "طراح و توسعه دهنده وب با ۲ سال فعالیت در این زمینه",
      src: "/img/work/1.png",
      adress: "https://esmaely.yasser.com",
      pt: 10,
    },
  ];
  return (
    <Fragment>
      <Box className="border-box bg-dark d-flex align-center justify-between">
        {items.map((item, index) => (
          <>
            <Avatar>
              <Box
                component="img"
                src={item.src}
                alt={item.name}
                className="img-border"
              />
            </Avatar>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
            >
              <Typography
                component="h2"
                color="light.main"
                variant="body2"
                className="font-bold"
              >
                {item.name}
              </Typography>
              <Typography
                component="p"
                color="light.light"
                variant="body2"
                className="font-light"
              >
                {item.p}
              </Typography>
              <Button
                sx={{ color: "light.main" }}
                size="large"
                color="success"
                variant="contained"
                href={item.adress}
              >
                مشاهده رزومه
              </Button>
            </Box>
          </>
        ))}
      </Box>
    </Fragment>
  );
};

export default Member;
