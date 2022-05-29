import { FC } from "react";
import { NextLink } from "@mantine/next";
import { Stack, Text, Title, Anchor } from "@mantine/core";
import { MdSpeed } from "react-icons/md";
import { SiGithub } from "react-icons/si";
import { FaWrench } from "react-icons/fa";

import { MdOutlineCollections } from "react-icons/md";
import { motion, Variants } from "framer-motion";
import "../../styles/globals.css";

const mainVariants: Variants = {
  offscreen: {
    y: 0,
  },
  onscreen: {
    y: [-100, 0],
    opacity: [0, 1],
  },
};

export const Info: FC = () => {
  return (
    <>
      <motion.div
        variants={mainVariants}
        initial="offscreen"
        whileInView="onscreen"
        transition={{
          y: {
            type: "spring",
          },
          duration: 2,
          delay: 0.1,
        }}
        viewport={{ once: true }}
      >
        <Stack
          align="center"
          justify="center"
          spacing="xl"
          pt={25}
          sx={{ color: "#FFFFFF" }}
          mx={50}
        >
          <MdOutlineCollections className="iconSize" />
          <Title order={1} align="center">
            A Wide Amount of Integrations
          </Title>
          <Text align="center" size="lg">
            Rin supports a wide variety of services, allowing to obtain data
            from these services from within Discord. For example, you can fetch
            memes from Reddit, or fetch info about your favorite anime, and much
            much more. Rin has integration with Hypixel, DeviantArt, Twitter,
            MangaDex, YouTube, Modrinth and many more. More will be added, such
            as Kitsu, Twitch, AniList, Spotify, and many others
          </Text>
        </Stack>
      </motion.div>
      <motion.div
        variants={mainVariants}
        initial="offscreen"
        whileInView="onscreen"
        transition={{
          y: {
            type: "spring",
          },
          duration: 2,
          delay: 0.2,
        }}
        viewport={{ once: true }}
      >
        <Stack
          align="center"
          justify="center"
          spacing="xl"
          pt={100}
          sx={{ color: "#FFFFFF" }}
          mx={50}
        >
          <FaWrench className="iconSize" />
          <Title order={1} align="center">
            Modular By Design
          </Title>
          <Text align="center" size="lg">
            Rin is designed to serve as a base image, so developers can use Rin
            to build features on top of it. In fact,{" "}
            <Anchor
              component={NextLink}
              href="https://github.com/No767/Kumiko"
              target="_blank"
              color="pink"
              size="lg"
            >
              Kumiko
            </Anchor>{" "}
            is designed to serve more features than Rin, including a fully
            opt-in economy, and much much more
          </Text>
        </Stack>
      </motion.div>
      <motion.div
        variants={mainVariants}
        initial="offscreen"
        whileInView="onscreen"
        transition={{
          y: {
            type: "spring",
          },
          duration: 2,
          delay: 0.3,
        }}
        viewport={{ once: true }}
      >
        <Stack
          align="center"
          justify="center"
          spacing="xl"
          pt={100}
          sx={{ color: "#FFFFFF" }}
          mx={50}
        >
          <MdSpeed className="iconSize" />
          <Title order={1} align="center">
            Built with Blazing Fast Performance
          </Title>
          <Text align="center" size="lg">
            {" "}
            Rin is built with a focus on performance in mind. Rin is accelerated
            by{" "}
            <Anchor
              component={NextLink}
              href="https://github.com/MagicStack/uvloop"
              target="_blank"
              color="pink"
              size="lg"
            >
              Uvloop
            </Anchor>{" "}
            and{" "}
            <Anchor
              component={NextLink}
              href="https://simdjson.org/"
              target="_blank"
              color="pink"
              size="lg"
            >
              Simdjson
            </Anchor>
            , thus resulting in performance faster than most bots written in
            Node and on-par with bots written in Go
          </Text>
        </Stack>
      </motion.div>
      <motion.div
        variants={mainVariants}
        initial="offscreen"
        whileInView="onscreen"
        transition={{
          y: {
            type: "spring",
          },
          duration: 2,
          delay: 0.4,
        }}
        viewport={{ once: true }}
      >
        <Stack
          align="center"
          justify="center"
          spacing="xl"
          pt={100}
          sx={{ color: "#FFFFFF" }}
          mx={50}
        >
          <SiGithub className="iconSize" />
          <Title order={1} align="center">
            Completely Free and Open Source
          </Title>
          <Text align="center" size="lg">
            Rin is also completely free and open source, unlike popular Discord
            bots, which many if not all are closed source. Ultimately, you as
            the end user or developer, will be able to have access to these
            services for free. Rin will always stay free and open source.
          </Text>
        </Stack>
      </motion.div>
    </>
  );
};
