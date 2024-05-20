import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../lib/theme';

export const metadata: Metadata = {
  title: "Lincoln Math Competition",
  description: `Lincoln Math Competition is a new annual math competition run by high schoolers that aims to 
                expand interest in competition math among elementary schoolers within Seattle Public Schools.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <NavBar />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
