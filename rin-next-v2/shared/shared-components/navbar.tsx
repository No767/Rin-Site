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
} from "@chakra-ui/react";
import { SiGithub, SiDiscord } from "react-icons/si";
import { AiOutlineMenu } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <>
      <Flex alignItems="center" pt={5} mx={5}>
        {/* <NextLink href="/" passHref>
          <Avatar height={16} width={16} src="/logos/miku_smaller.png" as="a" />
        </NextLink> */}
        <Spacer />
        <Hide below="md">
          <HStack spacing={4} pt={5} mx={5} justify="flex-end">
            <IconButton
              aria-label="Switch to light or dark mode"
              variant="outline"
              borderColor="gray.500"
              size="lg"
              onClick={toggleColorMode}
              icon={<SwitchIcon />}
            />
            <NextLink href="https://github.com/No767/Miku" passHref>
              <Button
                variant="outline"
                leftIcon={<SiGithub />}
                borderColor="gray.500"
                size="lg"
                as="a"
              >
                GitHub
              </Button>
            </NextLink>
            <Popover>
              <PopoverTrigger>
                <Button
                  variant="outline"
                  leftIcon={<SiDiscord />}
                  borderColor="gray.500"
                  size="lg"
                >
                  Invite
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Whoa there !</PopoverHeader>
                <PopoverBody>
                  Miku is not ready for production, and thus not ready for any
                  invites yet
                </PopoverBody>
              </PopoverContent>
            </Popover>
            <NextLink href="/commands" passHref>
              <Button variant="outline" borderColor="gray.500" size="lg" as="a">
                Commands
              </Button>
            </NextLink>
          </HStack>
        </Hide>
        <Show below="md">
          <IconButton
            // @ts-ignore
            ref={btnRef}
            aria-label="Open Navbar"
            size="lg"
            colorScheme="white"
            borderColor="gray.500"
            onClick={onOpen}
            variant="outline"
            icon={<AiOutlineMenu />}
          />

          <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerBody>
                <VStack spacing={4} pt={15}>
                  <IconButton
                    aria-label="Switch to light or dark mode"
                    variant="outline"
                    borderColor="gray.500"
                    size="lg"
                    onClick={toggleColorMode}
                    icon={<SwitchIcon />}
                  />
                  <NextLink href="https://github.com/No767/Miku" passHref>
                    <Button
                      variant="outline"
                      leftIcon={<SiGithub />}
                      borderColor="gray.500"
                      size="lg"
                      as="a"
                    >
                      GitHub
                    </Button>
                  </NextLink>
                  <Popover>
                    <PopoverTrigger>
                      <Button
                        variant="outline"
                        leftIcon={<SiDiscord />}
                        borderColor="gray.500"
                        size="lg"
                      >
                        Invite
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverHeader>Whoa there !</PopoverHeader>
                      <PopoverBody>
                        Miku is not ready for production, and thus not ready for
                        any invites yet
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                  <NextLink href="/commands" passHref>
                    <Button
                      variant="outline"
                      borderColor="gray.500"
                      size="lg"
                      as="a"
                    >
                      Commands
                    </Button>
                  </NextLink>
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Show>
      </Flex>
    </>
  );
}
