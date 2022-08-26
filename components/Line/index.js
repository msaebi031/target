import { Box, Divider } from "@mui/material";

const Line = ({ zIndex }) => {
  return (
    <Box
      display="flex"
      justifyContent="space-around"
      zIndex={zIndex}
      className="w-100 h-100 absolute right-0"
    >
      <Divider
        orientation="vertical"
        // sx={{
        //   margin: { xs: "0 auto", sm: "0" },
        //   marginRight: { sm: "60px" },
        // }}
        className="witdh-divider"
      />
      <Divider
        orientation="vertical"
        className="witdh-divider"
        sx={{ display: { xs: "none", md: "block" } }}
      />
      <Divider
        orientation="vertical"
        className="witdh-divider"
        sx={{ display: { xs: "none", md: "block" } }}
      />
      <Divider
        orientation="vertical"
        className="witdh-divider"
        sx={{
          // marginLeft: { xs: "48px", sm: "60px" },
          display: { xs: "none", sm: "block" },
        }}
      />
    </Box>
  );
};

export default Line;
