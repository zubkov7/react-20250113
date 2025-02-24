import { Layout } from "../components/layout/layout";
import { ThemeContextProvider } from "../components/theme-context/theme-context";
import { AuthContextProvider } from "../components/auth-context/auth-context";

import "../styles/app.css";
import { ReduxProvider } from "../redux/provider";

export const metadata = {
  title: "Heaphones Shop",
  description: "next js app",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' type='image/svg+xml' href='/vite.svg' />
      </head>
      <body>
        <div id='root'>
          <ReduxProvider>
            <ThemeContextProvider>
              <AuthContextProvider>
                <Layout>{children}</Layout>
              </AuthContextProvider>
            </ThemeContextProvider>
          </ReduxProvider>
        </div>
      </body>
    </html>
  );
}
