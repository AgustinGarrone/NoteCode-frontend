"use client";

import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

export function Providers({ children }: { children: JSX.Element }) {
  const queryClient = new QueryClient();

  // Crea un tema personalizado (opcional)
  const theme = createTheme({
    palette: {
      primary: {
        main: "#FFFFFE",
      },
      secondary: {
        main: "#121826",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
