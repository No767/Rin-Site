import { FC } from "react";
import { Title, Text, Stack, Anchor } from "@mantine/core";
import { NextLink } from "@mantine/next";

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
        <Title order={1} align="center">
          Commands
        </Title>
        <Text size="lg" align="center" pb={100}>
          Rin's commands can be found{" "}
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
      </Stack>
    </>
  );
};
