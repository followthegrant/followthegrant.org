import { deepPurple } from '@mui/material/colors';
import { extendTheme } from "@mui/joy/styles";

export default extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: deepPurple,
      },
    },
  },
  fontFamily: {
    display: "PT Sans, var(--joy-fontFamily-fallback)",
    body: "PT Sans, var(--joy-fontFamily-fallback)",
  },
});
