import type { Metadata } from "next";
import { cookies } from "next/headers";
import React from "react";
import { GeneralContext } from "../contexts";
import Layout from "../layouts/layout";
import "../styles/calendars.css";
import "../styles/global.css";

export const metadata: Metadata = {
  title: "Mobula | Home",
  description: "Generated by create next app",
};

async function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = cookies();
  const userCookie = cookieStore.get("user-balance")?.value;
  const tradeFilterCookie = cookieStore.get("trade-filter")?.value;

  return (
    <html lang="en">
      <body>
        <GeneralContext>
          {/* <Providers> */}
          <Layout>{children}</Layout>
          {/* </Providers> */}
        </GeneralContext>
      </body>
    </html>
  );
}

export default RootLayout;
