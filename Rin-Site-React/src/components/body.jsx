import React from "react";
import Stack from "@mui/material/Stack";
import SpeedIcon from "@mui/icons-material/Speed";
import Link from "@mui/material/Link";
import CollectionsIcon from "@mui/icons-material/Collections";
import GitHubIcon from "@mui/icons-material/GitHub";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import Typography from "@mui/material/Typography";

export function Body({}) {
  return (
    <>
      {" "}
      <Stack
        spacing={2}
        alignItems="center"
        justifyContent="center"
        pt={15}
        mx={10}
      >
        <CollectionsIcon
          sx={{
            fontSize: 175,
            color: "#FFFFFF",
          }}
        />
        <Typography variant="h4" color="common.white" pt={4} align="center">
          A Wide Collection of Services Supported
        </Typography>
        <Typography variant="h5" color="common.white" py={3} align="center">
          Rin supports a wide variety of services, allowing to obtain data from
          these services from within Discord. For example, you can fetch memes
          from Reddit, or fetch info about your favorite anime, and much much
          more. Rin has integration with Hypixel, DeviantArt, Twitter, MangaDex,
          YouTube, Modrinth and many more. More will be added, such as Kitsu,
          Twitch, AniList, Spotify, and many others
        </Typography>
      </Stack>
      <Stack
        spacing={2}
        alignItems="center"
        justifyContent="center"
        pt={10}
        mx={10}
      >
        <SpeedIcon
          sx={{
            fontSize: 175,
            color: "#FFFFFF",
          }}
        />
        <Typography variant="h4" color="common.white" pt={4} align="center">
          Built with lighting performance in mind
        </Typography>
        <Typography variant="h5" color="common.white" py={3} align="center">
          Rin is built with a focus on performance. Under the hood, Rin uses{" "}
          <Link
            href="https://github.com/MagicStack/uvloop"
            underline="none"
            rel="noopener"
            color="secondary"
          >
            Uvloop
          </Link>
          , which is 2 times faster than Node.js and reaches the same speeds as
          many Go programs
        </Typography>
      </Stack>
      <Stack
        spacing={2}
        alignItems="center"
        justifyContent="center"
        pt={10}
        mx={10}
      >
        <GitHubIcon
          sx={{
            fontSize: 175,
            color: "#FFFFFF",
          }}
        />
        <Typography variant="h4" color="common.white" pt={4} align="center">
          Completely Free and Open Source
        </Typography>
        <Typography variant="h5" color="common.white" py={3} align="center">
          Rin's source code remains completely free and open source, and it is
          licensed under Apache-2.0. Ultimately, you as the end user or
          developer, will be able to have access to these services for free. Rin
          will always stay free and open source.
        </Typography>
      </Stack>
      <Stack
        spacing={2}
        alignItems="center"
        justifyContent="center"
        pt={10}
        mx={10}
      >
        <QuestionMarkIcon
          sx={{
            fontSize: 175,
            color: "#FFFFFF",
          }}
        />
        <Typography variant="h4" color="common.white" pt={4} align="center">
          Any Issues or Questions?
        </Typography>
        <Typography variant="h5" color="common.white" py={3} align="center">
          Feel free to submit an issue report on GitHub if you have any ideas,
          issues, or questions. Note that there is no Discord support server for
          Rin. If you want more features that Rin doesn't have, like an economy
          system, check out{" "}
          <Link
            href="https://github.com/No767/ Kumiko"
            underline="none"
            color="secondary"
          >
            Kumiko
          </Link>
          , which is a multipurpose version of Rin
        </Typography>
      </Stack>
    </>
  );
}
