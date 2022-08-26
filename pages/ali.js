import { Box, Typography } from "@mui/material";

const Ali = () => {
  return (
    <Box container="nemone-container">
      <Box
        component="img"
        src="/img/work/4.png"
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
          alii
        </Typography>
      </Box>
      <div className="container">
        <img src="/img/work/4.png" alt="Avatar" className="image w-100" />
        <div className="middle">
          <div className="text">John Doe</div>
        </div>
      </div>
    </Box>
  );
};

export default Ali;
