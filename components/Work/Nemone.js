import { Box, Button, Grid } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Nemone = () => {
  const [items, setItems] = useState([]);
  const router = useRouter();

  useEffect(() => {
    axios
      .get("https://api.target-designer.com/api-target/")
      .then(function (response) {
        // handle
        setItems(response.data.list);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <Grid container>
      {items.map((item, index) => (
        <Grid item xs={12} md={6} key={index} p={7}>
          <Box pt={{ xs: 0, md: item.pt }}>
            <Box className="nemone-container">
              <Box
                component="img"
                src={item.src}
                alt={item.text}
                className="w-100 img-border nemone-image"
              />
              <Box className="nemone-middle">
                <Button
                  className="font-light"
                  sx={{ color: "light.main" }}
                  size="large"
                  color="success"
                  variant="contained"
                  href={item.url}
                  target="_blank"
                >
                  {item.text}
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default Nemone;
