"use client";

import { createTheme } from "@mui/material";
import { cyan, purple } from "@mui/material/colors";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const theme = createTheme({
    typography: {
        fontFamily: inter.style.fontFamily,
    },
    palette: {
        primary: {
            main: purple[300],
        },
        secondary: {
            main: cyan[300],
        },
    },
});
  
  export default theme;