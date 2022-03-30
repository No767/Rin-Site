import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import { FaHome } from "react-icons/fa";

export function Body({}) {
  return (
    <Stack
      spacing={5}
      pt={5}
      color="common.white"
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="h3" color="common.white" pt={5}>
        Commands
      </Typography>
      <Typography variant="body" className="text-white">
        All of the commands can be found{" "}
        <Link
          href="https://docs.rinbot.live/docs/commands/rin-commands"
          underline="none"
          rel="noopener"
          color="secondary"
        >
          here
        </Link>
      </Typography>
      <Typography variant="body" color="common.white">
        Or you want a more up to date version, use either /rinhelp or /help.
        Both will provide the commands as well.
      </Typography>
      <Button
        variant="contained"
        href="/"
        startIcon={<FaHome />}
        color="primary"
        size="large"
      >
        Return to Home
      </Button>
    </Stack>
  );
}
