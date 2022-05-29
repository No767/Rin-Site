import { FC } from "react";
import { Group, Text, Stack } from "@mantine/core";
import { SiNextdotjs } from "react-icons/si";
import { AiOutlineHeart } from "react-icons/ai";
import { motion } from "framer-motion";

export const Footer: FC = () => {
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
            delay: 0.1,
          }}
          viewport={{
            once: true,
          }}
        >
          <Text align="center">
            ©2022 No767 - Website Licensed under GPL-3.0
          </Text>
        </motion.div>
      </Stack>
      <Stack
        align="center"
        justify="center"
        spacing="xl"
        pt={25}
        pb={50}
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
            delay: 0.2,
          }}
          viewport={{
            once: true,
          }}
        >
          <Text align="center">Website Built With</Text>
        </motion.div>
        <Group direction="row">
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
              delay: 0.3,
            }}
            viewport={{
              once: true,
            }}
          >
            <SiNextdotjs />
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
              delay: 0.4,
            }}
            viewport={{
              once: true,
            }}
          >
            <AiOutlineHeart />
          </motion.div>
        </Group>
      </Stack>
    </>
  );
};
