import React from "react";
import NextLink from "next/link";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
  Show,
  Hide,
  useDisclosure,
  useColorMode,
  useColorModeValue,
  Button,
  HStack,
  Flex,
  Spacer,
  Avatar,
  VStack,
  Text,
  Heading,
} from "@chakra-ui/react";
import { SiGithub, SiDiscord } from "react-icons/si";
import { AiOutlineMenu } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import Image from "next/image";
import RinLogo256 from "../../public/logos/rin-logo-256.png";

export default function IndexShowcase() {
  return (
    <>
      <VStack
        align="center"
        direction="column"
        justify="center"
        spacing={5}
        pt={15}
        mx={50}
      >
        <Image src={RinLogo256} alt="Rin's Logo" />
        <Heading as="h2" size="xl">
          Rin
        </Heading>
        <Text fontSize="2xl" align="center">
          A Discord bot focused on obtaining data from third-party services with
          lighting performance in mind
        </Text>
      </VStack>
    </>
  );
}
