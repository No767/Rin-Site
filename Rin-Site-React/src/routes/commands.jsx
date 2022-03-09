import Stack from "@mui/material/Stack";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PhoneIcon from "@mui/icons-material/Phone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import PhoneMissedIcon from "@mui/icons-material/PhoneMissed";
import { createTheme } from "@mui/material/styles";

export default function Commands() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
        main: "#ffffff",
      },
    },
  });
  return (
    <body>
      <Stack spacing={2} pt={10} className="items-center">
        <h1 className="text-white">Commands</h1>

        <Tabs
          indicatorColor="secondary"
          aria-label="icon position tabs example"
          textColor="secondary"
        >
          <Tab icon={<PhoneIcon />} label="top" />
        </Tabs>
      </Stack>
    </body>
  );
}
