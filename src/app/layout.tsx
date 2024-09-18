import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { Sidebar } from "./components/Sidebar/Sidebar";
import StoreProvider from "./StoreProvider";

export const metadata: Metadata = {
  title: "Surface Workflow App",
  description: "Surface Workflow App Dashboard for analytics",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <StoreProvider>
      <html lang="en" className={`${GeistSans.variable}`}>
        <body>
          <div className="flex min-h-screen">
            <div>
              <Sidebar />
            </div>
            <div className="flex min-h-screen w-screen flex-grow flex-col md:w-full">
              {children}
            </div>
          </div>
        </body>
      </html>
    </StoreProvider>
  );
}
