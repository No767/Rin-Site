import React from "react";

import { FaQuestion, FaTerminal } from "react-icons/fa";
import { HiOutlineStatusOnline } from "react-icons/hi";
import Stack from "@mui/material/Stack";
import GitHubIcon from "@mui/icons-material/GitHub";
import { SiDiscord } from "react-icons/si";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

export function Navbar({}) {
  return (
    <AppBar
      position="fixed"
      style={{
        background: "#202731",
      }}
    >
      <Stack direction="row" justifyContent="center" alignItems="center">
        <Toolbar disableGutters="true" variant="dense">
          <Tooltip title="Invite">
            <IconButton
              size="large"
              edge="start"
              LinkComponent="a"
              href="https://top.gg/bot/865883525932253184/invite"
              sx={{
                px: 3,
              }}
            >
              <SiDiscord />
            </IconButton>
          </Tooltip>
          <Tooltip title="GitHub">
            <IconButton
              size="large"
              LinkComponent="a"
              href="https://github.com/No767/Rin"
              sx={{
                px: 3,
              }}
            >
              <GitHubIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Docs">
            <IconButton
              size="large"
              LinkComponent="a"
              href="https://docs.rinbot.live"
              sx={{
                px: 3,
              }}
            >
              <FaQuestion />
            </IconButton>
          </Tooltip>
          <Tooltip title="Commands">
            <IconButton
              size="large"
              LinkComponent="a"
              href="/commands"
              sx={{
                px: 3,
              }}
            >
              <FaTerminal />
            </IconButton>
          </Tooltip>
          <Tooltip title="Status">
            <IconButton
              size="large"
              LinkComponent="a"
              href="https://status.rinbot.live"
              sx={{
                px: 3,
              }}
            >
              <HiOutlineStatusOnline />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </Stack>
    </AppBar>
  );
}
