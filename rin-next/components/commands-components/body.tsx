import { FC } from "react";
import { Title, Text, Stack, Anchor } from "@mantine/core";
import { NextLink } from "@mantine/next";
import { motion } from "framer-motion";

export const CommandsBody: FC = () => {
  return (
    <>
      <Stack
        align="center"
        justify="center"
        spacing="xl"
        pt={75}
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
        <Title order={1} align="center">
          Commands
        </Title>
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
        <Text size="lg" align="center" pb={100}>
          Rin&apos;s commands can be found{" "}
          <Anchor
            component={NextLink}
            href="https://docs.rinbot.live/docs/commands/rin-commands"
            target="_blank"
            color="pink"
            size="lg"
          >
            here
          </Anchor>
          . Rin offers 80+ commands for you to enjoy and use.
        </Text>
        </motion.div>
      </Stack>
    </>
  );
};
