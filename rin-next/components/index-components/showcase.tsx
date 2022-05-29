import { FC } from "react";
import React from "react";
import { NextLink } from "@mantine/next";
import {
  Group,
  Button,
  MediaQuery,
  Image,
  Stack,
  Text,
  Divider,
} from "@mantine/core";
import { MdInfoOutline } from "react-icons/md";
import { SiGithub, SiDiscord } from "react-icons/si";
import { FiTerminal } from "react-icons/fi";

export const Showcase: FC = () => {
  return (
    <>
      <Stack
        align="center"
        justify="center"
        spacing="lg"
        pt={25}
        sx={{ color: "#FFFFFF" }}
        mx={50}
      >
        <Image
          radius="md"
          src="https://raw.githubusercontent.com/No767/Rin-Site/master/Rin-Site-React/src/images/Rin%20Logo%20V4%20(GitHub).png"
          alt="Rin's Logo"
          width={256}
          height={256}
        />
        <Text className="titleHeader" align="center">
          Rin
        </Text>
        <Text className="titleDescription" align="center">
          A Discord bot focused on obtaining data from third-party services with
          lighting performance in mind
        </Text>
        <MediaQuery largerThan="xl" styles={{ display: "none" }}>
          <Group
            direction="column"
            align="center"
            position="center"
            pt={15}
            spacing="lg"
          >
            <Button
              variant="outline"
              size="xl"
              radius="lg"
              styles={{ label: { color: "white" } }}
              leftIcon={<SiDiscord />}
              href="https://top.gg/bot/865883525932253184/invite"
              component={NextLink}
              sx={{
                height: 100,
                width: 315,
              }}
            >
              Invite
            </Button>
            <Button
              variant="outline"
              size="xl"
              radius="lg"
              component={NextLink}
              href="https://github.com/No767/Rin"
              target="_self"
              styles={{ label: { color: "white" } }}
              leftIcon={<SiGithub />}
              sx={{
                height: 100,
                width: 315,
              }}
            >
              GitHub
            </Button>
            <Button
              variant="outline"
              size="xl"
              radius="lg"
              component={NextLink}
              href="https://docs.rinbot.live"
              target="_self"
              styles={{ label: { color: "white" } }}
              leftIcon={<MdInfoOutline />}
              sx={{
                height: 100,
                width: 315,
              }}
            >
              Docs
            </Button>

            <Button
              variant="outline"
              size="xl"
              radius="lg"
              component={NextLink}
              href="/commands"
              target="_self"
              styles={{ label: { color: "white" } }}
              leftIcon={<FiTerminal />}
              sx={{
                height: 100,
                width: 315,
              }}
            >
              Commands
            </Button>
          </Group>
        </MediaQuery>
        <MediaQuery smallerThan="xl" styles={{ display: "none" }}>
          <Group
            direction="row"
            align="center"
            position="center"
            pt={15}
            spacing="lg"
          >
            <Button
              variant="outline"
              size="xl"
              radius="lg"
              styles={{ label: { color: "white" } }}
              leftIcon={<SiDiscord />}
              href="https://top.gg/bot/865883525932253184/invite"
              component={NextLink}
              sx={{
                height: 100,
                width: 315,
              }}
            >
              Invite
            </Button>
            <Button
              variant="outline"
              size="xl"
              radius="lg"
              component={NextLink}
              href="https://github.com/No767/Rin"
              target="_self"
              styles={{ label: { color: "white" } }}
              leftIcon={<SiGithub />}
              sx={{
                height: 100,
                width: 315,
              }}
            >
              GitHub
            </Button>
            <Button
              variant="outline"
              size="xl"
              radius="lg"
              component={NextLink}
              href="https://docs.rinbot.live"
              target="_self"
              styles={{ label: { color: "white" } }}
              leftIcon={<MdInfoOutline />}
              sx={{
                height: 100,
                width: 315,
              }}
            >
              Docs
            </Button>

            <Button
              variant="outline"
              size="xl"
              radius="lg"
              component={NextLink}
              href="/commands"
              target="_self"
              styles={{ label: { color: "white" } }}
              leftIcon={<FiTerminal />}
              sx={{
                height: 100,
                width: 315,
              }}
            >
              Commands
            </Button>
          </Group>
        </MediaQuery>
      </Stack>
      <Divider my={50} mx={100} sx={{ color: "#FFFFFF" }} />
    </>
  );
};
