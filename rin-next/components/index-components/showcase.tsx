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
import { motion } from "framer-motion";

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
        <motion.div
          animate={{
            y: [-100, 0],
            opacity: [0, 1],
          }}
          transition={{
            y: {
              type: "spring",
            },
            duration: 2,
          }}
          viewport={{
            once: true,
          }}
        >
        <Image
          radius="md"
          src="https://raw.githubusercontent.com/No767/Rin-Site/master/Rin-Site-React/src/images/Rin%20Logo%20V4%20(GitHub).png"
          alt="Rin's Logo"
          width={256}
          height={256}
        />
        </motion.div>
        <motion.div
          animate={{
            y: [-100, 0],
            opacity: [0, 1],
          }}
          transition={{
            y: {
              type: "spring",
            },
            duration: 2,
            delay: 0.1
          }}
          viewport={{
            once: true,
          }}
        >
        <Text className="titleHeader" align="center">
          Rin
        </Text>
        </motion.div>
        <motion.div
          animate={{
            y: [-100, 0],
            opacity: [0, 1],
          }}
          transition={{
            y: {
              type: "spring",
            },
            duration: 2,
            delay: 0.2
          }}
          viewport={{
            once: true,
          }}
        >
        <Text className="titleDescription" align="center">
          A Discord bot focused on obtaining data from third-party services with
          lighting performance in mind
        </Text>
        </motion.div>
        <MediaQuery largerThan="xl" styles={{ display: "none" }}>
          <Group
            direction="column"
            align="center"
            position="center"
            pt={15}
            spacing="lg"
          >
                    <motion.div
          animate={{
            y: [-100, 0],
            opacity: [0, 1],
          }}
          whileHover={{
            scale: 1.1,
            transition: { type: "spring", duration: 0.7 }
          }}
          whileTap={{
            scale: 0.9,
            transition: {type: "spring", duration: 0.7 }
          }}
          transition={{
            y: {
              type: "spring",
            },
            duration: 2,
            delay: 0.3
          }}
          viewport={{
            once: true,
          }}
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
            </motion.div>
            <motion.div
          animate={{
            y: [-100, 0],
            opacity: [0, 1],
          }}
          whileHover={{
            scale: 1.1,
            transition: { type: "spring", duration: 0.7 }
          }}
          whileTap={{
            scale: 0.9,
            transition: {type: "spring", duration: 0.7 }
          }}
          transition={{
            y: {
              type: "spring",
            },
            duration: 2,
            delay: 0.4
          }}
          viewport={{
            once: true,
          }}
        >
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
            </motion.div>
            <motion.div
          animate={{
            y: [-100, 0],
            opacity: [0, 1],
          }}
          whileHover={{
            scale: 1.1,
            transition: { type: "spring", duration: 0.7 }
          }}
          whileTap={{
            scale: 0.9,
            transition: {type: "spring", duration: 0.7 }
          }}
          transition={{
            y: {
              type: "spring",
            },
            duration: 2,
            delay: 0.5
          }}
          viewport={{
            once: true,
          }}
        >
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
            </motion.div>
            <motion.div
          animate={{
            y: [-100, 0],
            opacity: [0, 1],
          }}
          whileHover={{
            scale: 1.1,
            transition: { type: "spring", duration: 0.7 }
          }}
          whileTap={{
            scale: 0.9,
            transition: {type: "spring", duration: 0.7 }
          }}
          transition={{
            y: {
              type: "spring",
            },
            duration: 2,
            delay: 0.6
          }}
          viewport={{
            once: true,
          }}
        >
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
            </motion.div>
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
                                <motion.div
          animate={{
            y: [-100, 0],
            opacity: [0, 1],
          }}
          whileHover={{
            scale: 1.1,
            transition: { type: "spring", duration: 0.7 }
          }}
          whileTap={{
            scale: 0.9,
            transition: {type: "spring", duration: 0.7 }
          }}
          transition={{
            y: {
              type: "spring",
            },
            duration: 2,
            delay: 0.3
          }}
          viewport={{
            once: true,
          }}
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
            </motion.div>
            <motion.div
          animate={{
            y: [-100, 0],
            opacity: [0, 1],
          }}          whileHover={{
            scale: 1.1,
            transition: { type: "spring", duration: 0.7 }
          }}
          whileTap={{
            scale: 0.9,
            transition: {type: "spring", duration: 0.7 }
          }}
          transition={{
            y: {
              type: "spring",
            },
            duration: 2,
            delay: 0.4
          }}
          viewport={{
            once: true,
          }}
        >
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
            </motion.div>
            <motion.div
          animate={{
            y: [-100, 0],
            opacity: [0, 1],
          }}
          whileHover={{
            scale: 1.1,
            transition: { type: "spring", duration: 0.7 }
          }}
          whileTap={{
            scale: 0.9,
            transition: {type: "spring", duration: 0.7 }
          }}
          transition={{
            y: {
              type: "spring",
            },
            duration: 2,
            delay: 0.5
          }}
          viewport={{
            once: true,
          }}
        >
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
            </motion.div>
            <motion.div
          animate={{
            y: [-100, 0],
            opacity: [0, 1],
          }}
          whileHover={{
            scale: 1.1,
            transition: { type: "spring", duration: 0.7 }
          }}
          whileTap={{
            scale: 0.9,
            transition: {type: "spring", duration: 0.7 }
          }}
          transition={{
            y: {
              type: "spring",
            },
            duration: 2,
            delay: 0.6
          }}
          viewport={{
            once: true,
          }}
        >
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
            </motion.div>
          </Group>
        </MediaQuery>
      </Stack>
      <motion.div
          animate={{
            y: [-100, 0],
            opacity: [0, 1],
          }}
          transition={{
            y: {
              type: "spring",
            },
            duration: 2,
            delay: 0.7
          }}
          viewport={{
            once: true,
          }}
        >
      <Divider my={50} mx={100} sx={{ color: "#FFFFFF" }} /></motion.div>

    </>
  );
};
