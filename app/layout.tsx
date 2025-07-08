// app/layout.tsx
import type { Metadata } from "next";
import { inter, jetbrain_mono } from "@/app/fonts";
import "./globals.css";
import { ThemeProvider } from "@/app/ThemeProvider";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { FaHome, FaUser, FaBriefcase, FaCode } from "react-icons/fa";
import StickyIcons from "@/components/sections/StickyIcons";
import Footer from "@/components/sections/Footer";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Dahn Tran",
  description: "Personal portfolio of Dahn Tran",
};

const navItems = [
  {
    name: "Home",
    link: "#home",
    icon: <FaHome />,
  },
  {
    name: "About",
    link: "#about",
    icon: <FaUser />,
  },
  {
    name: "Projects",
    link: "#projects",
    icon: <FaCode />,
  },
  {
    name: "Work",
    link: "#work",
    icon: <FaBriefcase />,
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./favicon-x32.png"
        />
        <meta property="og:title" content="Dahn Tran's Portfolio" />
        <meta
          property="og:description"
          content="Data analyst with a passion for web development and machine learning. Transforming complex data into actionable insights and building innovative web solutions."
        />
        <meta property="og:url" content="https://dahntran.dev" />
        <meta
          property="og:image"
          content="https://dahntran.dev/pics/web_screenshot.png"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            if (window.location.href === "https://github.com/universe-diamond/portfolio") {
              window.location.replace("https://www.dahntran.dev");
            }
          `,
          }}
        />
        <meta property="og:type" content="website" />
      </head>
      <body
        className={`${jetbrain_mono.variable} ${inter.variable} font-mono antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <FloatingNav navItems={navItems} />
          <StickyIcons />
          {children}
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
