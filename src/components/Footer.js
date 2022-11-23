import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo-1.png";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#FAF8FF">
      <Stack gap="40px" alignItems="center" px="40px" pt="56px">
        <img src={Logo} alt="logo" width="70px" height="70px" />
        <Typography variant="h6" pb="40px" mt="15px">
          Made with ❤️ by
          <a href="https:/hariskurtishi.com/"  rel="noreferrer" className="">
            {""}
            Haris Kurtishi
          </a>
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
