import { FC } from "react";
import { Group, Text, Stack } from "@mantine/core";
import { SiNextdotjs } from "react-icons/si";
import { AiOutlineHeart } from "react-icons/ai";

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
        <Text align="center">©2022 No767 - Website Licensed under GPL-3.0</Text>
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
        <Text align="center">Website Built and Powered By</Text>
        <Group direction="row">
          <SiNextdotjs />
          <AiOutlineHeart />
        </Group>
      </Stack>
    </>
  );
};
