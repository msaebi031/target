import { Box, Grid, Typography } from "@mui/material";

const About = () => {
  return (
    <Box className="border-box bg-dark" my={14}>
      <Grid container spacing={4} p={4}>
        <Grid item xs={12} md={6}>
          <Typography
            component="h3"
            className="font-bold"
            color="light.main"
            variant="h4"
            py={3}
          >
            درباره ما
          </Typography>
          <Typography
            component="p"
            color="light.light"
            variant="body2"
            className="font-light"
          >
            از سال ۱۴۰۰ فعالیت خود را در زمینه ی طراحی سایت آغاز کردیم و به صورت
            تیمی در این حوضه فعالیت ی کنیم .از سال ۱۴۰۰ فعالیت خود را در زمینه ی
            طراحی سایت آغاز کردیم و به صورت تیمی در این حوضه فعالیت ی کنیم .از
            سال ۱۴۰۰ فعالیت خود را در زمینه ی طراحی سایت آغاز کردیم و به صورت
            تیمی در این حوضه فعالیت ی کنیم .از سال ۱۴۰۰ فعالیت خود را در زمینه ی
            طراحی سایت آغاز کردیم و به صورت تیمی در این حوضه فعالیت ی کنیم .
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={"/img/about.png"}
            alt="درباره ما"
            className="w-100"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
