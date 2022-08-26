import { ExpandLess, Favorite } from "@mui/icons-material";
import { Box, Typography, Link, IconButton, Container } from "@mui/material";

const Footer = () => {
  return (
    <Box py={3} className="border-box bg-dark text-center">
      <Typography
        className="font-bold"
        variant="body1"
        component="h2"
        color="light.main"
        pb={1}
      >
        طراحی شده با <Favorite color="error" /> توسط{" "}
        <Link color="success.main" href="#">
          تارگت دیزاینر
        </Link>
      </Typography>
      <Typography variant="body2" component="p" color="light.light">
        &copy; تمامی حقوق مادی ومعنوی این سایت متعلق بهگروه تارگت دیزاینر می
        باشد .
      </Typography>
    </Box>
  );
};

export default Footer;
