import React from "react";
import Stack from "@mui/material/Stack";
import { SiReact, SiMaterialui } from "react-icons/si";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

export function Footer({}) {
  return (
    <>
      {" "}
      <Stack
        spacing={2}
        alignItems="center"
        justifyContent="center"
        pt={10}
        mx={10}
      >
        <Typography variant="body" color="common.white" align="center">
          ©2022 No767 - Website Licensed under GPL-3.0
        </Typography>
      </Stack>
      <Stack
        spacing={2}
        alignItems="center"
        justifyContent="center"
        pt={5}
        mx={10}
      >
        <Typography variant="body" color="common.white" align="center">
          Built with
        </Typography>
      </Stack>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="center"
        pt={1}
        mx={10}
        pb={5}
        divider={
          <Divider
            orientation="vertical"
            style={{
              background: "white",
            }}
            flexItem
          />
        }
      >
        <SiReact className="text-white" />
        <SiMaterialui className="text-white" />
      </Stack>
    </>
  );
}
