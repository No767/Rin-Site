import React from "react";

import Button from "@mui/material/Button";
import { FaGithub } from "react-icons/fa";
import { HiOutlineStatusOnline } from "react-icons/hi";
import Stack from "@mui/material/Stack";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { SiDiscord } from "react-icons/si";
import Divider from "@mui/material/Divider";
import { ThemeProvider } from "@mui/material/styles";
import { motion } from "framer-motion";
import Typography from "@mui/material/Typography";

export function Showcase({ logo, theme, widthChecker }) {
  return (
    <>
      <Stack
        spacing={2}
        alignItems="center"
        justifyContent="center"
        pt={10}
        mx={10}
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
          <img src={logo}></img>
        </motion.div>
        <motion.div
          animate={{
            y: [-125, 0],
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
          <Typography align="center" variant="h3" color="common.white">
            Rin
          </Typography>
        </motion.div>
        <motion.div
          animate={{
            y: [-150, 0],
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
          <Typography align="center" variant="h5" color="common.white">
            A Discord bot focused on obtaining data from third-party services
            with lighting performance in mind
          </Typography>
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
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.9,
            }}
            animate={{
              y: [-100, 0],
              opacity: [0, 1],
            }}
            transition={{
              y: {
                type: "spring",
              },
              duration: 0.25,
            }}
            viewport={{
              once: true,
            }}
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
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.9,
            }}
            animate={{
              y: [-100, 0],
              opacity: [0, 1],
            }}
            transition={{
              y: {
                type: "spring",
              },
              duration: 0.25,
            }}
            viewport={{
              once: true,
            }}
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
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.9,
            }}
            animate={{
              y: [-100, 0],
              opacity: [0, 1],
            }}
            transition={{
              y: {
                type: "spring",
              },
              duration: 0.25,
            }}
            viewport={{
              once: true,
            }}
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
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.9,
            }}
            animate={{
              y: [-100, 0],
              opacity: [0, 1],
            }}
            transition={{
              y: {
                type: "spring",
              },
              duration: 0.25,
            }}
            viewport={{
              once: true,
            }}
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
        animate={{
          y: [-50, 0],
          opacity: [0, 1],
        }}
        transition={{
          y: {
            type: "spring",
          },
          duration: 2,
          ease: "easeOut",
        }}
        viewport={{
          once: true,
        }}
      >
        <Divider
          style={{
            background: "white",
          }}
          sx={{
            mt: 15,
            mx: 15,
          }}
          variant="middle"
        />
      </motion.div>
    </>
  );
}
