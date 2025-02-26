import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../lib/theme';
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: "Lincoln Math Competition",
  description: `A free multi-round math competition for elementary schoolers`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <NavBar />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
        <Analytics/>
      </body>
    </html>
  );
}
