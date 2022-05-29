import { FC } from "react";
import React, { useState } from "react";
import { NextLink } from "@mantine/next";
import {
  Container,
  Group,
  Button,
  MediaQuery,
  Burger,
  Drawer,
  Avatar,
  ActionIcon,
} from "@mantine/core";
import { MdInfoOutline } from "react-icons/md";
import { SiGithub, SiDiscord } from "react-icons/si";
import { FiTerminal } from "react-icons/fi";
import { HiOutlineStatusOnline } from "react-icons/hi";

export const NavBar: FC = () => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Container fluid={true} pt={25}>
        <MediaQuery largerThan="lg" styles={{ display: "none" }}>
          <Group position="apart" pl={25}>
            <ActionIcon component={NextLink} href="/">
              <Avatar
                src="https://raw.githubusercontent.com/No767/Rin-Site/master/Rin-Site-React/src/images/Rin%20Logo%20V4%20(GitHub).png"
                radius="xl"
                size="lg"
              />
            </ActionIcon>
            <Group position="right">
              <Drawer
                opened={opened}
                onClose={() => setOpened(false)}
                padding="xl"
                size="md"
              >
                <Group position="right" align="center" direction="column">
                  <Button
                    variant="outline"
                    size="md"
                    radius="lg"
                    component={NextLink}
                    href="/commands"
                    target="_self"
                    styles={{ label: { color: "white" } }}
                    leftIcon={<FiTerminal />}
                  >
                    Commands
                  </Button>
                  <Button
                    variant="outline"
                    size="md"
                    radius="lg"
                    component={NextLink}
                    href="https://status.rinbot.live"
                    target="_self"
                    styles={{ label: { color: "white" } }}
                    leftIcon={<HiOutlineStatusOnline />}
                  >
                    Status Tracker
                  </Button>
                  <Button
                    variant="outline"
                    size="md"
                    radius="lg"
                    component={NextLink}
                    href="https://docs.rinbot.live"
                    target="_self"
                    styles={{ label: { color: "white" } }}
                    leftIcon={<MdInfoOutline />}
                  >
                    Docs
                  </Button>
                  <Button
                    variant="outline"
                    size="md"
                    radius="lg"
                    component={NextLink}
                    href="https://github.com/No767/Rin"
                    target="_self"
                    styles={{ label: { color: "white" } }}
                    leftIcon={<SiGithub />}
                  >
                    GitHub
                  </Button>
                  <Button
                    variant="outline"
                    size="md"
                    radius="lg"
                    styles={{ label: { color: "white" } }}
                    leftIcon={<SiDiscord />}
                    href="https://top.gg/bot/865883525932253184/invite"
                    component={NextLink}
                  >
                    Invite
                  </Button>
                </Group>
              </Drawer>
              <Burger
                opened={opened}
                onClick={() => setOpened(true)}
                mx={15}
                size="md"
              />
            </Group>
          </Group>
        </MediaQuery>

        <MediaQuery smallerThan="lg" styles={{ display: "none" }}>
          <Group position="apart" pl={25}>
            <ActionIcon component={NextLink} href="/">
              <Avatar
                src="https://raw.githubusercontent.com/No767/Rin-Site/master/Rin-Site-React/src/images/Rin%20Logo%20V4%20(GitHub).png"
                radius="xl"
                size="lg"
              />
            </ActionIcon>
            <Group position="left" align="center" direction="row">
              <Button
                variant="outline"
                size="md"
                radius="lg"
                component={NextLink}
                href="/commands"
                target="_self"
                styles={{ label: { color: "white" } }}
                leftIcon={<FiTerminal />}
              >
                Commands
              </Button>
              <Button
                variant="outline"
                size="md"
                radius="lg"
                component={NextLink}
                href="https://status.rinbot.live"
                target="_self"
                styles={{ label: { color: "white" } }}
                leftIcon={<HiOutlineStatusOnline />}
              >
                Status Tracker
              </Button>
              <Button
                variant="outline"
                size="md"
                radius="lg"
                component={NextLink}
                href="https://docs.rinbot.live"
                target="_self"
                styles={{ label: { color: "white" } }}
                leftIcon={<MdInfoOutline />}
              >
                Docs
              </Button>
              <Button
                variant="outline"
                size="md"
                radius="lg"
                component={NextLink}
                href="https://github.com/No767/Rin"
                target="_self"
                styles={{ label: { color: "white" } }}
                leftIcon={<SiGithub />}
              >
                GitHub
              </Button>
              <Button
                variant="outline"
                size="md"
                radius="lg"
                styles={{ label: { color: "white" } }}
                leftIcon={<SiDiscord />}
                href="https://top.gg/bot/865883525932253184/invite"
                component={NextLink}
              >
                Invite
              </Button>
            </Group>
          </Group>
        </MediaQuery>
      </Container>
    </>
  );
};
