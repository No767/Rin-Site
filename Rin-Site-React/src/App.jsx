import "./index.css";
import logo from "./images/Rin Logo V4 (GitHub).png";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Button from "@mui/material/Button";
import { FaGithub } from "react-icons/fa";
import { HiOutlineStatusOnline } from "react-icons/hi";
import Stack from "@mui/material/Stack";
import SpeedIcon from "@mui/icons-material/Speed";
import Link from "@mui/material/Link";
import CollectionsIcon from "@mui/icons-material/Collections";
import GitHubIcon from "@mui/icons-material/GitHub";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import {
  SiReact,
  SiMaterialui,
  SiTailwindcss,
  SiDiscord,
} from "react-icons/si";
import Divider from "@mui/material/Divider";
import { ThemeProvider, createTheme, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { motion } from "framer-motion";

const navigation = [
  {
    name: "Invite",
    href: "https://top.gg/bot/865883525932253184/invite",
    current: false,
  },
  { name: "GitHub", href: "https://github.com/No767/Rin", current: false },
  { name: "Docs", href: "https://docs.rinbot.live", current: false },
  {
    name: "Status Tracker",
    href: "https://status.rinbot.live",
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "Quicksand",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#ededed",
    },
  },
});

function widthChecker() {
  const theme3 = useTheme();
  const matches = useMediaQuery(theme3.breakpoints.down("sm"));
  const smallMatches = useMediaQuery(theme3.breakpoints.down("xs"));
  if (matches == true || smallMatches == true) {
    return "column";
  } else {
    return "row";
  }
}
function App() {
  return (
    <div className="App">
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-center">
                  <div className="flex-shrink-0 flex items-center">
                    <img
                      className="block lg:hidden sm:hidden h-8 w-auto"
                      src={logo}
                      alt="Workflow"
                    />
                  </div>
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white text-center",
                            "px-3 py-2 rounded-md text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white text-center",
                      "block px-3 py-2 rounded-md text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Stack
        spacing={2}
        alignItems="center"
        justifyContent="center"
        pt={10}
        mx={10}
      >
        <motion.div
          animate={{ y: [-100, 0], opacity: [0, 1] }}
          transition={{ y: { type: "spring" }, duration: 2 }}
          viewport={{ once: true }}
        >
          <img src={logo}></img>
        </motion.div>
        <motion.div
          animate={{ y: [-125, 0], opacity: [0, 1] }}
          transition={{ y: { type: "spring" }, duration: 2 }}
          viewport={{ once: true }}
        >
          <p className="text-5xl text-center text-white">Rin</p>
        </motion.div>
        <motion.div
          animate={{ y: [-150, 0], opacity: [0, 1] }}
          transition={{ y: { type: "spring" }, duration: 2 }}
          viewport={{ once: true }}
        >
          <p className="text-2xl text-center py-3 text-white">
            A Discord bot focused on obtaining data from third-party services
          </p>
        </motion.div>
      </Stack>
      <ThemeProvider theme={theme}>
        <Stack
          direction={widthChecker()}
          spacing={8}
          justifyContent="center"
          alignItems="center"
          pt={6}
          mx={1.5}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{ y: [-100, 0], opacity: [0, 1] }}
            transition={{ y: { type: "spring" }, duration: 0.25 }}
            viewport={{ once: true }}
          >
            <Button
              variant="contained"
              href="https://top.gg/bot/865883525932253184/invite"
              startIcon={<SiDiscord />}
              color="primary"
              size="large"
              sx={{
                color: "black",
                height: 100,
                width: 315,
                backgroundColor: "white",
              }}
            >
              Invite
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{ y: [-100, 0], opacity: [0, 1] }}
            transition={{ y: { type: "spring" }, duration: 0.25 }}
            viewport={{ once: true }}
          >
            <Button
              variant="contained"
              href="https://github.com/No767/Rin"
              startIcon={<FaGithub />}
              size="large"
              sx={{
                color: "black",
                height: 100,
                width: 315,
                backgroundColor: "white",
              }}
            >
              GitHub
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{ y: [-100, 0], opacity: [0, 1] }}
            transition={{ y: { type: "spring" }, duration: 0.25 }}
            viewport={{ once: true }}
          >
            <Button
              variant="contained"
              href="https://docs.rinbot.live"
              startIcon={<QuestionMarkIcon />}
              size="large"
              sx={{
                color: "black",
                height: 100,
                width: 315,
                backgroundColor: "white",
              }}
            >
              Docs
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{ y: [-100, 0], opacity: [0, 1] }}
            transition={{ y: { type: "spring" }, duration: 0.25 }}
            viewport={{ once: true }}
          >
            <Button
              variant="contained"
              href="https://status.rinbot.live"
              startIcon={<HiOutlineStatusOnline />}
              size="large"
              sx={{
                color: "black",
                height: 100,
                width: 315,
                backgroundColor: "white",
              }}
            >
              Status Tracker
            </Button>
          </motion.div>
        </Stack>
      </ThemeProvider>
      <motion.div
        animate={{ y: [-50, 0], opacity: [0, 1] }}
        transition={{ y: { type: "spring" }, duration: 2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Divider
          style={{ background: "white" }}
          sx={{ mt: 15, mx: 15 }}
          variant="middle"
        />
      </motion.div>
      <div className="text-center text-white container mx-auto">
        <Stack
          spacing={2}
          alignItems="center"
          justifyContent="center"
          pt={15}
          mx={10}
        >
          <CollectionsIcon sx={{ fontSize: 175 }} />
          <p className="text-4xl pt-4 text-center text-white">
            A Wide Collection of Services Supported
          </p>
          <p className="text-2xl py-3 text-center">
            Rin supports a wide variety of services, allowing to obtain data
            from these services from within Discord. For example, you can fetch
            memes from Reddit, or fetch info about your favorite anime, and much
            much more. Rin has integration with Hypixel, DeviantArt, Twitter,
            MangaDex, YouTube, and many more. More will be added, such as Kitsu,
            Twitch, and CurseForge integration
          </p>
        </Stack>
      </div>
      <div className="text-center text-white container mx-auto">
        <Stack
          spacing={2}
          alignItems="center"
          justifyContent="center"
          pt={10}
          mx={10}
        >
          <SpeedIcon sx={{ fontSize: 175 }} />
          <p className="text-4xl pt-4 text-center text-white">
            Optimized for Performance
          </p>
          <p className="text-2xl py-3 text-center">
            Rin has been built with performance in mind. Under the hood, Rin
            uses{" "}
            <Link
              href="https://github.com/MagicStack/uvloop"
              underline="none"
              rel="noopener"
              color="secondary"
            >
              Uvloop
            </Link>
            , which is 2 times faster than Node.js and reaches the same speeds
            as many Go programs
          </p>
        </Stack>
      </div>
      <div className="text-center text-white container mx-auto">
        <Stack
          spacing={2}
          alignItems="center"
          justifyContent="center"
          pt={10}
          mx={10}
        >
          <GitHubIcon sx={{ fontSize: 175 }} />
          <p className="text-4xl pt-4 text-center text-white">
            Completely Free and Open Source
          </p>
          <p className="text-2xl py-3 text-center">
            {" "}
            Rin's source code remains completely free and open source, and it is
            licensed under Apache-2.0. This allows for a level of transparency,
            and thus allowing anyone to contribute to the bot if they wish so.
            In short, it's not dangerous to use. Feel free to help out if you
            can.
          </p>
        </Stack>
      </div>
      <div className="text-center text-white container mx-auto">
        <Stack
          spacing={2}
          alignItems="center"
          justifyContent="center"
          pt={10}
          mx={10}
        >
          <QuestionMarkIcon sx={{ fontSize: 175 }} />
          <p className="text-4xl pt-4 text-center text-white">
            Any Issues or Questions?
          </p>
          <p className="text-2xl py-3 text-center">
            {" "}
            Feel free to submit an issue report on GitHub if you have any ideas,
            issues, or questions. Note that there is no Discord support server
            for Rin. If you want more features that Rin doesn't have, like an
            economy system, check out{" "}
            <Link
              href="https://github.com/No767/Kumiko"
              underline="none"
              color="secondary"
            >
              Kumiko
            </Link>
            , which is a multipurpose version of Rin
          </p>
        </Stack>
      </div>
      <Stack
        spacing={2}
        alignItems="center"
        justifyContent="center"
        pt={10}
        mx={10}
      >
        <p className="text-md text-white text-center">
          ©2022 No767 - Website Licensed under GPL-3.0
        </p>
      </Stack>
      <Stack
        spacing={2}
        alignItems="center"
        justifyContent="center"
        pt={5}
        mx={10}
      >
        <p className="text-md text-white text-center">Built with</p>
      </Stack>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="center"
        pt={1}
        mx={10}
        pb={5}
        divider={
          <Divider
            orientation="vertical"
            style={{ background: "white" }}
            flexItem
          />
        }
      >
        <SiReact className="text-white" />
        <SiMaterialui className="text-white" />
        <SiTailwindcss className="text-white" />
      </Stack>
    </div>
  );
}

export default App;
